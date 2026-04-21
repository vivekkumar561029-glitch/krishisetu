const productData = {
  फल: {
    products: [
      "आम", "केला", "सेब", "संतरा", "अंगूर", "अनानास", "पपीता", "अमरूद", "अनार", "तरबूज",
      "खरबूजा", "लीची", "स्ट्रॉबेरी", "नाशपाती", "आड़ू", "आलूबुखारा", "चेरी", "अंजीर", "सीताफल", "ड्रैगन फ्रूट"
    ],
    varieties: {
      "आम": ["अल्फांसो", "केसर", "दशहरी", "लंगड़ा", "बंगनपल्ली", "हिमसागर", "तोतापुरी", "नीलम", "चौसा", "बादामी"]
    }
  },
  सब्जियाँ: {
    products: [
      "आलू", "टमाटर", "प्याज", "बैंगन", "भिंडी", "गोभी", "फूलगोभी", "गाजर", "मूली", "मटर",
      "शिमला मिर्च", "कद्दू", "करेला", "लौकी", "तोरई", "पालक", "मेथी", "धनिया", "बीन्स", "मक्का"
    ]
  },
  अनाज: {
    products: [
      "गेहूं", "चावल", "जौ", "बाजरा", "मक्का", "ज्वार", "रागी", "ओट्स", "क्विनोआ", "कुट्टू",
      "साबूदाना", "ब्राउन राइस", "टूटे चावल", "लाल चावल", "काला चावल", "दलिया", "सूजी", "कॉर्न ग्रिट्स", "चना दलिया", "कंगनी"
    ]
  },
  दालें: {
    products: [
      "चना", "अरहर", "मसूर", "मूंग", "उड़द", "राजमा", "लोबिया", "काला चना", "सफेद चना", "सोयाबीन",
      "कुल्थी", "मटर दाल", "तूर दाल", "हरी मूंग", "पीली मूंग", "उड़द धुली", "उड़द साबुत", "मसूर धुली", "मसूर साबुत", "चना दाल"
    ]
  }
};

const genericVarieties = [
  "प्रीमियम", "ग्रेड A", "ग्रेड B", "लोकल", "हाइब्रिड", "जैविक", "देशी", "उन्नत", "प्रसंस्कृत", "थोक"
];

const themeToggle = document.getElementById("themeToggle");
const languagePage = document.getElementById("languagePage");
const searchPage = document.getElementById("searchPage");
const selectedLanguageBadge = document.getElementById("selectedLanguageBadge");
const formMessage = document.getElementById("formMessage");

const categorySelect = document.getElementById("category");
const productSelect = document.getElementById("product");
const varietySelect = document.getElementById("variety");
const minQtyInput = document.getElementById("minQty");
const maxQtyInput = document.getElementById("maxQty");
const productForm = document.getElementById("productForm");

function applySavedTheme() {
  const savedTheme = localStorage.getItem("krishi-theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
  updateThemeButton();
}

function updateThemeButton() {
  const isDark = document.body.classList.contains("dark-mode");
  themeToggle.textContent = isDark ? "लाइट मोड" : "डार्क मोड";
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("krishi-theme", isDark ? "dark" : "light");
  updateThemeButton();
}

function createOption(value, placeholder = false) {
  const option = document.createElement("option");
  option.value = placeholder ? "" : value;
  option.textContent = value;
  return option;
}

function populateCategories() {
  Object.keys(productData).forEach((category) => {
    categorySelect.appendChild(createOption(category));
  });
}

function resetSelect(selectElement, placeholderText) {
  selectElement.innerHTML = "";
  selectElement.appendChild(createOption(placeholderText, true));
}

function getVarieties(category, product) {
  const customVarieties = productData[category]?.varieties?.[product];
  if (customVarieties) {
    return customVarieties;
  }
  return genericVarieties.map((item) => `${product} ${item}`);
}

function handleCategoryChange() {
  const category = categorySelect.value;
  resetSelect(productSelect, category ? "उत्पाद नाम चुनें" : "पहले उत्पाद प्रकार चुनें");
  resetSelect(varietySelect, "पहले उत्पाद नाम चुनें");
  productSelect.disabled = true;
  varietySelect.disabled = true;

  if (!category) {
    return;
  }

  productData[category].products.forEach((product) => {
    productSelect.appendChild(createOption(product));
  });
  productSelect.disabled = false;
}

function handleProductChange() {
  const category = categorySelect.value;
  const product = productSelect.value;
  resetSelect(varietySelect, product ? "उप-समूह / किस्म चुनें" : "पहले उत्पाद नाम चुनें");
  varietySelect.disabled = true;

  if (!category || !product) {
    return;
  }

  getVarieties(category, product).forEach((variety) => {
    varietySelect.appendChild(createOption(variety));
  });
  varietySelect.disabled = false;
}

function setMessage(message, type) {
  formMessage.textContent = message;
  formMessage.className = `form-message ${type}`;
}

function validateForm() {
  const fields = [
    categorySelect.value,
    productSelect.value,
    varietySelect.value,
    minQtyInput.value,
    maxQtyInput.value
  ];

  if (fields.some((value) => !value.trim())) {
    setMessage("कृपया सभी फ़ील्ड भरें", "error");
    return false;
  }

  const minQty = Number(minQtyInput.value);
  const maxQty = Number(maxQtyInput.value);

  if (Number.isNaN(minQty) || Number.isNaN(maxQty)) {
    setMessage("मात्रा केवल संख्यात्मक होनी चाहिए", "error");
    return false;
  }

  if (minQty > maxQty) {
    setMessage("न्यूनतम मात्रा अधिकतम से बड़ी नहीं हो सकती", "error");
    return false;
  }

  setMessage(`"${productSelect.value}" के लिए उपयुक्त ऑर्डर खोजे जा रहे हैं`, "success");
  return true;
}

document.querySelectorAll(".language-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const selectedLanguage = button.dataset.language || "हिंदी";
    selectedLanguageBadge.textContent = `भाषा: ${selectedLanguage}`;
    languagePage.classList.remove("active");
    searchPage.classList.add("active");
  });
});

themeToggle.addEventListener("click", toggleTheme);
categorySelect.addEventListener("change", handleCategoryChange);
productSelect.addEventListener("change", handleProductChange);

productForm.addEventListener("submit", (event) => {
  event.preventDefault();
  validateForm();
});

applySavedTheme();
populateCategories();
