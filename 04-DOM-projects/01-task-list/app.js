// Define Ui Variables
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Add and Load all event listeners
loadEventListners();

function loadEventListners() {
  // add task event
  form.addEventListener("submit", addTask);
  // add listener for remove task item
  taskList.addEventListener("click", removeTask);
  // add listemer for clear all tasks
  clearBtn.addEventListener("click", clearTasks);
  // filter tasks event
  filter.addEventListener("keyup", filterTasks);

  function addTask(e) {
    if (taskInput.value === "") {
      alert("Add a task");
    }

    // create li element
    const li = document.createElement("li");
    // add class
    li.className = "collection-item";
    // create next node and append to the li
    li.appendChild(document.createTextNode(taskInput.value));
    // create new link element
    const link = document.createElement("a");
    link.className = "delete-item secondary-content";
    // add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to the li
    li.appendChild(link);

    // Append the li to the ul
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";

    e.preventDefault();
  }

  function removeTask(e) {
    if (e.target.parentElement.className === "delete-item secondary-content") {
      e.target.parentElement.parentElement.remove();
    }
  }

  function clearTasks(e) {
    // one way
    // taskList.innerHTML = '';
    // another way- actually faster
    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }
  }

  function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    // query selector allreturns nodelist so can use foreach
    // but if was html colleciton wouldneed otconvert it to array first
    document.querySelectorAll(".collection-item").forEach(function(task) {
      const item = task.firstChild.textContent;
      if (item.toLowerCase().indexOf(text) != -1) {
        task.style.display = 'block';
      } else {
        task.style.display = 'none'
      }
    });
  }
}
