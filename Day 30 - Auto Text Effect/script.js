const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
let index = 1;
const text = "I love football";

let speed = 300 / speedEl.value;

function writeText() {
  textEl.innerHTML = text.slice(0, index);
  index++;
  if (index > text.length) {
    index = 1;
  }
  setTimeout(writeText, speed);
}
writeText();

speedEl.addEventListener("input", (e) => {
  speed = 300 / e.target.value;
});
