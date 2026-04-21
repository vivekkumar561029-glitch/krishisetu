const translations = {
  en: {
    title: "Welcome to Krishi Setu",
    selectLanguage: "Select Language",
    getStarted: "Get Started",
  },
  hi: {
    title: "कृषि सेतु में आपका स्वागत है",
    selectLanguage: "भाषा चुनें",
    getStarted: "शुरू करें",
  },
};

const storedLanguage = localStorage.getItem("language");
let currentLanguage = storedLanguage && translations[storedLanguage] ? storedLanguage : "en";

const titleElement = document.getElementById("welcome-title");
const labelElement = document.getElementById("language-label");
const startButton = document.getElementById("start-button");
const languageButtons = document.querySelectorAll(".language-button");

function renderLanguage(language) {
  const copy = translations[language];
  titleElement.textContent = copy.title;
  labelElement.textContent = copy.selectLanguage;
  startButton.textContent = copy.getStarted;
  document.documentElement.lang = language === "hi" ? "hi" : "en";
  languageButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.language === language);
  });
}

languageButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentLanguage = btn.dataset.language;
    localStorage.setItem("language", currentLanguage);
    renderLanguage(currentLanguage);
  });
});

startButton.addEventListener("click", () => {
  window.location.href = "login.html";
});

localStorage.setItem("language", currentLanguage);
renderLanguage(currentLanguage);

// ── Theme Toggle ──
// Button label logic (matches your screenshots):
//   • In DARK mode  → button says "Light Mode"  (click to switch to light)
//   • In LIGHT mode → button says "Dark Mode"   (click to switch to dark)
const themeToggle = document.getElementById("theme-toggle");

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  // Show the opposite action label — just like your screenshots
  themeToggle.textContent = theme === "dark" ? "Light Mode" : "Dark Mode";
  localStorage.setItem("theme", theme);
}

// Apply stored or default theme on load
const savedTheme = localStorage.getItem("theme") || "light";
applyTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  applyTheme(current === "dark" ? "light" : "dark");
});
