// es6 classes syntactic sugar or convenience over constructor functions
// object literals fine for one case but when multiple objects good to
// use constructor - also when prototypes inheritance

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

const brad = new Person("Brad",'9-10-1981');
const john = new Person("John", '9-11-1992');

console.log(brad);

// in this casethe this keyword refers to the current instance of the object
// console log this in global scope gets window object
