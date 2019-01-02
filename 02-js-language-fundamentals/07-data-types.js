// primitive data types
  // stored directly in the location the variable accesses
  // stored on the stack- access it by its value

// reference data types
  // accessed by reference- stored on the heap 
  // pointer on a location in memory

  // stirng, number, boolean, null(intentional empty value), undefined- var that hasnt been defined, symbols

  // arrays, object literals, functions  dates anything else reference type

  // dynamically typed language = types associated with values not variables
  // same variable can hold multiple types
  // c sharp have to define what type of value in that variable eg int
  // typescript- extra features, static typing is one of those features

  // PRIMITIVE
  // strings
  const name = 'ian'
  console.log(typeof name)
// number
  const age = 25
  console.log(typeof age)
  // boolean
  const hasKids = true
  console.log(typeof hasKids)
  // null- this is a bug- it is a primitive type 
  const car = null
  console.log(typeof car)
  // undefined
  let test
  console.log(typeof test)
//  symbol
const sym = Symbol()
console.log(typeof sym)


// REFERENCE TYPES
// array
const hobbies = ['movies', 'music']
// object literal
const address = {
  city: 'boston',
  state: 'MA'
}
const today = new Date()
console.log(today)
console.log(typeof today)