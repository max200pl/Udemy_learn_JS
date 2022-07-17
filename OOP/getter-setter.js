/**
 * * Getter and setters are basically functions
 * * Added into prototype: property and method when using get or set method 
 */

const account = {
	owner: 'jonas',
	movements: [200, 530, 120],

	get latest() {
		return this.movements.slice(-1).pop();
	},

	set latest(mov) {
		this.movements.push(mov);
	}
}
console.log(account.latest);
account.latest = 50; // we prepend any property set value 
console.log(account.movements);
