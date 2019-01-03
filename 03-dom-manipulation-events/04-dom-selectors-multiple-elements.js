// return ither html collection or node list
// both similar to ararys but can be converted into arrays easily

// document.getElementsByClassName
const items = document.getElementsByClassName("collection-item");
console.log(items);
// get a html collection
console.log(items[0]);
items[0].style.color = "red";
items[3].textContent = "Hello";

const listItems = document
  .querySelector("ul")
  .getElementsByClassName("collection-item");

// getElementsByTagName is simialr
const lis = document.getElementsByName("li");
console.log(lis);
console.log(lis[0]);
lis[0].style.color = "red";

lis.reverse(); //error
// a html collection is not an array

// convert html collection into an array
lis = Array.from(lis);

// can now do forEach and reverse
lis.forEach(function(li, index) {
  console.log(li.className);
  li.textContent = `${index}: Hello`;
});

console.log(lis);

// querySelector all similar but returns an node list
const items = document.querySelectorAll("ul.collection li.collection-item");

console.log(items); //nodelist- cant do foreach etc

const liOdd = document.querySelectorAll("li:nth-child(odd");
const liEven = document.querySelectorAll("li:nth-child(even");

liOdd.forEach(function(li, index) {
  li.style.background = "grey";
});
