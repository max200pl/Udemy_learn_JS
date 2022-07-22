/* Inheritance between classes */
// * //USING Constructor function
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

// * //USING Constructor function

/**
 * * Need the extent keywords and we need the super function
 * * 
 */

class PersonCL { // is actually a class declaration 
	constructor(fullName, birthYear) {
		this.fullName = fullName;
		this.birthYear = birthYear;
	}
	// Method will be added to .prototype property
	// Instance method 
	calcAge() {
		console.log(2037 - this.birthYear);
	}

	get age() {
		return 30;
	}

	// Set a property that already exist;
	set fullName(name) {
		if (name.includes(' ')) this._fullName = name;
		else alert(`${name} is not a full name!`)
	}

	get fullName() {
		return this._fullName;
	}


	//static method 
	static hey() {
		console.log("Hey there");
		console.log(this);
	}
}

class StudentCL extends PersonCL {
	constructor(fullName, birthYear, course) {
		//Always need to happen first!
		super(fullName, birthYear) // Person.call(this, fullName, birthYear )
		this.course = course;
	}

	introduce() {
		console.log(` My name is ${this.fullName} and i study ${this.course}`);
	}

	calcAge() {
		console.log(`I'm ${2037 - this.birthYear} years old, but as a student I feel more like`);
	}
}

const martha = new StudentCL('Martha Jones', 2012, 'Computer Science');
martha.introduce()
martha.calcAge();


