const Person = function (firstName, birthYear) {
	this.firstName = firstName;
	this.birthYear = birthYear;
}

Person.prototype.calcAge = function () { // added method to prototype class 
	console.log(2027 - this.birthYear)
}

const Student = function (firstName, birthYear, course) {
	Person.call(this, firstName, birthYear)
	this.course = course;
}

/* Student.prototype = Object.create(Person.prototype) */
//* Linking prototypes 
//* Student inheritance Person
//* Object.create return empty object {};

Student.prototype.introduce = function () {
	console.log(` My name is ${this.firstName} and i study ${this.course}`);
}

const mike = new Student('Mile', 2020, 'Computer Science');
mike.introduce();
/* mike.calcAge(); */

console.dir(Student);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
