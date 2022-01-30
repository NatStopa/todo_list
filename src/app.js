const addIcon = document.querySelector(".plus-button");
const doneIcon = document.getElementsByClassName("done-icon");

addIcon.addEventListener("click", addTask);

function addTask(e) {
  e.preventDefault();
  const taskInput = document.querySelector(".task-input");
  const userTask = taskInput.value;
  if (userTask.length >= 2) {
    const taskList = document.querySelector(".task-section");
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
