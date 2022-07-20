
/**
 * * Still the idea of prototype inheritance
 * * There are no prototype properties involved
 * * No constructor functions and no new operator using 
 * * We set the prototype objects manually
 * * This is actually the least used way of implementing prototype inheritance.
 */

/* Object.create */

const PersonProto = {
	calcAge() {
		console.log(2037 - this.birthYear);
	}
}
// steven will be linked to this PersonProto object, which will be ist prototype
const steven = Object.create(PersonProto)
steven.name = "Steven";
steven.birthYear = "2020";
steven.calcAge()