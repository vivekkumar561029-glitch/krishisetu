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

  languageButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.language === language);
  });
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentLanguage = button.dataset.language;
    localStorage.setItem("language", currentLanguage);
    renderLanguage(currentLanguage);
  });
});

startButton.addEventListener("click", () => {
  window.location.href = "login.html";
});

localStorage.setItem("language", currentLanguage);
renderLanguage(currentLanguage);
