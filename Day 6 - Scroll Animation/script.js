const boxes = document.querySelectorAll(".box")

window.addEventListener("scroll",checkBoxes)

let triggerPoint = window.innerHeight

checkBoxes()

function checkBoxes() {
  /*We want the boxes to be visible on the screen when the top of the box
  is less than the window innerHeight but also we want the box to slide into
  the screen at a height at which the user can see not just as when the box top
  is less than innerHeight because this would make most of the animation happen
  under the user's view hence we need to set a trigger point a few pixels above 
  on the screen as we scroll */

  triggerPoint = (window.innerHeight / 5) * 4
  boxes.forEach((box) => {
    let boxTop = box.getBoundingClientRect().top
    if(boxTop < triggerPoint){
      box.classList.add("show")
    }
    else{
      box.classList.remove("show")
    }
  })
}