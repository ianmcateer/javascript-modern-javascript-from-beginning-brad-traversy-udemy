// php use class based objects
// es5 js does not 
// each object in js has a prototype but a prototype is an object itself
// all objects inheirt their properties and methods from their prototype 
// object literals with them you inheirt from Object.prototype
// when dealing with objects created from construcor its going to come from 
// Person.prototype

// prototype chain- you have this prorotoype but can go up the prototype chain 
// to the main Object.prototype

// if console.log object created from constructor eg console.log(mary)
// you will see a Person object with __proto__ 
// this __proto__ points to the Person.prototype

// calculate age same for every person 
// this is smth should put inside prototype not directly inside the object

//Object.prototype
//Person.prototype

// Person constructor
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.calculateAge = function(){
  //   const diff =  Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
}

// Calculate age
Person.prototype.calculateAge = function(){
  const diff =  Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get full name
Person.prototype.getFullName = function(){
  return `${this.firstName} ${this.lastName}`;
}

// Gets Married
Person.prototype.getsMaried = function(newLastName){
  this.lastName = newLastName;
}

const john = new Person('John', 'Doe', '8-12-90');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');

console.log(mary);
console.log(john.calculateAge());

console.log(mary.getFullName());
mary.getsMaried('Smith');
console.log(mary.getFullName());

//if sees .hasOwnProperty method and cant find it on the instances looks up the prototype chain
console.log(mary.hasOwnProperty('firstName'));
console.log(mary.hasOwnProperty('getFullName'));  //returns false bc its on the prototype 
