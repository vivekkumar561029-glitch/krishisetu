function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const main = document.getElementById("main");

  sidebar.classList.toggle("active");
  main.classList.toggle("shift");
}

document.addEventListener("click", function (e) {
  const sidebar = document.getElementById("sidebar");

  if (!sidebar.contains(e.target) && !e.target.classList.contains("menu-btn")) {
    sidebar.classList.remove("active");
    document.getElementById("main").classList.remove("shift");
  }
});

function toggleTheme() {
  const body = document.body;
  const btn = document.getElementById("themeBtn");

  body.classList.toggle("dark");
  body.classList.toggle("light");

  if (body.classList.contains("dark")) {
    btn.innerText = "लाइट";
    localStorage.setItem("theme", "dark");
  } else {
    btn.innerText = "डार्क";
    localStorage.setItem("theme", "light");
  }
}

function loadTheme() {
  const savedTheme = localStorage.getItem("theme");
  const btn = document.getElementById("themeBtn");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    btn.innerText = "लाइट";
  }
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("DOMContentLoaded", () => {
  loadTheme();
  revealOnScroll();
  lucide.createIcons();
});