let val
const today = new Date()


val = today
val = today.toString()

let birthday = new Date('05/11/1992 11:25:00')
birthday = new Date('September 10 1981')
birthday = new Date('9/10/1981')

// zero based
val = today.getMonth()
val = today.getDate()
val = today.getDay()
val = today.getFullYear()
val = today.getHours()
val = today.getMinutes()
val = today.getSeconds()
val = today.getTime()

birthday.setMonth(2)
birthday.setFullYear(1985)
birthday.setHours(0)
birthday.setMinutes(30)
birthday.setSeconds(3)

console.log(val)
console.log(birthday)