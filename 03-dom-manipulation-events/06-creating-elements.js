// how to create element and add things to it and insert it into the dom
// creating a list item

const li = document.createElement('li');

// add class
li.className = 'collection-item';

// add id
li.id = 'new-item';

// add attribute
li.setAttribute('Title', 'New Item');

// add a text node (somehting inside li)
// create text node and append
li.appendChild(document.createTextNode('Hello World'));

// insert into dom..
// append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li)