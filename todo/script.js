let tasks = [];
const form = document.getElementById("task-form");
const taskList = document.getElementById("task-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const taskInput = document.getElementById("task-input");
  const taskTrim = taskInput.value.trim();
  const isDone = false;
  const task = {
    task: taskTrim,
    isDone: isDone,
  };
  if (task) {
    tasks.push(task);
    taskInput.value = "";
    renderTasks();
  }
});

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-center";

    const p = document.createElement("p");
    p.textContent = task.task;

    if (task.isDone) {
      p.classList.toggle("text-decoration-line-through");
      p.classList.toggle("text-muted");
    }
    li.appendChild(p);
    li.addEventListener("click", function () {
      p.classList.toggle("text-decoration-line-through");
      p.classList.toggle("text-muted");
      task.isDone = !task.isDone;
    });

    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger btn-sm float-right";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      tasks.splice(index, 1);
      renderTasks();
    });

    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
  if (tasks.length === 0) {
    const li = document.createElement("li");
    li.className = "list-group-item text-center";
    li.textContent = "You have no tasks.";
    taskList.appendChild(li);
  }
}
