/**
 * * Classes are just a special type of functions 
 * * Classes are not hoisted
 * * First-class citizen
 * * Classes are executed in strict mode
 */

// class expression
const PersonCl = class { }

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

const jessica = new PersonCL("Jessica Dvandva", 1996);
console.log(jessica);

jessica.calcAge();

console.log(jessica.__proto__ === PersonCL.prototype); //true

PersonCL.prototype.greet = function () {
	console.log(`Hey ${this.fullName}`);
}

jessica.greet()

const walter = new PersonCL("Walter White", 2021);

PersonCL.hey();

