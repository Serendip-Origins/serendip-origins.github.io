// Dynamic Interactions (js/script.js)
document.addEventListener("DOMContentLoaded", () => {
  // Example: Toggle mobile menu
  const nav = document.querySelector("header nav ul");
  const toggleButton = document.createElement("button");
  toggleButton.textContent = "☰";
  toggleButton.classList.add("menu-toggle");

  toggleButton.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  document.querySelector("header").appendChild(toggleButton);
});
