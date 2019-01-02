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