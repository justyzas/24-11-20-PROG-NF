const menesiai = ["Sausis", "Vasaris", "Kovas"];
const savaitesDienos = [
	"Sekmadienis",
	"Pirmadienis",
	"Antradienis",
	"Trečiadienis",
	"Ketvirtadienis",
	"Penktadienis",
	"Šeštadienis",
];
// Dabartinė data
const date = new Date();

let year = date.getFullYear();
let month = date.getMonth(); //0
let dayOfWeek = date.getDay(); //0 - sekmadienis, 1 - pirmadienis
let dayOfMonth = date.getDate();

let menesioPavadinimas = menesiai[month];
let savaitesDienosPavadinimas = savaitesDienos[dayOfWeek];

console.log(year);
console.log(month);
console.log(menesioPavadinimas);
console.log(savaitesDienosPavadinimas);
console.log(dayOfMonth);

// setTimeout(() => {
// 	console.log(date);
// }, 1000);
// console.log(date);

const currentTimeElement = document.querySelector("#current-time");

setInterval(() => {
	const date = new Date();
	let year = date.getFullYear();
	let month = date.getMonth(); //0
	let dayOfWeek = date.getDay(); //0 - sekmadienis, 1 - pirmadienis
	let dayOfMonth = date.getDate();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();

	let menesioPavadinimas = menesiai[month];
	let savaitesDienosPavadinimas = savaitesDienos[dayOfWeek];
	let suformatuotosSekundes = seconds.toString().padStart(2, 0);
	let suformatuotosMinutes = minutes.toString().padStart(2, 0);
	let suformatuotosValandos = hours.toString().padStart(2, 0);
	let laikas = `${suformatuotosValandos}:${suformatuotosMinutes}:${suformatuotosSekundes}`;
	currentTimeElement.innerText = `${year} metai ${menesioPavadinimas}, ${dayOfMonth}d., ${savaitesDienosPavadinimas}, ${laikas}`;
}, 1000);
