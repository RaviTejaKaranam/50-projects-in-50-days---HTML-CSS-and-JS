const toggle = document.getElementById("toggle");
const navBar = document.getElementById("nav");

toggle.addEventListener("click", () => {
  navBar.classList.toggle("active");
});
