
// 1. New {} is created;
// 2. function is called, this = {}
// 3. {} linked to prototype

"use strict";
const Person = function (firstName, birthYear) {
	// instance properties
	this.firstName = firstName;
	this.birthYear = birthYear;

	// Never to this 
	/* this.calcAge = function () {
		console.log(2027 - this.birthYear);
	}; */
}

const jonas = new Person("Jonas", 1991);
const matilda = new Person('Matilda', 2017); // create instance Person class
const jack = new Person('Jack', 1975)

console.log(matilda, jack);
console.log(jack instanceof Person);

// First each and every function in js, automatically has a property called prototype.
// And that includes, constructor functions.
// Every object created by a certain constructor function.
// Object get access to all the methods and properties.
// That we define on the constructors prototype property. 
console.log(Person.prototype);
Person.prototype.calcAge = function () { // added method to prototype class 
	console.log(2027 - this.birthYear)
}

jack.calcAge() // ->  prototype inheritance
matilda.calcAge() // -> prototype inheritance

console.log(Person.prototype.isPrototypeOf(jack)); // true 
console.log(Person.prototype.isPrototypeOf(matilda)); // true 
console.log(Person.prototype.isPrototypeOf(Person)); // false

Person.prototype.species = "Homo Sapiens";
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));