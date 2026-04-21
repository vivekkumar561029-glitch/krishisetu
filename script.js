const storageKey = "agri_market_items_v1";

const elements = {
  form: document.getElementById("productForm"),
  imageInput: document.getElementById("productImage"),
  uploadPlaceholder: document.getElementById("uploadPlaceholder"),
  previewImage: document.getElementById("previewImage"),
  imageMeta: document.getElementById("imageMeta"),
  progressFill: document.getElementById("progressFill"),
  feedbackMessage: document.getElementById("feedbackMessage"),
  recordsList: document.getElementById("recordsList"),
  averagePrice: document.getElementById("averagePrice"),
  projectedValue: document.getElementById("projectedValue"),
  minimumMatch: document.getElementById("minimumMatch"),
  resetButton: document.getElementById("resetButton"),
  clearStorageButton: document.getElementById("clearStorageButton"),
  submitButton: document.getElementById("submitButton"),
};

const fieldRefs = {
  productType: document.getElementById("productType"),
  productName: document.getElementById("productName"),
  quantity: document.getElementById("quantity"),
  quantityUnit: document.getElementById("quantityUnit"),
  priceMin: document.getElementById("priceMin"),
  priceMax: document.getElementById("priceMax"),
  minSellAmount: document.getElementById("minSellAmount"),
  notes: document.getElementById("notes"),
};

let selectedImageData = null;

const backendService = {
  async processItem(payload) {
    await simulateDelay(450);

    const savedItems = getSavedItems();
    const processedItem = {
      id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
      createdAt: new Date().toISOString(),
      ...payload,
      analytics: {
        averagePrice: Math.round((payload.priceMin + payload.priceMax) / 2),
        projectedValue: Math.round(payload.quantity * ((payload.priceMin + payload.priceMax) / 2)),
        minimumMatch: payload.minSellAmount <= payload.quantity * payload.priceMax,
      },
    };

    savedItems.unshift(processedItem);
    localStorage.setItem(storageKey, JSON.stringify(savedItems.slice(0, 12)));
    return processedItem;
  },
};

function simulateDelay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getSavedItems() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || [];
  } catch (error) {
    return [];
  }
}

function setError(fieldName, message) {
  const node = document.querySelector(`[data-error-for="${fieldName}"]`);
  if (node) {
    node.textContent = message;
  }
}

function clearErrors() {
  document.querySelectorAll(".error-text").forEach((node) => {
    node.textContent = "";
  });
}

function showFeedback(message, type) {
  elements.feedbackMessage.textContent = message;
  elements.feedbackMessage.className = `feedback-message ${type}`;
}

function hideFeedback() {
  elements.feedbackMessage.className = "feedback-message hidden";
  elements.feedbackMessage.textContent = "";
}

function formatCurrency(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Number(value) || 0);
}

function updateSummary() {
  const quantity = Number(fieldRefs.quantity.value) || 0;
  const priceMin = Number(fieldRefs.priceMin.value) || 0;
  const priceMax = Number(fieldRefs.priceMax.value) || 0;
  const minSellAmount = Number(fieldRefs.minSellAmount.value) || 0;
  const average = priceMin && priceMax ? (priceMin + priceMax) / 2 : 0;
  const projected = quantity * average;
  const isMatch = minSellAmount > 0 && projected > 0 ? minSellAmount <= projected : null;

  elements.averagePrice.textContent = formatCurrency(average);
  elements.projectedValue.textContent = formatCurrency(projected);
  elements.minimumMatch.textContent = isMatch === null ? "Pending" : isMatch ? "Matched" : "Too High";
  elements.minimumMatch.style.color = isMatch === null ? "#1B1B1B" : isMatch ? "#4CAF50" : "#FB8C00";
}

function validateForm() {
  clearErrors();
  const data = {
    productType: fieldRefs.productType.value.trim(),
    productName: fieldRefs.productName.value.trim(),
    quantity: Number(fieldRefs.quantity.value),
    quantityUnit: fieldRefs.quantityUnit.value.trim(),
    priceMin: Number(fieldRefs.priceMin.value),
    priceMax: Number(fieldRefs.priceMax.value),
    minSellAmount: Number(fieldRefs.minSellAmount.value),
    notes: fieldRefs.notes.value.trim(),
    imageDataUrl: selectedImageData,
  };

  let hasError = false;

  if (!data.imageDataUrl) {
    showFeedback("Please upload a product image before submitting.", "error");
    hasError = true;
  }

  if (!data.productType) {
    setError("productType", "Please select a product type.");
    hasError = true;
  }

  if (!data.productName || data.productName.length < 2) {
    setError("productName", "Product name must be at least 2 characters.");
    hasError = true;
  }

  if (!Number.isFinite(data.quantity) || data.quantity <= 0) {
    setError("quantity", "Enter a valid quantity greater than 0.");
    hasError = true;
  }

  if (!data.quantityUnit) {
    setError("quantityUnit", "Please select a quantity unit.");
    hasError = true;
  }

  if (!Number.isFinite(data.priceMin) || !Number.isFinite(data.priceMax)) {
    setError("priceRange", "Enter both minimum and maximum price.");
    hasError = true;
  } else if (data.priceMin <= 0 || data.priceMax <= 0) {
    setError("priceRange", "Price values must be greater than 0.");
    hasError = true;
  } else if (data.priceMin > data.priceMax) {
    setError("priceRange", "Minimum price cannot be greater than maximum price.");
    hasError = true;
  }

  if (!Number.isFinite(data.minSellAmount) || data.minSellAmount <= 0) {
    setError("minSellAmount", "Enter a valid minimum amount.");
    hasError = true;
  }

  return hasError ? null : data;
}

function resetImagePreview() {
  selectedImageData = null;
  elements.imageInput.value = "";
  elements.previewImage.style.display = "none";
  elements.previewImage.removeAttribute("src");
  elements.uploadPlaceholder.style.display = "block";
  elements.imageMeta.textContent = "No image selected yet.";
  elements.progressFill.style.width = "0%";
}

function resetForm(options = {}) {
  const { preserveFeedback = false } = options;
  elements.form.reset();
  clearErrors();
  if (!preserveFeedback) {
    hideFeedback();
  }
  resetImagePreview();
  updateSummary();
}

function renderRecords() {
  const items = getSavedItems();

  if (!items.length) {
    elements.recordsList.innerHTML = `
      <div class="empty-state">
        <h3>No items added yet</h3>
        <p>Your processed product entries will appear here after you submit the form.</p>
      </div>
    `;
    return;
  }

  elements.recordsList.innerHTML = items
    .map((item) => {
      const createdDate = new Date(item.createdAt).toLocaleString("en-IN", {
        dateStyle: "medium",
        timeStyle: "short",
      });

      return `
        <article class="record-card">
          <div class="record-top">
            <div>
              <h3>${escapeHtml(item.productName)}</h3>
              <p>${escapeHtml(item.notes || "No additional notes provided.")}</p>
            </div>
            <span class="record-type">${capitalize(item.productType)}</span>
          </div>
          <div class="record-meta">
            <span>${item.quantity} ${escapeHtml(item.quantityUnit)}</span>
            <span>${formatCurrency(item.priceMin)} - ${formatCurrency(item.priceMax)}</span>
            <span>Min sell ${formatCurrency(item.minSellAmount)}</span>
          </div>
          <div class="record-meta">
            <span>Average ${formatCurrency(item.analytics.averagePrice)}</span>
            <span>Projected ${formatCurrency(item.analytics.projectedValue)}</span>
            <span>${item.analytics.minimumMatch ? "Order matched" : "Review minimum"}</span>
          </div>
          <div class="record-meta">
            <span>${createdDate}</span>
          </div>
        </article>
      `;
    })
    .join("");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function capitalize(value) {
  if (!value) {
    return "";
  }

  return value.charAt(0).toUpperCase() + value.slice(1);
}

async function handleImageChange(event) {
  const [file] = event.target.files || [];
  hideFeedback();

  if (!file) {
    resetImagePreview();
    return;
  }

  const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (!allowedTypes.includes(file.type)) {
    resetImagePreview();
    showFeedback("Only JPEG and PNG images are allowed.", "error");
    return;
  }

  if (file.size > 4 * 1024 * 1024) {
    resetImagePreview();
    showFeedback("Please choose an image smaller than 4 MB.", "error");
    return;
  }

  elements.progressFill.style.width = "35%";

  const reader = new FileReader();
  reader.onload = async () => {
    selectedImageData = reader.result;
    elements.previewImage.src = selectedImageData;
    elements.previewImage.style.display = "block";
    elements.uploadPlaceholder.style.display = "none";
    elements.imageMeta.textContent = `${file.name} | ${(file.size / 1024).toFixed(0)} KB`;
    elements.progressFill.style.width = "80%";
    await simulateDelay(180);
    elements.progressFill.style.width = "100%";
    showFeedback("Image processed successfully and ready for submission.", "success");
  };
  reader.readAsDataURL(file);
}

async function handleSubmit(event) {
  event.preventDefault();
  hideFeedback();

  const payload = validateForm();
  if (!payload) {
    return;
  }

  elements.submitButton.disabled = true;
  elements.submitButton.textContent = "Processing...";

  try {
    const savedItem = await backendService.processItem(payload);
    showFeedback(
      `${savedItem.productName} was added successfully with projected value ${formatCurrency(savedItem.analytics.projectedValue)}.`,
      "success"
    );
    renderRecords();
    resetForm({ preserveFeedback: true });
  } catch (error) {
    showFeedback("Something went wrong while processing the item. Please try again.", "error");
  } finally {
    elements.submitButton.disabled = false;
    elements.submitButton.textContent = "Add Item";
  }
}

function bindEvents() {
  elements.imageInput.addEventListener("change", handleImageChange);
  elements.form.addEventListener("submit", handleSubmit);
  elements.resetButton.addEventListener("click", resetForm);
  elements.clearStorageButton.addEventListener("click", () => {
    localStorage.removeItem(storageKey);
    renderRecords();
    showFeedback("All locally processed records were cleared.", "success");
  });

  Object.values(fieldRefs).forEach((field) => {
    field.addEventListener("input", updateSummary);
    field.addEventListener("change", updateSummary);
  });
}

bindEvents();
updateSummary();
renderRecords();



const imageInput = document.getElementById("productImage");
const previewImage = document.getElementById("previewImage");
const uploadPlaceholder = document.getElementById("uploadPlaceholder");
const imageMeta = document.getElementById("imageMeta");
const progressFill = document.getElementById("progressFill");

let selectedImageData = null;

// 🔥 IMAGE UPLOAD FUNCTION
imageInput.addEventListener("change", function (event) {

  const file = event.target.files[0];

  if (!file) return;

  // ✅ File validation
  if (!file.type.startsWith("image/")) {
    alert("Only image allowed!");
    return;
  }

  if (file.size > 4 * 1024 * 1024) {
    alert("Max 4MB allowed");
    return;
  }

  // Progress start
  progressFill.style.width = "30%";

  const reader = new FileReader();

  reader.onload = function () {

    selectedImageData = reader.result;

    // ✅ Show image
    previewImage.src = selectedImageData;
    previewImage.style.display = "block";

    uploadPlaceholder.style.display = "none";

    imageMeta.textContent = file.name;

    progressFill.style.width = "100%";
  };

  reader.readAsDataURL(file);
});
