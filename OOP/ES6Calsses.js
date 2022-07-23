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


/* Another Class example */

class Account {
	constructor(owner, currency, pin) {
		this.owner = owner;
		this.currency = currency;
		this.pin = pin;
		this.movements = [];
		this.locale = navigator.language;

		console.log(`Thanks for opening an account, ${owner}`);
	}

	//* Public interface
	deposit(val) {
		this.movements.push(val)
	}

	withdraw(val) {
		this.deposit(-val)
	}

	approveLoan(val) {
		return true;
	}

	requestLoan(val) {
		if (this.approveLoan(val)) {
			this.deposit(val);
			console.log(`Loan approved`);
		}
	}
}


const acc1 = new Account('Jonas', 'EUR', 11111);

//! acc1.movements.push(250) not using this. Need added new method
acc1.deposit(14);
acc1.withdraw(15)

acc1.requestLoan(1000);
acc1.approveLoan(1000);
console.log(acc1);

