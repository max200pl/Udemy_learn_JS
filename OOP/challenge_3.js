const Car = function (make, speed) {
	this.make = make;
	this.speed = speed;
}

const EV = function (make, speed, charge, chargeTo) {
	Car.call(this, make, speed);
	this.charge = charge;
	this.chargeTo = chargeTo;
}

EV.prototype = Object.create(Car.prototype);

EV.prototype.accelerate = function () {
	this.speed += 20;
	this.charge--;
	console.log(`${this.make} going at ${this.speed}, with a charge of ${this.charge}%`);
}

EV.prototype.brake = function () {
	this.speed -= 5;
	console.log(`${this.make} si going at ${this.speed}`);
}

EV.prototype.chargeBattery = function (chargeTo) {
	this.charge = chargeTo;;
	console.log(`${chargeTo}%`);
}

const carEV1 = new EV("tesla", 120, 20);
carEV1.chargeBattery(20);
carEV1.accelerate();
carEV1.accelerate();
carEV1.brake();

console.dir(EV);

