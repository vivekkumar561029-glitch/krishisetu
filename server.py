import base64
import json
import mimetypes
import re
import uuid
from datetime import datetime
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse, unquote


ROOT_DIR = Path(__file__).resolve().parent
WEB_DIR = ROOT_DIR / "web"
DATA_DIR = ROOT_DIR / "data"
UPLOADS_DIR = ROOT_DIR / "uploads"
ITEMS_FILE = DATA_DIR / "items.json"
HOST = "127.0.0.1"
PORT = 8000


def ensure_storage():
  DATA_DIR.mkdir(exist_ok=True)
  UPLOADS_DIR.mkdir(exist_ok=True)
  if not ITEMS_FILE.exists():
    ITEMS_FILE.write_text("[]", encoding="utf-8")


def read_items():
  ensure_storage()
  try:
    return json.loads(ITEMS_FILE.read_text(encoding="utf-8"))
  except json.JSONDecodeError:
    return []


def write_items(items):
  ensure_storage()
  ITEMS_FILE.write_text(json.dumps(items, indent=2), encoding="utf-8")


def calculate_analytics(quantity, price_min, price_max, min_sell_amount):
  average_price = round((price_min + price_max) / 2)
  projected_value = round(quantity * average_price)
  minimum_match = min_sell_amount <= quantity * price_max
  return {
    "averagePrice": average_price,
    "projectedValue": projected_value,
    "minimumMatch": minimum_match,
  }


def sanitize_name(value):
  slug = re.sub(r"[^a-zA-Z0-9_-]+", "-", value.strip().lower()).strip("-")
  return slug or "item"


def parse_data_url(data_url):
  match = re.match(r"^data:(image\/(?:png|jpeg|jpg));base64,(.+)$", data_url)
  if not match:
    raise ValueError("Invalid image format. Only PNG and JPEG are allowed.")

  mime_type = match.group(1)
  encoded_data = match.group(2)
  extension = ".png" if "png" in mime_type else ".jpg"

  try:
    image_bytes = base64.b64decode(encoded_data)
  except Exception as error:
    raise ValueError("Could not decode image data.") from error

  return image_bytes, extension


class AppHandler(BaseHTTPRequestHandler):
  server_version = "AgriMarketHTTP/1.0"

  def do_GET(self):
    parsed = urlparse(self.path)
    if parsed.path == "/api/health":
      self.send_json(200, {"status": "ok", "serverTime": datetime.utcnow().isoformat() + "Z"})
      return

    if parsed.path == "/api/items":
      self.send_json(200, {"items": read_items()})
      return

    self.serve_static(parsed.path)

  def do_POST(self):
    parsed = urlparse(self.path)
    if parsed.path != "/api/items":
      self.send_json(404, {"error": "Endpoint not found"})
      return

    content_length = int(self.headers.get("Content-Length", "0"))
    if content_length <= 0:
      self.send_json(400, {"error": "Request body is required"})
      return

    raw_body = self.rfile.read(content_length)
    try:
      payload = json.loads(raw_body.decode("utf-8"))
    except json.JSONDecodeError:
      self.send_json(400, {"error": "Invalid JSON body"})
      return

    try:
      item = self.create_item(payload)
    except ValueError as error:
      self.send_json(400, {"error": str(error)})
      return
    except Exception:
      self.send_json(500, {"error": "Internal server error"})
      return

    self.send_json(201, {"item": item})

  def do_DELETE(self):
    parsed = urlparse(self.path)
    if parsed.path != "/api/items":
      self.send_json(404, {"error": "Endpoint not found"})
      return

    items = read_items()
    for item in items:
      image_url = item.get("imageUrl")
      if image_url:
        file_name = Path(urlparse(image_url).path).name
        file_path = UPLOADS_DIR / file_name
        if file_path.exists():
          file_path.unlink()

    write_items([])
    self.send_json(200, {"message": "All items cleared"})

  def create_item(self, payload):
    required_fields = [
      "productType",
      "productName",
      "quantity",
      "quantityUnit",
      "priceMin",
      "priceMax",
      "minSellAmount",
      "imageDataUrl",
    ]

    for field in required_fields:
      if field not in payload or payload[field] in ("", None):
        raise ValueError(f"{field} is required")

    try:
      quantity = float(payload["quantity"])
      price_min = float(payload["priceMin"])
      price_max = float(payload["priceMax"])
      min_sell_amount = float(payload["minSellAmount"])
    except (TypeError, ValueError):
      raise ValueError("Quantity and price fields must be valid numbers")

    if quantity <= 0 or price_min <= 0 or price_max <= 0 or min_sell_amount <= 0:
      raise ValueError("Quantity and price values must be greater than zero")

    if price_min > price_max:
      raise ValueError("Minimum price cannot be greater than maximum price")

    image_bytes, extension = parse_data_url(payload["imageDataUrl"])
    if len(image_bytes) > 4 * 1024 * 1024:
      raise ValueError("Image must be smaller than 4 MB")

    safe_name = sanitize_name(payload["productName"])
    file_name = f"{datetime.utcnow().strftime('%Y%m%d%H%M%S')}-{safe_name}-{uuid.uuid4().hex[:8]}{extension}"
    file_path = UPLOADS_DIR / file_name
    file_path.write_bytes(image_bytes)

    item = {
      "id": uuid.uuid4().hex,
      "createdAt": datetime.utcnow().isoformat() + "Z",
      "productType": str(payload["productType"]).strip(),
      "productName": str(payload["productName"]).strip(),
      "quantity": quantity,
      "quantityUnit": str(payload["quantityUnit"]).strip(),
      "priceMin": price_min,
      "priceMax": price_max,
      "minSellAmount": min_sell_amount,
      "notes": str(payload.get("notes", "")).strip(),
      "imageUrl": f"/uploads/{file_name}",
      "analytics": calculate_analytics(quantity, price_min, price_max, min_sell_amount),
    }

    items = read_items()
    items.insert(0, item)
    write_items(items[:50])
    return item

  def serve_static(self, request_path):
    requested = unquote(request_path)
    if requested == "/":
      file_path = ROOT_DIR / "index.html"
    elif requested.startswith("/web/"):
      file_path = ROOT_DIR / requested.lstrip("/")
    elif requested.startswith("/uploads/"):
      file_path = ROOT_DIR / requested.lstrip("/")
    elif requested in ("/favicon.ico", "/favicon.png", "/manifest.json"):
      file_path = WEB_DIR / requested.lstrip("/")
    else:
      file_path = ROOT_DIR / requested.lstrip("/")

    if not file_path.exists() or not file_path.is_file():
      self.send_json(404, {"error": "File not found"})
      return

    content_type = mimetypes.guess_type(str(file_path))[0] or "application/octet-stream"
    with file_path.open("rb") as file_handle:
      content = file_handle.read()

    self.send_response(200)
    self.send_header("Content-Type", content_type)
    self.send_header("Content-Length", str(len(content)))
    self.end_headers()
    self.wfile.write(content)

  def send_json(self, status_code, payload):
    body = json.dumps(payload).encode("utf-8")
    self.send_response(status_code)
    self.send_header("Content-Type", "application/json; charset=utf-8")
    self.send_header("Content-Length", str(len(body)))
    self.end_headers()
    self.wfile.write(body)

  def log_message(self, format, *args):
    return


def run_server():
  ensure_storage()
  server = ThreadingHTTPServer((HOST, PORT), AppHandler)
  print(f"AgriMarket server running at http://{HOST}:{PORT}")
  server.serve_forever()


if __name__ == "__main__":
  run_server()