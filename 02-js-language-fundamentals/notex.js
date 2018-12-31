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


console.log(val);
