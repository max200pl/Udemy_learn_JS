class Car {
	constructor(name, speed) {
		this.name = name;
		this.speed = speed;
	}

	get speedUs() {
		return this.speed / 1.6;
	}

	set spedUS(speed) {
		this._spedUS = speed * 1.6;
		console.log(`${this._spedUS}mi/h`);
	}

	speedE() {
		return console.log(`${this.speed}km/h`);;
	}
}

const car1 = new Car("Ford", 12);
console.log(car1);
car1.speedE();
car1.spedUS = 120;



