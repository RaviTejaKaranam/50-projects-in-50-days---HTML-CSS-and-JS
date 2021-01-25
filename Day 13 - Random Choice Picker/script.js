const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");
textarea.focus();
textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);
  if (e.code === "Enter") {
    e.target.value = "";
    pickRandom();
  }
});

function createTags(input) {
  const tags = input
    .split(",")
    .map((tag) => tag.trim())
    .filter((tag) => tag.length !== 0);

  tagsEl.innerHTML = "";
  tags.forEach((tag) => {
    let tagEl = document.createElement("span");
    tagEl.innerHTML = tag;
    tagEl.classList.add("tag");
    tagsEl.appendChild(tagEl);
  });
}

function pickRandom() {
  const times = 30;

  let interval = setInterval(() => {
    let randomTag = selectRandomTag();
    highlight(randomTag);
    setTimeout(() => {
      unHighlight(randomTag);
    }, 100);
  }, 100);

  setTimeout(()=>{
    clearInterval(interval)
    let selectedTag = selectRandomTag()
    highlight(selectedTag)
  },times*100)
}
function selectRandomTag() {
  const tags = document.querySelectorAll(".tag");
  let index = Math.floor(Math.random() * tags.length);
  return tags[index];
}
function highlight(tag) {
  tag.classList.add("highlight");
}
function unHighlight(tag) {
  tag.classList.remove("highlight");
}
