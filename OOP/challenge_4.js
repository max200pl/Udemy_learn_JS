class CarCl {
	constructor(make, speed) {
		this.make = make;
		this.speed = speed;
	}

	accelerate() {
		this.speed += 20;
		console.log(`${this.make} going at ${this.speed}`);
		return this
	}

	brake() {
		this.speed -= 5;
		console.log(`${this.make} is going at ${this.speed} km/h`);
		return this
	}

	get speedUS() {
		return this.speed / 1.6;
	}

	set speedUS(speed) {
		this.speed = speed * 1.6;
	}

}

class EVCl extends CarCl {
	#charge;

	constructor(make, speed, charge) {
		super(make, speed);
		this.charge = charge;
	}

	chargeBattery(el) {
		this.#charge = el;
		return this
	}

	accelerate() {
		this.speed += 20;
		this.#charge--;
		console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}`);
		return this
	}

	brake() {
		this.speed -= 5;
		console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`);
		return this
	}
}

const carEL1 = new EVCl('Rival', 120, 23);

carEL1.accelerate().chargeBattery(10).brake().accelerate().chargeBattery(100);

console.log(carEL1.speedUS);


