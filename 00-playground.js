function Person (firstName, lastName){
  this.firstName = firstName;
  this.lastName= lastName;
}

Person.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName}`;
}

function Customer(firstName, lastName, customerNumber){
  Person.call(this, firstName, lastName);
  this.customerNumber = customerNumber;
}

// Customer.prototype = {
//   somePropery: 'somevalue'
// }

const customer1 = new Customer('ian', 'mcateer', 22);
console.log(customer1)

Customer.prototype = Object.create(Person.prototype);
