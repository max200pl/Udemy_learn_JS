
// 1. New {} is created;
// 2. function is called, this = {}
// 3. {} linked to prototype

"use strict";
const Person = function (firstName, birthYear) {
	// instance properties
	this.firstName = firstName;
	this.birthYear = birthYear;

	// Never to this 
	this.calcAge = function () {
		console.log(2027 - this.birthYear);
	};
}

const jonas = new Person("Jonas", 1991);
const matilda = new Person('Matilda', 2017); // create instance Person class
const jack = new Person('Jack', 1975)

console.log(matilda, jack);
console.log(jack instanceof Person);