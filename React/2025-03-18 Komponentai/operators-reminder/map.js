const a = [1, 2, 3, 4, 5];

const b = a.map((item) => item * 2);

console.log(b); // [2, 4, 6, 8, 10]
console.log(a); // [1, 2, 3, 4, 5]

const c = b.map((item) => item / 4);
console.log(c); // [0.5, 1, 1.5, 2, 2.5]

function getFullName(item) {
	return `${item.firstname} ${item.lastname}`;
}
const people = [
	{ firstname: "Malcom", lastname: "Reynolds" },
	{ firstname: "Kaylee", lastname: "Frye" },
	{ firstname: "Jayne", lastname: "Cobb" },
];

const fullNames1 = people.map(getFullName);
const fullNames2 = people.map((item) => `${item.firstname} ${item.lastname}`);
console.log(fullNames1); // ["Malcom Reynolds", "Kaylee Frye", "Jayne Cobb"]
console.log(fullNames2); // ["Malcom Reynolds", "Kaylee Frye", "Jayne Cobb"]

fullNames1.sort();
console.log(fullNames1); // ["Jayne Cobb", "Kaylee Frye", "Malcom Reynolds"]

fullNames1.reverse();
console.log(fullNames1); // ["Malcom Reynolds", "Kaylee Frye", "Jayne Cobb"]
