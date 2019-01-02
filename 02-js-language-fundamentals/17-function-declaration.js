// FUNCTION DECLARARIONS

function green(firstName = 'test', lastName) {
  // console.log('hello')
  return 'hello ' + firstName + lastName
}

// console.log(green(undefined, 'Mcateer'))

// FUNCTION EXPRESSION
const square = function (x=3) {
  return x * x
}

console.log(square(8))

// sometimes expressions have benefits such as hoisting, closures

// immediately invocable function expressions -IIFES

// (function(name){
//   console.log('iife ran')
// })()

// very useful for deisgn patterns 

// PROPERTY METHODS
// funciton inside an object is called a method
const todo = {
  add: function() {
    console.log('add todo')
  },
  edit: function(id){
    console.log(`edit todo ${id}`)
  },
  delete: function () {
    console.log('delete todo..')
  }
}

todo.add()
todo.edit(22)
todo.delete()