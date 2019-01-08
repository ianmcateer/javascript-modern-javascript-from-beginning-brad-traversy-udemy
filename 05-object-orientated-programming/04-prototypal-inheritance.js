// what if one object type inherit from another
// want to create one object Person and have another customer object 
// inherit its prototype

// Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John', 'Doe');

console.log(person1.greeting());

// Customer constructor
function Customer(firstName, lastName, phone, membership) {
  // call Person- this function calls another function in the current function
  // 
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.membership = membership;
}

// Inherit the Person prototype methods
// so object.create() creates an empty object which its prototype pointing to at whatever you pass in 
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Create customer
const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');

console.log(customer1);

// Customer greeting
Customer.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
}

console.log(customer1.greeting());