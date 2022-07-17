const Car = function (make, speed) {
	this.make = make;
	this.speed = speed;
}

Car.prototype.accelerate = function () {
	this.speed += 10;
	console.log(`${this.make} si going at ${this.speed}`);
}

Car.prototype.brake = function () {
	this.speed -= 5;
	console.log(`${this.make} si going at ${this.speed}`);
}

const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 95);

car1.accelerate()
car2.accelerate()