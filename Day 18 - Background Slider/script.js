const images = document.querySelectorAll(".slide");
const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");
let currentImage = 0;
document.body.style.backgroundImage =
    images[currentImage].style.backgroundImage;
rightArrow.addEventListener("click", () => {
  currentImage++;
  removeActive();

  // Moving to first slide if right button is clicked on last slide
  if (currentImage === images.length) {
    currentImage = 0;
  }

  images[currentImage].classList.add("active");
  // changing body backgroundImage 
  document.body.style.backgroundImage =
    images[currentImage].style.backgroundImage;
});
//Moving a slide left
leftArrow.addEventListener("click", () => {
  currentImage--;
  removeActive();
  // Moving to last slide if left button is clicked on first slide 
  if (currentImage === -1) {
    currentImage = images.length-1;
  }
  images[currentImage].classList.add("active");
  // changing body backgroundImage
  document.body.style.backgroundImage =
    images[currentImage].style.backgroundImage;
});
//Removing active on all slides before adding to the needed slide depending on the button click
function removeActive() {
  images.forEach((image) => {
    image.classList.remove("active");
  });
}
