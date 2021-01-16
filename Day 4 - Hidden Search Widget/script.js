const searchButton = document.querySelector(".btn");
const searchBox = document.querySelector(".input");
const search = document.querySelector(".search");

searchButton.addEventListener("click", () => {
  search.classList.toggle("active");
  searchBox.focus()
});
