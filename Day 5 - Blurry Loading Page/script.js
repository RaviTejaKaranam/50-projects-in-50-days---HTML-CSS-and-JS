const loadingText = document.querySelector(".loading-text");
const background = document.querySelector(".background");

let load = 0;
let interval = setInterval(blurring, 30); // call blurring after 3 milli seconds interval

function blurring() {
  load++;

  if (load === 100) {
    clearInterval(interval);
  }
  loadingText.innerHTML = `${load}%`;
  loadingText.style.opacity = (100 - load) / 100;
  background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}
//Function to map numbers from one range (100 to 0 -> load) to (30 to 0 -> pixel range)
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
