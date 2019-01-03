// how to replace, rmeove elemnts from nom, get attributes and classes and change them

// REPLACE ELEMENT
// replace h5 with a h2 with different text
// ceate element..
const newHeading = document.createElement("h2");
// add id
newHeading.id = "task-title";
// create new text node
newHeading.appendChild(document.createTextNode("Task List"));

// get old heaidng want to replace
const oldHeading = document.getElementById("task-title");

// going to need a aprent because going to use replace child
// and need ot call it on the parent which is a div with class card-action
// parent
const cardAction = document.querySelector(".card-action");

// replace
cardAction.replaceChild(newHeading, oldHeading);

// REMOVE ELEMENT
const lis = document.querySelectorAll("li");
const list = document.querySelector("ul");

// remove list item
lis[0].remove();

// can also remove by child
list.removeChild(lis[2]);

console.log(newHeading);

// CLASSES AND ATTRIBUTES
const firstLi = document.querySelector("li:first-child");
// to get the a tag inside
const link = firstLi.children[0];

let val;
val = link.className; // gives string of classes
val - link.classList; // gives dom token list
val = link.classList[0]; // get the first className

// can also add onto existing classes
link.classList.add("test");
// remove classes
link.classList.remove("test");
val = link;

// ATTRIBUTES
val = link.getAttribute("href");
// can also set it
val = link.setAttribute("href", "http://google.com");
// check attribute
val = link.hasAttribute('title'); //returns boolean 

link.removeAttribute('href');
console.log(val);
