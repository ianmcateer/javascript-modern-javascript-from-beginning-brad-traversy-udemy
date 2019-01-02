//   ---------------------------  //
//   ---------------------------  //
//   ---------------------------  //
// THE CONSOLE
console.log("hello world");
console.table({ a: 1, b: 2 });
console.error("this is some error"); //puts it in red
console.clear();
console.warn("this is a warning");
console.time("hello");
console.time("hello world");
console.time("hello world");
console.time("hello world");
console.time("hello world");
console.timeEnd("hello");

// console.time gives time it took from beginning to timeEnd

//   ---------------------------  //
//   ---------------------------  //
// VAR LET CONST

// can reassign with var
var name = "john doe";
name = "steve smith";

// can create variables and not assign them to a value
// init vairbale..
var greeting;
// actually sets it to undefined
greeting = "hello";

// variable cant start with number,
// can contain numbers letters _ $
// use camelCase for variable names

// let works similar to var but adv when comes to block level scoping
let name;
name = "john";

// const- cant be reassigned
// have to initialise with value
// but dont get confused when used with objects, arrays

const person = {
  name: "john"
};

person.name = "sarah";

// we can change the stuff inside here we just cant reassign person
// use const unless plan on having the value change- lets others reading code know
// your intention

//   ---------------------------  //
//   ---------------------------  //
// DATA TYPES IN JS

// theres primitives and reference data types
// primtivies: data stored directly and  accessed on the stack

// reference data types stored by reference
// the data is stored on the heap
// a pointer to a location in memory

// SIX PRIMITIVE DATA TYPES
// strings
// numbers
// null- intentional empty value
// undefined - variable that hasnt been assigned a value - all variables undefined by default
// boolean
// SYMBOLs (es6)

// REFERENCE DATA TYPES / OBJECTS
// arrays
// object literals
// functions
// dates
// anything else...

// JS IS DYNAMICALLY TYPEDLANGUAGE

// types are associated with values not variables
// same variable can hold multiple types
// dont need to specify types
// mos tother languages statcially typed

// string
const name = "john doe";
// number
const age = 45;
// boolean
const hasKids = true;
// null
const score = null;
// undefined
let test;
// symbol
const sym = Symbol();
console.log(typeof name);
console.log(typeof null); // bug in js
console.log(typeof sym);

// REFERENCE TYPES
// array
const hobbies = ["movies", "music"];
// object literal
const address = {
  city: "boston",
  state: "MA"
};
const today = new Date();

// PRIMITIVE TYPES- when set variable to string this is the data thats actually being accessed
// with these data types they are being accessed from memory as a reference

//   ---------------------------  //
//   ---------------------------  //
// TYPE CONVERSION
// type conversion- taking a variable ad changing a data type
// eg taking input from form its going to be a string by default
// to apply calculations to it youre going to want to parse it
// change it into a number type

// number to string
let val;

// output
console.log(val);
console.log(typeof val); //number
console.log(val.length); //undefined .length only on stirngs

// to convert to string
val = String(5);

// Bool to string
val = String(true);
// Date to string
val = String(new Date());

// also have the toString method
val = (5).toString();
val = true.toString();

// Strings to Numbers
val = Number("5");
console.log(val.toFixed()); // only works with numbers

// bool to numebr
val = Number(true); //gives us 1- false gives 0 as a number, null gives 0, undefined gives NaN
val = Number("hello"); //NaN - special value in js when vlue tries to get parsed as a number but cant

// also have method called parseInt
val = parseInt("100"); //wont work for floats
val = parseFloat("100.30");

console.log("5" + 6); //js changed 6 to a string and concatonated it
// example of type coercion

//   ---------------------------  //
//   ---------------------------  //
//NUMBERS AND THE MATH OBJECT

const num1 = 100;
const num2 = 50;
let val;

// simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2; //gves the remained

console.log(val);

// MATH OBJECT
// Math is an object so it has properties and methods
val = Math.PI;
val = Math.round(2.8);
// can round up or down
val = Math.ceil(2.4); // will return 3
val = Math.sqrt(64);
val = Math.abs(-3); //3
val = Math.pow(8, 2); //64
(val = Math), min(2, 33, 4, 1, 55); //returns whatever the mimimum is
val = Math.random(); //gives random decimal- but wont give you whole number
// solution to this^
val = Math.random() * 20; //gives between 0 and 19
// just add a one and wrap inside Math.floor
val = Math.floor(Math.random() * 20 + 1); //now gives value bwtween 1 and 20

//   ---------------------------  //
//   ---------------------------  //
//STRINGS< STRING METHODS CONCATENATION
const firstName = "William";
const lastName = "Johnson";
const age = 36;

let val;
//concatenates them together
val = firstName + " " + lastName;

// Append
val = "Brad ";
val += "Traversy";

val = "";
val = "Hello, my name is " + firstName + " and i am " + age;

// es2015 es6 template literals makes this easier now
// escaping - one soltuoon use double quotes on outside- other add a backslash \
val = "that's awesome, i can't wait";

// length
// count characters in the string
vall = firstName.length;

// concat()
val = firstName.concat(" ", lastName); //William Johnson

// CHnage case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// can treat string like a read only array
val - firstName[0];

// can look the index for a certain character
// looks for the index of the first 'l' it can find
val = firstName.indexOf("l");
// to go other way
val = firstName.lastIndexOf("l");
// if cant find it will return -1

// charAt()
// returns the chaacter at a specified index
val = firstName.charAt("2");

// get last character
val = firstname.charAt(firstName.length - 1);

// substring
val = firstname.substring(0, 4);

// slice() mosly used to pull things out of arrays
val = firstname.slice(0, 4);
// but what you can do is you can start from the back and take the last three
val = firstname.slice(-3);

// split()
const str = 'hello my name is Brad';
str.split(' '); //split at the spaces into an array 
console.log(val);

//replace 
val = str.replace('Brad', 'Jack')

//includes
val = str.includes('Hello')  //returns a boolean 

//   ---------------------------  //
//   ---------------------------  //
//  TEMPLATE STRINGS

const name = 'John';
const age = 30;
const job = 'Web Developer';
const city = 'Miami';
let html;

// sometimes rendering html through javascript so creating some html string s
// without template strings
html = '<ul><li>Name: ' = name + '</li><li>Age: ' + age + ' </li><li>Job: ' + job;

function hello(){
  return 'hello'
}

// template srings have fixed this (es6)
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30': 'Under 30'}</li>
  </ul>
`;

document.body.innerHTML = html;

//   ---------------------------  //
//   ---------------------------  //
//  ARRAYS AND ARRAY METHODS

// alllow us to store mutiple values
const numbers = [43, 56, 33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'hello', true, undefined, null, {a:1, b: 1}, new Date()];

let val;
// get array length
val = numbers.length;
// check if something is an array
val = Array.isArray(numbers); 

// get a single value form an array 
// arrays are zero bassed
val = numbers[3];

// insert into array 
numbers[2] = 100;
// find index of value 
val = numbers.indexOf(36)


// MUTATING ARRAYS
// add onto end of array
numbers.push(250);

// add onto front 
numbers.unshift(120);

// take off from end 
numbers.pop();

// take off first element from front 
numbers.shift()

// can also splice out from any place in array - 
// with this can remove or replace existing elements or add new elements
numbers.splice(1,1);

// reverse array 
numbers.reverse();

// concat array 
val = numbers.concat(numebrs2);

// sort arrays 
val = fruit.sort()
// sorting numebrs- need to pas in a callback
val = numbers.sort()

// use the 'compare function' to sort numbers array 
val = numbers.sort(function(x, y){
  return x - y;
});

// rveerse sort
  val = numbers.sort(function(x, y){
    return y - x;
  });

  // find takes in a testing function
  function under50(number){
    return number < 50;
  }

  val = numbers.find(under50);

  // will return the first number under 50
  // looked at array 

  //   ---------------------------  //
//   ---------------------------  //
//  OBJECT LITERALS

const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 30,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'miami',
    state: 'florida'
  },
  getBirthYear: function(){
    return 2017 - this.age;
  }
}

let val;
val = person;

val=person.firstName;
// can also use this syntax
person['firstName'];
val = person.age;
val=person.hobbies;
val=person.address.state;
val=person.address['city'];
val = person.getBirthYear();

// also see array or object
const people = [
  {name: 'john', age: 30},
  {name: 'mike', age: 23},
]

for (let i = 0; i < people.length; i++){
  console.log(people[i].name)
}

console.log(val)

//   ---------------------------  //
//   ---------------------------  //
//  DATES AND TIMES WITH JAVASCRIPT

let val;

const today = new Date();
let birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('September 10 1981');
birthday = new Date('9/10/1981');

val= today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getHours();
val = today.getMinutes();

birthday.setMonth(2);

console.log(typeof val);

//   ---------------------------  //
//   ---------------------------  //
//  IF STATEMENTS< COMPARISON OPERATORS

// if (something){
//   do something
// } else {
//   do somehting else
// }

const id = 100;
if (id == 100) {
  console.log('correct')
} else {
  console.log('incorrect')
}

// not equal to 
if (id != 100) {
  console.log('correct')
} else {
  console.log('incorrect')
}

// equal to value & type
// suggest using this one most of the time 
if (id === 100){
  console.log('correct')
} else {
  console.log('incorrect')
}

// how to test if somehting is defined??
// test to see if defined 
if (id){
  console.log(`The ID is ${id}`)
} else {
  console.log('no id')
}

// but if no id at all then would get a reference error
// correct way to test this would be to use typeof operator

if (typeof id !== 'undefined'){
  console.log(`the id is ${id}`)
} else {
  console.log('No id')
}

// but be careful- typeof null will return 'object'- to be safe this is what could use instead
if (typeof variable === 'undefined' || variable === null) {
  // variable is undefined or null
}

const age = 4;
// AND&&
if (age > 0 && age < 12) {
  console.log(`${name} is a child`)
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`)
} else {
  console.log(`${name} is an adult`)
}

// OR ||
if (age < 16 || age > 65) {
  console.log(`${name} cannot run in race`)
} else {
  console.log(`${name} is registered for the race`)
}

// Ternary operator
console.log(id === 100 ? 'correct' : 'incorrect')

// without bracse
if(id === 100)
  console.log('test')
else 
  console.log ('incorrect')

  const color = 'orange'

switch(color){
  case 'red':
    console.log('red')
    break
  case 'green':
    console.log('green')
    break
  default:
    console.log('color is not red or green')
}

// SWITCH STATEMENTS
// inside switch define different cases

let day 
switch (new Date().getDay()){
  case 0: 
    day = 'Sunday'
    break
  case 1:
    day = 'monday'
    break
  case 2:
    day = 'tuesday'
    break
  case 3:
    day = 'wednesday'
    break
  case 4:
    day = 'thursday'
    break
  case 5:
    day = 'friday'
    break
}

console.log(`today is ${day}`)

//   ---------------------------  //
//   ---------------------------  //
//  FUNCTION DECLARATIONS FUNCTION EXPRESSIONS

// function declaration
function greet(name = 'john'){
  console.log(`hello ${name}`)
}
greet('ian')

// es6 can define defaults

// function expressions
// ptting a function as a variable assignment 
// usually anonymous witha  named variable 
const square = function(x = 3){
  return x * x;
};

square(8)

// most cases not make much of a difference but some cases declarations have 
// benefits such as hoisting, closures


// IIFE
(function(){
  console.log('iife ran..')
})()

// can put funcitons inside objects as well
// when pt inside object called a method 
const todo = {
  add: function(){
    console.log('add todo..')
  }
}

todo.add();

//   ---------------------------  //
//   ---------------------------  //
// LOOPS AND ITERATIONS 

// for, while do while loops most popular 
// use for loop whenknow how many iterations
// while loop when unclear

// for loop
for(let i = 0; i < 10; i++){
  console.log(i)
}
// set i to 0 
// as long as i is less than ten execute body 
// so if condition returns false code not run


// ten is not less than ten
for (let i = 0; i < 10; i++) {
  if (i ===2){
    console.log('two is my favourite number')
    continue //go to next iteration so 'number 2' wont be printed nanymore- contrinue means keep going with loop
  }
  console.log( 'number ' + i)
}

for (let i = 0; i < 10; i++) {
  if (i === 2) {
    console.log('two is my favourite number')
    continue //go to next iteration so 2 wont be printed nanymore- contrinue means keep going with loop
  }

  // break breaks out of the loop
  if (i ===5) {
    console.log('stop the loop')
    break
  }
  console.log('number ' + i)
}

// WHILE LOOP
// for loop when know how many times going to return while loop when dont 
let i = 0
while(i < 10){
  console.log(i)
  i++
}

// do while- always going to run at least once no matter what even if condition isnt met
do {
  console.log('number ' + i);
  i++;
}
while(false);

// LOOP THROUGH ARRAY
// have specific methods for looping
const cars = ['ford', 'chevy', 'honda']

for(let i = 0; i <cars.length; i++){
  console.log(cars[i])
}

// ARRAY FOR EACH ARRAY LOOP
// does not mutate array
cars.forEach(function(car){
  console.log(car)
})

// ARRAY.MAP- return something different
// creates a new array
const users = [
  {id:1, name: 'ian'},
  {id:2, name: 'sarah'},
  {id:3, name: 'john'}
]

// map doe snot mutate original array
const ids = users.map(function (user){
  return user.id
})
console.log(ids)

cars.forEach(function (car, index, array) {
  console.log(car)
  console.log(index)
  console.log(array)
})

// for in often used for objects
const user = {
  firstName: 'ian',
  lastName: 'mcateer',
  age: 25
}

for(let x in user){
  console.log(x)
}
for(let x in user){
  console.log(`${x} : ${user[x]}`)
}


//   ---------------------------  //
//   ---------------------------  //
// A LOOK AT THE WINDOW OBJECT
// the window is the global object in client side javacript
// node-js running as standalone process in computer
// in client side- node and chrome use same js engine - v8
// window object has alot to it- js developers use all time
// local storage, fetch api, navigator object 

console.log(window);
// see fetch, document, local storage 

// windowmethods, objects and proerties

window.console.log(123)
// we are at top of window object so dont need to
// include window but it is part of th ewindow

window.alert('hello world');

// promot similar to alert but takes input
const input = promot();
alert(input);

// confirm- used when deleting somehting 
if(confirm('are you sure?')){
  console.log('yes')
}

let val;
val = window.outerHeight;
val = window.outerWidth;

// also have inner

// scroll points
val = window.scrollY 
// val = window.scrollX

// location object
val = window.location  //can get host, port, pathname, href, origin, protocol
val = window.location.hostname
val = window.location.port
val = window.location.href
val = window.location.search // try entering in search terms in url search bar eg name=brad

// redirect
// window.location.href = 'http://google.com'

// reload
// window.location.reload()

// HISTORY OBJECT
// window.history.go(-1) //takes us back to the page before 
// val = window.history.length


// navigator object- to do w the browser not the window, chrome, firefox
val = window.navigator
val = window.navigator.appName //returns netscape
val = window.navigator.appCodeName
val = window.navigator.userAgent
val = window.navigator.platform
val = window.navigator.language

console.log(val)

// SCOPE
// global scope
var a = 1
let b = 2
const c = 3

// wont log because of scope
// function test() {
//   var a = 3
//   let b = 4
//   const c = 5
// }

// if(true) {
//   //block scope
//     var a = 4
//     let b = 5
//     const c = 6
//     console.log('if scope:', a,b,c)
// }

for(let a = 0; a < 10; a++) { //if was var would change it in the global scope
  console.log(`loop: ${a}`)
}

console.log('global scope:', a, b, c)

// var variables function scoped
// let and const still 2 and 3
// var is weird 

// let and const block level scope
// var function scope