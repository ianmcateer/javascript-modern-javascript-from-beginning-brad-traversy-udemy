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

// Customer constructor
function Customer(firstName, lastName, phone, membership) {
  // call Person- this function calls another function form somewhere else in the current context
  Person.call(this, firstName, lastName);
  this.phone = phone;
  this.membership = membership;
}

//with the above you can now create a customer
// Create customer
// const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');
//but customer1.greeting() will not work bc its not a function
//its not yet inheriting the prototype
//customer1 prototype is pointing to the Customer function constructor
// and the Customer constructor prototype is pointing to the Object constructor

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
