const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUl = document.getElementById("todos");

const todos = JSON.parse(localStorage.getItem("todos"));
if(todos){
  todos.forEach((todo) => {
    addTodo(todo);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

function addTodo(todo) {
  const todoEl = document.createElement("li");
  todoEl.innerText = input.value;

  if (todo) {
    todoEl.innerHTML = todo.text;
  }

  todosUl.appendChild(todoEl);
  input.value = "";

  if (todo && todo.completed) {
    todoEl.classList.add("completed");
  }

  todoEl.addEventListener("click", () => {
    todoEl.classList.toggle("completed");
    updateLocalStorage()
  });

  todoEl.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    todoEl.remove();
    updateLocalStorage()
  });

  updateLocalStorage();
}

function updateLocalStorage() {
  const todosEl = document.querySelectorAll("li")
  const todos = [];
  todosEl.forEach((todoEl) => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains("completed"),
    });
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}
