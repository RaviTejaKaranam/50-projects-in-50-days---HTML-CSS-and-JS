const sliderContainer = document.querySelector(".slider-container");
const leftSlide = document.querySelector(".left-slide");
const rightSlide = document.querySelector(".right-slide");
const downButton = document.querySelector(".down-button");
const upButton = document.querySelector(".up-button");
const slidesLength = rightSlide.querySelectorAll("div").length;

let activeSlideIndex = 0;
// setting intial left slide height 
leftSlide.style.top = `-${(slidesLength - 1) * 100}vh`;

downButton.addEventListener("click", () => {
  changeSlide("down");
});
upButton.addEventListener("click", () => {
  changeSlide("up");
});
//Adjusting left slide and right slide height according to button click
const changeSlide = (direction) => {
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }
  rightSlide.style.top = `-${activeSlideIndex * 100}vh`;
  leftSlide.style.top = `-${(slidesLength - 1 - activeSlideIndex) * 100}vh`;
  console.log(leftSlide.style.top);
};
