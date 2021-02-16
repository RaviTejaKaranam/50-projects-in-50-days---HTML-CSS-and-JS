const imageContainer = document.querySelector(".image-container");
const leftBtn = document.getElementById("left")
const rightBtn = document.getElementById("right")

const images = document.querySelectorAll(".image-container img")
const NumberOfImages = images.length
let translate = 0

rightBtn.addEventListener("click",()=>{
  
  if(translate === (-(NumberOfImages-1)*500)){
    translate = 0
    imageContainer.style.transform = `translateX(${translate}px)`

  }
  else{
    imageContainer.style.transform = `translateX(${translate - 500}px)`
    translate = translate - 500
  }
})

leftBtn.addEventListener("click",()=>{

  if(translate === 0){
    translate = (-(NumberOfImages - 1) * 500)
    imageContainer.style.transform = `translateX(${translate}px)`
  }
  else{
    imageContainer.style.transform = `translateX(${translate + 500}px)`
    translate = translate + 500
  }
})

