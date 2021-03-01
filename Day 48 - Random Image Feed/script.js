const container = document.querySelector(".container")
const API_URL = "https://source.unsplash.com/random/"
const rows = 10

for(let i = 0;i < rows*3; i++){
  const image = document.createElement("img")
  image.src = `${API_URL}${getRandomSize()}`
  container.appendChild(image)
}

function getRandomSize(){
  return `${randomNumber()}x${randomNumber()}`
}

function randomNumber(){
  const number = Math.floor((Math.random() * 10)) + 300
  return number
}