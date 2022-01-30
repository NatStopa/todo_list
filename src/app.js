const addIcon = document.querySelector(".plus-button");
const taskList = document.querySelector(".task-section");

addIcon.addEventListener("click", addTask);

function addTask(e) {
  e.preventDefault();
  const taskInput = document.querySelector(".task-input");
  const userTask = taskInput.value;
  if (userTask.length >= 2) {
    const task = document.createElement("div");
    task.classList.add("task");
    taskList.appendChild(task);
    const taskText = document.createElement("p");
    taskText.classList.add("task-text");
    task.appendChild(taskText);
    taskText.innerText = userTask;
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

taskList.addEventListener("click", completeTask);

function completeTask(e) {
  if (e.target.classList[0] === "done-icon") {
    const todoButton = e.target.parentElement;
    const todoTask = todoButton.parentElement;
    const todoText = todoTask.childNodes[0];
    todoText.classList.toggle("completed");
  }
}
