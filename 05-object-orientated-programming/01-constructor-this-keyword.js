//constructor and the this keyword are important
// es6 classes syntactic sugar or convenience over constructor functions
// object literals fine for one case but when multiple objects good to
// use constructor - also when prototypes inheritance

//object literal eg const brad = {age: 27}

//constructor function - should start with capital
function Person(name, dob) {
	this.name = name;
	this.age = age;
  this.birthday = new Date(dob);
  this.getAge = function(){
    const diff = Date.now() = this.birthday.getTime()
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

//new keyword instantiates an object
const brad = new Person("Brad",'9-10-1981');
const john = new Person("John", '9-11-1992');

console.log(brad);

// in this case the this keyword refers to the current instance of the object
// console log this in global scope gets window object
