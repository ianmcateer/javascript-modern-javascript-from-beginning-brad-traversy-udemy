// event bubbling and event delegation
// event bubbling is the bubbling up of events through the dom
// so when an event happens it will bubble up through its parents

// eg if put a click event on a span that event will bubble up to its parent and its parent
// event delegation is the opposite of event bubbling - we put the listener on one of the parent elements
// and we use logic inside the event handler to target the actual event we want that click
// for

// going to target the ul which contains the li's, going to put event on ul then target li we want
// this is needed because the a tags are the ones we want to target

// how event bubbling works
// EVENT BUBBLING
document.querySelector(".card-title").addEventListener("click", function() {
  console.log("card title");
});

// goign to also put listener on its parent which is the card content
document.querySelector(".card-content").addEventListener("click", function() {
  console.log("card content");
});

// and its parent..
document.querySelector(".card").addEventListener("click", function() {
  console.log("card");
});

// and its parent...
document.querySelector(".col").addEventListener("click", function() {
  console.log("col");
});

// when click on card title its going to bubble up and all of these will be called
// bc of event bubbling

// EVENT DELEGATION
//putting listener on the parent and going down
//without delegation...
const delItem = document.querySelector(".delete-item"); //the a tag

deleteItem.addEventListener("click", deleteItem);

function deleteItem(e) {
  console.log("delete item");
  console.log(e.target);
}

// only the first one works- why?? because querySelector only returns the first one it can find
// need to use event delegation
// also need event delegation when dynamically insert into dom using js eg new list item which was not there
// when page loaded

// instead of putting listener on the delete-item class put it on the parent
// could event put it on the body and inside the callback find the target

function deleteItem(e) {
  console.log(e.target);
  if (e.target.className === "fa fa-remove") {
    console.log("delete item");
  }
}

// another problem - when click on x the target is the icon (i tag)
// we will have to then get the parent

document.body.addEventListener("click", deleteItem);


// to deal with a tag around it 
function deleteItem(e) {
  console.log(e.target);
  if (e.target.parentElement.className === "delete-item") {
    console.log("delete item");
  }
}
// still not working why?? the parent classname is delete-item secondary-content 
// problem className looks at entire string 

function deleteItem(e) {
  console.log(e.target);
  if (e.target.parentElement.className === "delete-item secondary-content") {
    console.log("delete item");
  }
}

// not the best way of doing bc tightly coupled to class name
// better- use class list and see it delete item is in that list  

function deleteItem(e) {
  console.log(e.target);
  if (e.target.parentElement.classList.contains("delete-item")) {
    console.log("delete item");
  }
}

// now works - better way to target one of these links 

// lets add functionality to delete list item 
// we want to delete the whole list item which is the parent of the a tag 

function deleteItem(e) {
  console.log(e.target);
  if (e.target.parentElement.classList.contains("delete-item")) {
    console.log("delete item");
    e.target.parentElement.parentElement.remove();
  }
}

// if refresh comes back bc we arent persiting the data to a databaseor anything like that 
