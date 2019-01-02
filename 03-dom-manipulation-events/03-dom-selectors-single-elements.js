// these are document object methods that pull things 
// from the DOM

// single element selectors allow you to grab one element 
// by class or id 
// just going to grab the first one 

// document.getElementByid
// selects an element by its id
console.log(document.getElementById('task-title'));

// get things from the element 
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

// change styling 
document.getElementById('task-title').style.background = 'red';
document.getElementById('task-title').style.color = 'white';
document.getElementById('task-title').style.padding = '5px';
// document.getElementById('task-title').style.display = 'none';

//  change content 
document.getElementById('task-title').textContent = 'Task List';
document.getElementById('task-title').innerText = 'Task List';
document.getElementById('task-title').innerHTML = '<span style="color:red">Task List</span>'

// better to stor einside variable
const taskTitle = document.getElementById('task-title');

// querySelector
// newer and more powerful
// bc can select by anthing, id, classes, any css selector
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
// goingto get the first h5 it finds 
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';

// to select lass
// could use css pseudo classes
document.querySelector('li::last-child').style.color = 'red';
document.querySelector('li::nth-child(3)').style.color = 'red';
document.querySelector('li::nth-child(4)').textContent= 'Hello World';

// wont work - only do the first odd one - need to use querySelectorAll
document.querySelector('li::nth-child(odd)').style.background= 'red';

