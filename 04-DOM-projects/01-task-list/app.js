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
    const link = document.createElement('a');
    link.className  = 'delete-item secondary-content';
    // add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>'
    // Append the link to the li
    li.appendChild(link)

    // Append the li to the ul
    taskList.appendChild(li)

    // Clear input
    taskInput.value = '';

    e.preventDefault();
  }
}
