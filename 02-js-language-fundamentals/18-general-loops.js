// for, while do while loops

// for loop
// for(let i = 0; i < 10; i++){
//   console.log(i)
// }

// ten is not less than ten

// for (let i = 0; i < 10; i++) {
//   if (i ===2){
//     console.log('two is my favourite number')
//     continue //go to next iteration so 2 wont be printed nanymore- contrinue means keep going with loop
//   }
//   console.log( 'number ' + i)
// }

// for (let i = 0; i < 10; i++) {
//   if (i === 2) {
//     console.log('two is my favourite number')
//     continue //go to next iteration so 2 wont be printed nanymore- contrinue means keep going with loop
//   }

//   if (i ===5) {
//     console.log('stop the loop')
//     break
//   }
//   console.log('number ' + i)
// }

// WHILE LOOP
// for loop when know how many times going to return while loop when dont 
let i = 0
// while(i < 10){
//   console.log(i)
//   i++
// }

// do while- always going to run at least once
do {
  // console.log('number ' + i)
  i++
}
while(false)

// LOOP THROUGH ARRAY
// have specific methods for looping
const cars = ['ford', 'chevy', 'honda']

for(let i = 0; i <cars.length; i++){
  console.log(cars[i])
}

// FOR EACH ARRAY LOOP
cars.forEach(function(car){
  console.log(car)
})

// MAP- return something different
const users = [
  {id:1, name: 'ian'},
  {id:2, name: 'sarah'},
  {id:3, name: 'john'}
]

const ids = users.map(function (user){
  return user.id
})
console.log(ids)

cars.forEach(function (car, index, array) {
  console.log(car)
  console.log(index)
  console.log(array)
})

// for in often used for objects
const user = {
  firstName: 'ian',
  lastName: 'mcateer',
  age: 25
}

for(let x in user){
  console.log(x)
}
for(let x in user){
  console.log(`${x} : ${user[x]}`)
}