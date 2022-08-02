'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class Workout {
	date = new Date();
	id = (Date.now() + '').slice(-10);

	constructor(coords, distance, duration) {
		this.coord = coords; // [lat, lng]
		this.distance = distance; // in km
		this.duration = duration; // in min
	}
}

class Running extends Workout {
	constructor(coords, distance, duration, cadence) {
		super(coords, distance, duration);
		this.cadence = cadence;
		this.calcPace();
	}

	calcPace() {
		// min/km
		this.pace = this.duration / this.distance;
		return this.pace;
	}
}
class Cycling extends Workout {
	constructor(coords, distance, duration, elevationGain) {
		super(coords, distance, duration);
		this.elevationGain = elevationGain;
		this.calcSpeed();
	}

	calcSpeed() {
		this.speed = this.distance / (this.duration / 60);
		return this.speed
	}
}

const run1 = new Running([29, -12], 5.2, 23, 178);
const cycling1 = new Cycling([29, -12], 23, 95, 522);

console.log(run1, cycling1);

//APPLICATION ARCHITECTURE
class App {
	#map;
	#mapEvent;

	constructor() {
		this._getPosition();
		form?.addEventListener('submit', this._newWorkout.bind(this)); // event listener this -> form 
		inputType?.addEventListener('change', this._toggleElevationField);
	}

	_getPosition() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				this._loadMap.bind(this), // bind return new function
				function () {
					alert('Could not yet your position');
				}
			);
		}
	}

	_loadMap(position) {
		const { latitude } = position.coords;
		const { longitude } = position.coords;
		console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

		const coords = [latitude, longitude]
		this.#map = L.map('map').setView(coords, 22);

		L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(this.#map);

		// Handling clicks on map
		this.#map.on('click', this._showForm.bind(this))
	}

	_showForm(mapE) {
		this.#mapEvent = mapE;
		form?.classList.remove('hidden');
		inputDistance?.focus();
	}

	_toggleElevationField() {
		inputElevation.closest('.form__row')?.classList.toggle('form__row--hidden')
		inputCadence.closest('.form__row')?.classList.toggle('form__row--hidden')
	}

	_newWorkout(e) {
		const validInputs = (...inputs) => inputs.every(inp => Number.isFinite(inp))
		const allPositive = (...inputs) => inputs.every(inp => inp > 0)

		e.preventDefault()
		// Clear input fields
		// Get date from form
		const type = inputType.value;
		const distance = +inputDistance.value;
		const duration = +inputDuration.value
		// Check if data is valid

		// If workout activity running, create running object

		if (type === 'running') {
			const cadence = +inputCadence.value
			// Check if data is valid 

			if (
				// !Number.isFinite(distance) ||
				// !Number.isFinite(duration) ||
				// !Number.isFinite(cadence)

				!validInputs(distance, duration, cadence) ||
				!allPositive(distance, duration, cadence)
			)
				return alert('Inputs have to be positive numbers!');
		}

		// If workout activity cycling, create cycling object

		if (type === 'cycling') {
			const elevation = +inputElevation.value;
			if (
				!validInputs(distance, duration, elevation) ||
				!allPositive(distance, duration, elevation))
				return alert('Inputs have to be positive numbers!');
		}

		// Add new object to workout array

		// Render workout on map as marker
		console.log(this.#mapEvent);
		const { lat, lng } = this.#mapEvent.latlng;

		L.marker([lat, lng])
			.addTo(this.#map)
			.bindPopup(L.popup({
				maxWidth: 250,
				minWidth: 100,
				autoClose: false,
				closeOnClick: false,
				className: "running-popup"
			}))
			.setPopupContent("Workout")
			.openPopup();

		// Render workout on list

		//Hide form + clear input fields

	}

}

const app = new App();



