const button = document.getElementById("button")
const toasts = document.getElementById("toasts")

const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four"
]

const colors = ["red","blue","green","orange"]

button.addEventListener("click",()=>{
  showNotification()
})

function showNotification(){
  let randomNumber = Math.random() * messages.length
  randomNumber = Math.floor(randomNumber)
  let randomColor = Math.random() * colors.length
  randomColor = Math.floor(randomColor)
  const toast = document.createElement("div")
  toast.classList.add("toast")
  toast.classList.add(colors[randomColor])
  toast.innerHTML = messages[randomNumber]
  toasts.appendChild(toast)
  removeToast()
}

function removeToast(){
  setTimeout(()=>{
    toasts.firstElementChild.remove()
  },3000)
}