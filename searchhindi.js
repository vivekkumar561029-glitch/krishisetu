const toggleBtn = document.getElementById("toggleMode");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");

  toggleBtn.textContent = body.classList.contains("dark")
    ? "लाइट मोड"
    : "डार्क मोड";
});