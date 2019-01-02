var name = 'john doe'
console.log(name)
name = 'steve smith'
console.log(name)

// init variable
var greeting 
console.log(greeting)
greeting = 'hello'
console.log(greeting)

const myName = 'ian'
// cannot reassign

const person = {
  name: 'john',
  age: 25
}

person.name = 'ian'
// cant reassign person 
console.log(person)

const numbers = [1,2,3,4,5]
numbers.push(6)
console.log(numbers)

// but cant do 
// numbers = []

// use const unless plan on the value changin - know that this value should not be assigned as a inew primitive value 