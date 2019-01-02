const firstName = 'ian'
const lastName = 'mcateer'
const str = 'hello there my name is ian'
const tags = 'web design, web development, programming'

let val

// concatenation
val = firstName + lastName
// concatenation

console.log(val)

// template strings escaping
val = 'thats\'s awesome, i can\'t wait'

// length
val = firstName.length

// concatenation
val = firstName.concat(' ', lastName)

// change case
val = firstName.toUpperCase()
val = lastName.toLowerCase()

val = firstName[0]

// indexof
val = firstName.indexOf('n')
val = firstName.lastIndexOf('a')

// charAt()
val = firstName.charAt('2')
// get last character
val = firstName.charAt(firstName.length - 1)

// substring
val = firstName.substring(0, 2)

// slice
val = firstName.slice(-1)
val = firstName.slice(0, 2)

// split stirng into an array 
// split on spaces
val = str.split(' ')
// split on commas
val = tags.split(',')
// replace
val = str.replace('ian', 'Jack')
// includes
val = str.includes('ian')


console.log(val)