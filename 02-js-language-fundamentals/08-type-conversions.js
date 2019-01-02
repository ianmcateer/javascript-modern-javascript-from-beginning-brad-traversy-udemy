let val = 5

// number to string
val = String(555)
val = String(4+4)
// bool to string
val = String(true)
// date to stirng
val = String(new Date())
// array to string
val = String([1,2,3,4])

// toString() method
val = (5).toString()
val = (true).toString()

// strings to numbers
val =   Number('5')
val = Number(true)  //1
val = Number(false) //0
val = Number(null) //0
val = Number('hello') // Nan


// another way to do it
val = parseInt('100')
val = parseFloat('100.90')

// output
console.log(val)
console.log(typeof val)
console.log(val.length)
console.log(val.toFixed(2)) // allows us to specify decimals

// tyoe coercion- javascript does it for us

const val1 = '5'
const val2 = 6

const sum = Number(val1 + val2)
console.log(sum)
console.log(typeof sum)