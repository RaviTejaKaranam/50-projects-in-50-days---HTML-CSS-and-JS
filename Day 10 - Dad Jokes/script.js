const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("joke-btn");

jokeBtn.addEventListener("click", generateJoke);
generateJoke();

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  //Returns a response object
  const res = await fetch("https://icanhazdadjoke.com", config);
  // res.json() returns a promise 
  //await resolves the returned promise and gets the json data
  const jsonResponse = await res.json();
  jokeEl.innerHTML = jsonResponse.joke;
}
