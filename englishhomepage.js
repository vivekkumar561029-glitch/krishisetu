// ===== SIDEBAR =====
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const main = document.getElementById("main");

  sidebar.classList.toggle("active");
  main.classList.toggle("shift");
}

// Close sidebar when clicking outside
document.addEventListener("click", function (e) {
  const sidebar = document.getElementById("sidebar");

  if (!sidebar.contains(e.target) && !e.target.classList.contains("menu-btn")) {
    sidebar.classList.remove("active");
    document.getElementById("main").classList.remove("shift");
  }
});


// ===== THEME TOGGLE (WITH SAVE) =====
function toggleTheme() {
  const body = document.body;
  const btn = document.getElementById("themeBtn");

  body.classList.toggle("dark");
  body.classList.toggle("light");

  if (body.classList.contains("dark")) {
    btn.innerText = "Light";
    localStorage.setItem("theme", "dark");
  } else {
    btn.innerText = "Dark";
    localStorage.setItem("theme", "light");
  }
}

// Load saved theme
function loadTheme() {
  const savedTheme = localStorage.getItem("theme");
  const btn = document.getElementById("themeBtn");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    btn.innerText = "Light";
  }
}


// ===== SMOOTH SCROLL =====
function scrollToSection(id) {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: "smooth" });
}


// ===== SCROLL REVEAL (OPTIMIZED) =====
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


// ===== ACTIVE MENU HIGHLIGHT (BONUS UX) =====
const sections = document.querySelectorAll("section");
const menuItems = document.querySelectorAll(".menu-item");

function highlightMenu() {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  menuItems.forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("onclick")?.includes(current)) {
      item.classList.add("active");
    }
  });
}

window.addEventListener("scroll", highlightMenu);


// ===== INIT =====
window.addEventListener("DOMContentLoaded", () => {
  loadTheme();
  revealOnScroll();
  lucide.createIcons();
});