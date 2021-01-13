const panels = document.querySelectorAll('.panel')

panels.forEach((panel)=>{
  panel.addEventListener("click",()=>{
    removeActiveClass()
    //Adding class active to the clicked image
    panel.classList.add('active')
  })
})
// Removing class active on already existing image
const removeActiveClass = () =>{
  panels.forEach((panel) =>{
    panel.classList.remove('active')
  })
}