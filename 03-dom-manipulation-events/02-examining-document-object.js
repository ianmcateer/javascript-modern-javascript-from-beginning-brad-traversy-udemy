// show you how to select eekemts direclty but easier ways 
// which will get into later

// document object represents the currently loaded webpage

// using materialize css cdn
// fontawesome cdn

let val;

val = document; //gives us entire document html head body etc

// when working with dom gives us different types of structures 
// /eg html collection- like an array but ist cant use foreach for example
// then have node lists also look like arrays but can use foreach loops on them 

val = document.all; //gets collection not array- collection of html . looks like array
val = document.all[2]; //can access items in collection like an array
val = document.all.length; //43 elements in the dom


val = document.head;
val = document.body;
val = document.doctype;
val = document.domain; // 127.0.0.1
val = document.URL;
val = document.characterSet;
val = document.contentType; //text/html bc html page

// can select stuff without using selectors 
// not recommended but possible
val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

// gives html collection
val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0]; //domtokenlist of classes

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');


// html collections if want to turn into array to use foreach bc you cant do with collection
// cant loop through collection
let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
  console.log(script.getAttribute('src'));
});

// this wont Work..
// script.forEach(function(script) {
//   console.log(script.getAttribute('src'));
// });

console.log(val);