/**
 * * Classes are just a special type of functions 
 * * Classes are not hoisted
 * * First-class citizen
 * * Classes are executed in strict mode
 * * Not yet support real data privacy and encapsulation
 * * 
 */

//* C++ or Java properties are usually called fields. 

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


/* Private class Fields and Methods */

//* So in this proposal, there are actually four different kings:
// * Public fields
// * Private fields -> not accessible in the outside
// * Public methods
// * Privet methods 
// * (there is also the static )


class Account {
	//Public fields (instances)
	locale = navigator.language;  // public instance field

	// Private fields (instances)
	#movements = []; // not supposed to be touched outside of the class
	#pin;

	constructor(owner, currency, pin) {
		this.owner = owner;
		this.currency = currency;
		this.#pin = pin;
		// protected property
		// this._movements = []; 
		// this.locale = navigator.language;

		console.log(`Thanks for opening an account, ${owner}`);
	}

	//* Public interface/methods
	getMovements() {
		return this.#movements;
	}

	deposit(val) {
		this.#movements.push(val)
	}

	withdraw(val) {
		this.deposit(-val)
	}

	requestLoan(val) {
		if (this.#approveLoan(val)) {
			this.deposit(val);
			console.log(`Loan approved`);
		}
	}

	static helper() { //* not be available on all the instances, but only on the class itself.
		console.log('This class');
	}

	// Private methods

	#approveLoan(val) {
		return true;
	}

}


const acc1 = new Account('Jonas', 'EUR', 11111);

//! acc1.#movements.push(250) not using this. Need added new method
acc1.deposit(14);
acc1.withdraw(15)

acc1.requestLoan(1000);
//acc1.#approveLoan(1000);// error
console.log(acc1.getMovements());
console.log(acc1);

Account.helper()