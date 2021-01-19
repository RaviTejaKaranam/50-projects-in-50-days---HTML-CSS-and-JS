const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

//On hover - left
left.addEventListener("mouseenter",() =>{
  container.classList.add("left-hover")
})
//On mouseleave - right
left.addEventListener("mouseleave",()=>{
  container.classList.remove("left-hover")
})
//On hover - right
right.addEventListener("mouseenter",() =>{
  container.classList.add("right-hover")
})
//On mouseleave - right
right.addEventListener("mouseleave",()=>{
  container.classList.remove("right-hover")
})