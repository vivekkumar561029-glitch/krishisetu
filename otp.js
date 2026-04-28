const translations = {
  en: {
    title: "Enter OTP",
    otpLabel: "OTP",
    otpPlaceholder: "Enter OTP",
    resendText: "Resend OTP in {seconds}s",
    resendButton: "Resend OTP",
    verifyButton: "Verify",
    verifiedMessage: "OTP Verified",
    invalidMessage: "Invalid OTP",
  },
  hi: {
    title: "ओटीपी दर्ज करें",
    otpLabel: "ओटीपी",
    otpPlaceholder: "ओटीपी दर्ज करें",
    resendText: "{seconds} सेकंड में ओटीपी पुनः भेजें",
    resendButton: "ओटीपी फिर से भेजें",
    verifyButton: "सत्यापित करें",
    verifiedMessage: "ओटीपी सत्यापित हुआ",
    invalidMessage: "अमान्य ओटीपी",
  },
};

const validOtps = ["123456", "111111", "000000"];
const storedLanguage = localStorage.getItem("language");
const currentLanguage = storedLanguage && translations[storedLanguage] ? storedLanguage : "en";
const countdownDuration = 30;
let countdownValue = countdownDuration;
let countdownTimerId = null;
let modalHideTimerId = null;
let redirectTimerId = null;

const titleElement = document.getElementById("otp-title");
const otpLabelElement = document.getElementById("otp-label");
const otpInput = document.getElementById("otp-input");
const otpErrorElement = document.getElementById("otp-error");
const resendTextElement = document.getElementById("resend-text");
const resendButton = document.getElementById("resend-button");
const verifyButton = document.getElementById("verify-button");
const successModal = document.getElementById("success-modal");
const modalMessage = document.getElementById("modal-message");

function formatResendText(language, seconds) {
  return translations[language].resendText.replace("{seconds}", seconds);
}

function isValidOtpFormat(value) {
  return /^\d{6}$/.test(value);
}

function setErrorState(message) {
  otpInput.classList.add("invalid");
  otpErrorElement.textContent = message;
}

function clearErrorState() {
  otpInput.classList.remove("invalid");
  otpErrorElement.textContent = "";
}

function updateCountdownView() {
  resendTextElement.textContent = formatResendText(currentLanguage, countdownValue);
  if (countdownValue > 0) {
    resendTextElement.classList.remove("hidden");
    resendButton.classList.add("hidden");
    return;
  }
  resendTextElement.classList.add("hidden");
  resendButton.classList.remove("hidden");
}

function startCountdown() {
  if (countdownTimerId) window.clearInterval(countdownTimerId);
  countdownValue = countdownDuration;
  updateCountdownView();
  countdownTimerId = window.setInterval(() => {
    countdownValue -= 1;
    updateCountdownView();
    if (countdownValue <= 0) {
      window.clearInterval(countdownTimerId);
      countdownTimerId = null;
    }
  }, 1000);
}

function showSuccessModal() {
  successModal.classList.add("show");
  successModal.setAttribute("aria-hidden", "false");
}

function hideSuccessModal() {
  successModal.classList.remove("show");
  successModal.setAttribute("aria-hidden", "true");
}

function renderLanguage(language) {
  const copy = translations[language];
  titleElement.textContent = copy.title;
  otpLabelElement.textContent = copy.otpLabel;
  otpInput.placeholder = copy.otpPlaceholder;
  otpInput.setAttribute("aria-label", copy.otpLabel);
  resendButton.textContent = copy.resendButton;
  verifyButton.textContent = copy.verifyButton;
  modalMessage.textContent = copy.verifiedMessage;
  document.documentElement.lang = language === "hi" ? "hi" : "en";
  updateCountdownView();
  if (otpErrorElement.textContent) {
    otpErrorElement.textContent = copy.invalidMessage;
  }
}

otpInput.addEventListener("input", (event) => {
  event.target.value = event.target.value.replace(/\D/g, "").slice(0, 6);
  if (otpErrorElement.textContent) clearErrorState();
});

verifyButton.addEventListener("click", () => {
  const otpValue = otpInput.value.trim();
  const copy = translations[currentLanguage];

  if (!isValidOtpFormat(otpValue)) {
    setErrorState(copy.invalidMessage);
    return;
  }

  if (validOtps.includes(otpValue)) {
    clearErrorState();
    showSuccessModal();
    if (modalHideTimerId) window.clearTimeout(modalHideTimerId);
    if (redirectTimerId) window.clearTimeout(redirectTimerId);
    modalHideTimerId = window.setTimeout(() => { hideSuccessModal(); }, 280);
    const dashboard =
      localStorage.getItem("language") === "hi" ? "hindihomepage.html" : "englishhomepage.html";
    redirectTimerId = window.setTimeout(() => { window.location.href = dashboard; }, 400);
    return;
  }

  setErrorState(copy.invalidMessage);
});

resendButton.addEventListener("click", () => {
  startCountdown();
});

renderLanguage(currentLanguage);
startCountdown();
