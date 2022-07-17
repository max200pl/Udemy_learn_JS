
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

/* ========  How using prototype inheritance =========== */

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

console.log(jonas.__proto__); // Object.prototype (top of prototype chain) 
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__); // null
// So that's because object.prototype is usually the top of the scope chain

console.dir(Person.prototype.constructor);

const arr = [1, 3, 5, 67, 8, 9, 9, 3]; // new Array === []
// Is is indeed created by the array constructor
// So essentially array === object 
// Array.prototype.filter()
console.log(arr.__proto__ === Array.prototype); // true

Array.prototype.unique = function () {
	return [...new Set(this)];
}

console.log(arr.unique()); // added new method in prototype in Array object // bad idea


const h1 = document.querySelector("h1")
console.dir(h1);

console.dir(X => x + 1)
