// Timeout'ai - tai yra uždelsto veikimo funkcijos.

// setTimeout(callback, uzdelsimas)

const timeoutId = setTimeout(function () {
	console.log("pica atvežta");
}, 2000);

const timeoutId2 = setTimeout(function () {
	console.log("pica atvežta");
}, 5000);

console.log(timeoutId);
console.log(timeoutId2);

// Timeout'o atšaukimas
// clearTimeout(id);
// clearTimeout(timeoutId);

// Intervalai - pasikartojančios funkcijos kas tam tikrą laiką.
// setInterval(callback, uzdelsimas)
const intervalId = setInterval(() => {
	console.log("Vykdomas kintamųjų patikrinimas");
}, 2000);

// clearInterval(intervalId);
