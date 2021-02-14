const addButton = document.getElementById("add");
const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
  notes.forEach((note) => {
    addNote(note);
  });
}

addButton.addEventListener("click", () => addNote(""));
function addNote(text = "") {
  const note = document.createElement("div");
  note.classList.add("note");

  note.innerHTML = `
  <div class="tools">
        <button class="edit">
          <i class="fas fa-edit"></i>
        </button>
        <button class="delete">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
      <div class="main ${text ? "" : "hidden"}"></div>
      <textarea class = "${text ? "hidden" : ""}"></textarea>
  `;

  const editBtn = note.querySelector(".edit");
  const deleteBtn = note.querySelector(".delete");
  const main = note.querySelector(".main");
  const textArea = note.querySelector("textarea");

  textArea.value = text;
  main.innerHTML = marked(textArea.value);
  editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  deleteBtn.addEventListener("click", () => {
    note.remove();
    updateLocalStotage();
  });

  textArea.addEventListener("input", (e) => {
    main.innerHTML = marked(e.target.value);
    updateLocalStotage();
  });
  document.body.appendChild(note);
}

const updateLocalStotage = () => {
  const notes = document.querySelectorAll("textarea");
  let notesArray = [];
  notes.forEach((note) => {
    notesArray.push(note.value);
  });

  localStorage.setItem("notes", JSON.stringify(notesArray));
};
