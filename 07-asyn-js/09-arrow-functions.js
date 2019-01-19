// benefits saving lines of code
// arrow functions use a lexical this

function sayHello = funciton () {
  console.log('hello')
}
sayHello()

const sayHello = () => {
  console.log('hello')
}

// if funciton body only one line
const sayHello = () => console.log('hello')

// same with return 
const sayHello = () => 'hello'
console.log(sayHello())

// return object ltieral- this wont work bc will look at the {} as the function body 
// instead of an object literal
// to fix- wrap inside parentheses
const sayHello = () => {msg: 'hello'}
const sayHello = () => ({msg: 'hello'})

// parameters
const sayHello = (name) => console.log(`Hello ${name}`)
sayHello('brad')

// if single parameter dont need parentheses
const sayHello = name => console.log(`Hello ${name}`)

function getText(){
  fetch('test.txt')
  .then(res => res.text())
  .then(data => {
    console.log(data)
    document.getElementById('output').innerHTML = data;
  })
  .catch(err => console.log(err))
} 