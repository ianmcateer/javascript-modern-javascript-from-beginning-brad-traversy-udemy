// EVENT LISTENERS
// havent done any interaciton with page yet
// can listen for events
// going to add listener to clear tasks button

// eventListener takes in two things - the actual event we want to listen for,
// and an anon function (callaback)
// this function gets executed when we run this click event

document.querySelector(".clear-tasks").addEventListener("click", () => {
  console.log("hello world");
});

// when click hello world flashes real quick why is this??
// some elements have default behaviours eg a form will
// submit to a page
// a link will try to redirect somewhere else
// the link has no href atm so put href='#' will
// prevent the browser redirect to resolve

// can also - to prevent default redirect behaviour pass
// a parameter to callback function, the event object

document.querySelector(".clear-tasks").addEventListener("click", function(e) {
  console.log("hello world");
  e.preventDefault();
});

// can also put a named function
document.querySelector(".clear-tasks").addEventListener("click", onClick);

function onClick(e) {
  console.log("clicked");

  let val;

  // set val to the event object
  val = e;

  // event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  e.target.innertext = 'hello';

  // Event type
  val = e.type;

  // Timestamp
  val = e.timeStamp;

  // Coordinates of event relative to window
  val = e.clientY;
  val = e.clientX;

    // Coordinates of event relative to element itself
    val = e.offsetY;
    val = e.offsetX;

  console.log(val);
}

// most important is the target- represents the element the event actually happened on
// in this case the a tag
