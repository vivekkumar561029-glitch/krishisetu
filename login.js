const translations = {
  en: {
    title: "Login",
    subtitle: "Enter your mobile number to continue",
    mobileLabel: "Mobile Number",
    mobilePlaceholder: "Enter mobile number",
    otpButton: "Generate OTP",
    otpSent: "OTP sent successfully",
    invalidMobile: "Invalid mobile number",
  },
  hi: {
    title: "लॉगिन",
    subtitle: "जारी रखने के लिए अपना मोबाइल नंबर दर्ज करें",
    mobileLabel: "मोबाइल नंबर",
    mobilePlaceholder: "मोबाइल नंबर दर्ज करें",
    otpButton: "ओटीपी भेजें",
    otpSent: "ओटीपी सफलतापूर्वक भेजा गया",
    invalidMobile: "अमान्य मोबाइल नंबर",
  },
};

const storedLanguage = localStorage.getItem("language");
const currentLanguage = storedLanguage && translations[storedLanguage] ? storedLanguage : "en";
let redirectTimerId = null;
let modalHideTimerId = null;

const titleElement = document.getElementById("login-title");
const subtitleElement = document.getElementById("login-subtitle");
const mobileLabelElement = document.getElementById("mobile-label");
const mobileField = document.getElementById("mobile-field");
const mobileInput = document.getElementById("mobile-number");
const mobileError = document.getElementById("mobile-error");
const otpButton = document.getElementById("otp-button");
const successModal = document.getElementById("success-modal");
const modalMessage = document.getElementById("modal-message");

function isValidMobileNumber(value) {
  return /^[6-9]\d{9}$/.test(value);
}

function setErrorState(message) {
  mobileField.classList.add("invalid");
  mobileError.textContent = message;
}

function clearErrorState() {
  mobileField.classList.remove("invalid");
  mobileError.textContent = "";
}

function updateButtonState() {
  otpButton.disabled = !isValidMobileNumber(mobileInput.value);
}

function showSuccessModal() {
  successModal.classList.add("show");
  successModal.setAttribute("aria-hidden", "false");
}

function hideSuccessModal() {
  successModal.classList.remove("show");
  successModal.setAttribute("aria-hidden", "true");
}

function syncValidationMessage(value) {
  if (!value) { clearErrorState(); return; }
  if (isValidMobileNumber(value)) { clearErrorState(); return; }
  setErrorState(translations[currentLanguage].invalidMobile);
}

function renderLanguage(language) {
  const copy = translations[language];
  titleElement.textContent = copy.title;
  subtitleElement.textContent = copy.subtitle;
  mobileLabelElement.textContent = copy.mobileLabel;
  mobileInput.placeholder = copy.mobilePlaceholder;
  mobileInput.setAttribute("aria-label", copy.mobileLabel);
  otpButton.textContent = copy.otpButton;
  modalMessage.textContent = copy.otpSent;
  document.documentElement.lang = language === "hi" ? "hi" : "en";
  syncValidationMessage(mobileInput.value);
}

mobileInput.addEventListener("input", (event) => {
  const numericValue = event.target.value.replace(/\D/g, "").slice(0, 10);
  event.target.value = numericValue;
  syncValidationMessage(numericValue);
  updateButtonState();
});

mobileInput.addEventListener("blur", () => {
  syncValidationMessage(mobileInput.value.trim());
});

otpButton.addEventListener("click", () => {
  const mobileValue = mobileInput.value.trim();
  if (!isValidMobileNumber(mobileValue)) {
    setErrorState(translations[currentLanguage].invalidMobile);
    updateButtonState();
    return;
  }
  clearErrorState();
  showSuccessModal();
  if (redirectTimerId) window.clearTimeout(redirectTimerId);
  if (modalHideTimerId) window.clearTimeout(modalHideTimerId);
  modalHideTimerId = window.setTimeout(() => { hideSuccessModal(); }, 280);
  redirectTimerId = window.setTimeout(() => { window.location.href = "otp.html"; }, 400);
});

renderLanguage(currentLanguage);
updateButtonState();
