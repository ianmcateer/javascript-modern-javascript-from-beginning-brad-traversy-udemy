const clearBtn = document.querySelector(".clear-tasks");
const card = document.querySelector(".card");
const heading = document.querySelector("h5");

// click
clearBtn.addEventListener("click", runEvent);
// Double click
clearBtn.addEventListener("dblclick", runEvent);
// mouse down - click and hold is mousedown
clearBtn.addEventListener("mousedown", runEvent);
// mouse-up does opposite - click and hold and when let go thats when event firesoff
clearBtn.addEventListener("mouseup", runEvent);
// mouseenter
card.addEventListener("mouseenter", runEvent);
// mousleave
card.addEventListener("mouseleave", runEvent);
// to other simialr events mosueover and mouseout 
card.addEventListener("mouseover", runEvent);
card.addEventListener("mouseout", runEvent);
// difference? mouse enter and leave only fire off when go in and out of main element 
// mousoue and mosueover will keep firingon an off if go into another element 
// thats inside of that element 

// mousemove- anywher ein card keeps firing - useful for games 
card.addEventListener("mousemove", runEvent);
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);
  heading.textContent = `<h5>MouseX: ${e.offsetX} MouseY: ${e.offsetY}</h5>`;

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40 )`;
}



// Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);
}
