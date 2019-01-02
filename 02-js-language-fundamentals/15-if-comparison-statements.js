// if (something) {
//   do somthing
// } else {
//   do something
// }

const id = 100
const color = 'red'

// // equal to
// if (id == 100){
//   console.log('correct')
// } else {
//   console.log('incorrect')
// }

// if (id !== 100) {
//   console.log('correct')
// } else {
//   console.log('incorrect')
// }

// // equal to value and type
// if (id === 100) {
//   console.log('correct')
// } else {
//   console.log('incorrect')
// }

// if(id) {
//   console.log(`the id is ${id}`)
// }

// if (typeof id !== 'undefined') {
//   console.log(`the id is ${id}`)
// } else {
//   console.log('no id')
// }

// greater of less than 
if (id > 200) {
  console.log('correct')
} else {
  console.log('incorrect')
}

if (color === 'red') {
  console.log('color is red')
} else if (color == 'blue') {
  console.log('color is blue')
} else {
  console.log('color is not red or blue')
}

// logical operators 
const name = 'ian'
const age = 24


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
if(id===100)
  console.log('test')
else 
  console.log ('incorrect')