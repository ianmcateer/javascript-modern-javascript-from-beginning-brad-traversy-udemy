const color = 'orange'

switch(color){
  case 'red':
    console.log('red')
    break
  case 'green':
    console.log('green')
    break
  default:
    console.log('color is not red or green')
}

let day 
switch (new Date().getDay()){
  case 0: 
    day = 'Sunday'
    break
  case 1:
    day = 'monday'
    break
  case 2:
    day = 'tuesday'
    break
  case 3:
    day = 'wednesday'
    break
  case 4:
    day = 'thursday'
    break
  case 5:
    day = 'friday'
    break
}

console.log(`today is ${day}`)