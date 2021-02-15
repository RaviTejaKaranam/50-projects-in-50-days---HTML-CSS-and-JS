const nums = document.querySelectorAll(".nums span");
const counter = document.querySelector(".counter");
const finalMessage = document.querySelector(".final");
const replay = document.querySelector("#replay");

runAnimation();
function resetDOM() {
  counter.classList.remove("hide");
  finalMessage.classList.remove("show");
  nums.forEach((num) => {
    num.className = "";
  });
  nums[0].classList.add("in");
}
function runAnimation() {
  nums.forEach((num, idx) => {
    num.addEventListener("animationend", (e) => {
      const lastElement = nums.length - 1;
      if (e.animationName === "goIn" && idx !== lastElement) {
        num.classList.remove("in");
        num.classList.add("out");
      } else if (e.animationName === "goOut" && num.nextElementSibling) {
        num.nextElementSibling.classList.add("in");
      } else {
        counter.classList.add("hide");
        finalMessage.classList.add("show");
      }
    });
  });
}
replay.addEventListener("click", () => {
  resetDOM();
  runAnimation();
});
