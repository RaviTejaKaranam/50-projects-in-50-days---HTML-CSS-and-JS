const chevronDown = document.querySelectorAll(".FAQ i");
const FAQ = document.querySelectorAll(".FAQ");
chevronDown.forEach((icon, index) => {
  icon.addEventListener("click", () => {
    FAQ[index].classList.toggle("active");
    icon.classList.toggle("fa-chevron-up");
  });
});
