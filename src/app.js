const addIcon = document.querySelector(".plus-button");
const taskList = document.querySelector(".task-section");

document.addEventListener("DOMContentLoaded", getTodos);
addIcon.addEventListener("click", addTask);
taskList.addEventListener("click", completeTask);

function addTask(e) {
  e.preventDefault();
  let taskInput = document.querySelector(".task-input");
  const userTask = taskInput.value;
  if (userTask.length >= 2) {
    saveTodos(userTask);
    const task = document.createElement("div");
    task.classList.add("task");
    taskList.appendChild(task);
    const taskText = document.createElement("p");
    taskText.classList.add("task-text");
    task.appendChild(taskText);
    taskText.innerText = userTask;
    taskInput.value = "";
    const doneButton = document.createElement("div");
    doneButton.classList.add("done-button");
    task.appendChild(doneButton);
    doneButton.innerHTML = ` <i
    class="done-icon material-icons"
    style="
    font-size: 35px;
    color: #09151a;
    "
    >done</i
    >`;
  }
}

function completeTask(e) {
  if (e.target.classList[0] === "done-icon") {
    const todoButton = e.target.parentElement;
    const todoTask = todoButton.parentElement;
    const todoText = todoTask.childNodes[0];
    todoText.classList.toggle("completed");
    removeTodos(todoTask);
  }
}

function saveTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function removeTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function (todo) {
    let taskInput = document.querySelector(".task-input");
    const userTask = taskInput.value;
    const task = document.createElement("div");
    task.classList.add("task");
    taskList.appendChild(task);
    const taskText = document.createElement("p");
    taskText.classList.add("task-text");
    task.appendChild(taskText);
    taskText.innerText = todo;
    taskInput.value = "";
    const doneButton = document.createElement("div");
    doneButton.classList.add("done-button");
    task.appendChild(doneButton);
    doneButton.innerHTML = ` <i
    class="done-icon material-icons"
    style="
    font-size: 35px;
    color: #09151a;
    "
    >done</i
    >`;
  });
}
