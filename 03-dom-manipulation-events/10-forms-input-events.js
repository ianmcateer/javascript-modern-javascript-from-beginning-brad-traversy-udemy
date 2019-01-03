const form = document.querySelector("form");
const taskInput = document.getElementById("task");
const heading = document.querySelector("h5");
const select = document.querySelector("select");

// to clear form input
// usually do this after usbmit a form so you clear it out
taskInput.value = "";

form.addEventListener("submit", runEvent);

// some events we can run on the actual input not the form..
// keydown- keep firing off when you type
taskInput.addEventListener("keydown", runEvent);

// keyup- only fires off when release the key
taskInput.addEventListener("keyup", runEvent);

// keypress
taskInput.addEventListener("keypress", runEvent);

// focus- when you click inside an input and set it to focus mode
taskInput.addEventListener("focus ", runEvent);
// opposite owuld be blur- so when clikc out
taskInput.addEventListener("blur", runEvent);
// cut- when cut somthing from the input fires offor ctrl x
taskInput.addEventListener("cut", runEvent);
taskInput.addEventListener("past", runEvent);
// input- includes cut paste
taskInput.addEventListener("input", runEvent);
// change- use on select option list
select.addEventListener("change", runEvent);

// to catch input from each keydown..
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);
  console.log(e.target.value); //the value is whatever we are typing in
  heading.innerText = e.target.value;
}

function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  // to get input value
  console.log(taskInput.value);

  e.preventDefault();
}

// sometimes when submit form will redirect to new page- not doing it here
// not doing it here because smth to do with materialise js
// give form an action="index.php" to see this default behaviour
// to prevent this from happening do e.preventDefault()
