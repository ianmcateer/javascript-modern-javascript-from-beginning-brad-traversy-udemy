// traverse means move up and down
// so dealing with parents and children of nodes or
// whatever it is we select

let val;

const list = document.querySelector("ul.collection");
// this si going to select the first one
const listItem = document.querySelector("li.collection-item:first-child");

// if want to get the children or the child ndoes of the ul
// get child nodes..
val = list.childNotes;  // gives us node list of all child nodes
// we get the lis but also the text nodes which is actuall yjust the line breaks
val = list.childNotes[0].nodeName;
// can check nodeType
val = list.childNotes[1].nodeType;

// 1 element
// 2 attribute  (depracated)
// 3 text node
// 8 comment 
// 9 document itself 
// 10 doctype 


// insread of using childNodes can use children to get children eleemnts
val = list.children;  //html collection 
val = list.children[0];
val = list.children[1].textContent = 'hello'
// childre of children
val = list.children[3].children[0]  //accesses the a tag
list.children[3].children[0].id = 'test-link';

// gives us the first node - might not want to deal with textNodes
list.firstChild; 

// will give you the first element - use htis in most cases
list.firstElementChild;
// also have lastChild and lastElementChild

// counts the number of children elements
val = list.childElementCount;

// Get parent node 
val = listItem.parentNode;  //gets the ul
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling 
val = listItem.nextSibling; //gives us text node 
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;

// get previous sibling 
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);
