const sounds = ["applause", "countdown", "laugh", "gasp", "chirp"];

sounds.forEach((sound) => {
  // generating a button for each audio 
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound.toUpperCase();
  btn.addEventListener("click", () => {
    stopSongs();
    document.getElementById(sound).play();
  });
  document.querySelector(".buttons").appendChild(btn);
});

function stopSongs() {
  sounds.forEach((sound) => {
    document.getElementById(sound).pause();
    document.getElementById(sound).currentTime = 0;
  });
}
