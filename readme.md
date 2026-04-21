# AgriMarket Item Manager

This project now includes a standalone HTML, CSS, and JavaScript website for adding farm product items with image upload, validation, pricing summaries, and local record storage.
This project now includes a standalone HTML, CSS, and JavaScript website with a real Python backend for adding farm product items, uploading images, and storing records locally on disk.

## Run With VS Code Go Live
## Run The Full Website With Backend

1. Open the project folder in VS Code.
2. Right-click [index.html](/C:/Users/vivek/first_flutter_app/index.html) and choose `Open with Live Server`, or click `Go Live`.
3. The root page will automatically open the working website in [web/index.html](/C:/Users/vivek/first_flutter_app/web/index.html).
2. Open a terminal in the project folder.
3. Run:

```powershell
py server.py
```

4. Open [http://127.0.0.1:8000](http://127.0.0.1:8000)

## What The Backend Does

- Saves product data to [data/items.json](/C:/Users/vivek/first_flutter_app/data/items.json)
- Saves uploaded images inside [uploads](/C:/Users/vivek/first_flutter_app/uploads)
- Exposes API endpoints for listing, creating, and clearing items

## Main Files

- [index.html](/C:/Users/vivek/first_flutter_app/index.html): root launcher for Live Server
- [server.py](/C:/Users/vivek/first_flutter_app/server.py): Python backend and static file server
- [index.html](/C:/Users/vivek/first_flutter_app/index.html): root launcher
- [web/index.html](/C:/Users/vivek/first_flutter_app/web/index.html): main page structure
- [web/styles.css](/C:/Users/vivek/first_flutter_app/web/styles.css): full website styling
- [web/script.js](/C:/Users/vivek/first_flutter_app/web/script.js): interactive logic and local processing
- [web/script.js](/C:/Users/vivek/first_flutter_app/web/script.js): frontend logic connected to backend APIs