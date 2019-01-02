const person = {
  firstName: 'ian',
  lastName: 'mcateer',
  age: 25,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'miami',
    state: 'fl'
  },
  getBirthYear: function(){
    return 2018 - this.age
  }
}

let val


// get specific value
val = person['firstName']
val = person.lastName

val = person.age
val = person.hobbies
val = person.hobbies[1]
val = person.address
val = person.getBirthYear()
console.log(val)

const people = [
  {name: 'john', age: 30},
  {name: 'ian', age: 25},
  {name: 'nancy', age: 40}
]

for (i = 0; i < people.length; i++) {
  console.log(people[i].name)
}