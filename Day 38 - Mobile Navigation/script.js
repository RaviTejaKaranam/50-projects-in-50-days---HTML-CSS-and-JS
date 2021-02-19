const content = document.querySelectorAll(".content")
const nav = document.querySelectorAll("nav ul li")
console.log(content)
console.log(nav)

let idx = 0;

nav.forEach((link,idx)=>{
  link.addEventListener("click",()=>{
    removeActive()
    displayContent(idx)
    link.classList.add("active")
  })
})
function displayContent(idx){
  removeShow()
  content[idx].classList.add("show")
}
function removeShow(){
  content.forEach((content)=>{
    content.classList.remove("show")
  })
}
function removeActive(){
  nav.forEach((link)=>{
    link.classList.remove("active")
  })
}