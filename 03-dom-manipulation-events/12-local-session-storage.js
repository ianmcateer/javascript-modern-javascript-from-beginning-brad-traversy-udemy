// LOCAL AND SESSION STORAGE
// going to be using it in the project
// persist them to local storage api

// window.localStorage

// what you set as a value has to be a string
// can save arrays, objects - turn them into string using json.stringify
// and when pull it out to use it you parse it back json.parse

// diff between local and session storage is local storage will stay
// until you manually clear it out in your settings or program
// sessions storage  will leave and go away once browser closed/session ends

// how to set local storage item
localStorage.setItem("name", "john");
localStorage.setItem("age", "30");

// go dev tools- application- storage to find the name value pair
sessionStorage.setItem("name", "beth");

// if comment out and reopen window session storage cleared but localstorage remains

// remove from storage
localStorage.removeItem("name");

// get from storage
let name = localStorage.getItem("name");
console.log(name);

// clear all local storage- will turn values to null
localStorage.clear();

// for form add submit event
document.querySelector("form").addEventListener("submit", function(e) {
  const task = document.getElementById("task").value;
  localStorage.setItem("task", task);
  alert("task saved");
  e.preventDefault();
});

// problem is if add another task the previous one added gets replaced
// so can only store one task at a time
// can store them in as an array of tasks and store that as a string

document.querySelector("form").addEventListener("submit", function(e) {
  const task = document.getElementById("task").value;
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.push(task)

  localStorage.setItem("tasks", JSON.stringify(tasks));

  alert("task saved");
  e.preventDefault();
});


const tasks = JSON.parse(localStorage.getItem('tasks'));
tasks.forEach(function(task){
  console.log(task)
})
