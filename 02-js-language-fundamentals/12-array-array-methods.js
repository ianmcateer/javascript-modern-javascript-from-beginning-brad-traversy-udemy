const numbers = [43, 56, 22242, 241, 4242, 32]

const  numbers2 = new Array(22,34,34)

const fruit = ['banana', 'apple','orange', 'pear'
]

const mixed = [22, 'hello', undefined, null, {a:1, b:1}, new Date()]

console.log(mixed)


let val 

// get array 
val = numbers.length
// check if is array
val = Array.isArray(numbers)
val = Array.isArray('hello')
// get a single value
val = numbers[3]
val = numbers[0]
// arrays are zero based 

// find index of a value
val = numbers.indexOf(32)

numbers[2] = 100
// add on to end
numbers.push(250)

// add on to front
numbers.unshift(120)
// take off from end
numbers.pop()
numbers.pop()
// take off from front
numbers.shift()
// splice values- where you want to start and where you want to end
numbers.splice(1,2)

// reverse
numbers.reverse()

// concatenate array
val = numbers.concat(numbers2)

val = fruit.sort()
val = numbers.sort()
// doesnt work  

// compare function
// sorts alphabetically by default- doesn't sort numbers
val = numbers.sort(function(x, y){
  return x- y 
  // return y - x
})


// find 
function under50 (num) {
  return num < 50
}

val = numbers.find(under50)

console.log(numbers)
console.log(val) 