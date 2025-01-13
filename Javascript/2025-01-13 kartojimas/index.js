// var - Naudojamas deklaruoti kint. senesnėse naršyklėse.
// kintanti reikšmė ir tipas.

// if (true) {
// 	var x = 8;
// 	x = "tekstas";
// 	console.log(x);
// }
// console.log(x);

// let - kintančioms reikšmės
// if (true) {
// 	let x = 8;
// 	x = "tekstas";
// 	console.log(x);
// }
// console.log(x);
// const - nekintančioms reikšmėms.

// const x = 545; //Nekeičiama kintamojo reikšmė

// console.log(x.toExponential());
// Jei nėra būtinas kintamasis, galime rašyti statinę reikšmę vietoje kintamojo
// console.log((545).toExponential());

// Metodai gali būti panaudojami vienas po kito, siekiant gauti šių metodų rezultatą
// console.log("tekstas".toUpperCase().split(""));

// Kintamieji gali deklaruoti savo reikšmę jau ją skaičiuojant vietoje
// let secondsInDay = 60 * 60 * 24; //Kintamojo deklaravimas apskaičiuojant reikšmę
// console.log(secondsInDay);
// Kintamųjų reikšmė gali būti apskaičiuojama su kitais kintamaisiais ir statinėmis reikšmėmis
// let secondsInWeek = secondsInDay * 7; //Kiek sekundžių yra savaitėje;

// Kintamieji gali būti kitų dviejų ar daugiau kintamųjų skaičiavimo rezultatas
// const x = secondsInDay * secondsInWeek * Math.round(7.5);

// let x = 4;

// Kintamojo keitimas panaudojant jo paties buvusią reikšmę
// x = x + 2; //6
// Priskyrimas su matematiniu veiksmu
// x += 2; //8
// x **= 2; //64
// ++ - increment (padidina duotą skaičių per 1)  -- - decrement (pamažina duotą skaičių per 1)
// x++; //65
// x--; //64
// console.log(x);

let kreipinys = "Algirdai";
let pasisveikinimas = "Labas";
// let tekstas = pasisveikinimas + " " + kreipinys; // "Hello Algirdai"
// Template literals sintaksė;

// let tekstas = `${pasisveikinimas} ${kreipinys}!`; //"Hello Algirdai!"
// tekstas += " Kaip jūs laikotės?"; //"Hello Algirdai! Kaip jūs laikotės?"

// let planet = "earth";
// let star = "sun";
// let satellite = "moon";
// let age = "4.54 billion years";

// let scienceText = `The planet ${planet} is the third planet from the ${star}. ${planet} is the only astronomical object known to harbor life. According to radiometric dating and other sources of evidence, ${planet} formed over {{age}} ago. {{planet}}'s gravity interacts with other objects in space, especially the ${star} and the {{satellite}}, ${planet}'s only natural satellite.`;

// scienceText = scienceText.replaceAll("{{planet}}", planet);
// scienceText = scienceText.replaceAll("{{star}}", star);
// scienceText = scienceText.replaceAll("{{satellite}}", satellite);
// scienceText = scienceText.replaceAll("{{age}}", age);

// console.log(planet.length); //5
// console.log(planet[0]); //e
// console.log(planet.charAt(1)); //a
// console.log(planet.charCodeAt(0)); //e => 101 (Simbolio skaičius pagal ASCII lentelę)
// console.log("earth".slice(0, 3).slice(1)); //"earth" -> "ear" -> "ar"
// console.log(planet.slice(2)); //"earth" -> "rth"
// console.log(planet.slice(-2)); //"earth" -> "th"
// console.log(planet.slice(-3, -1)); //"earth" -> "rt"

// if (planet.includes("rth")) {
// 	console.log("rth exists in " + planet);
// }

// 2 - skaičiukas nuo kurio startuoja ieškomas tekstas
// -1 - rezultatas, kai teksto paieška buvo nesėkminga
// const index = planet.indexOf("ear");
// console.log(index);

// Funkcijos yra kodo dalys, kurios gali būti perpanaudojamos.
// Funkcijos deklaravimas - tai dar nėra jos paleidimas
// Parametrų eiliškumas turi reikšmę (pagal funkcijos iškvietimą)
function isvesti5ConsoleLogus(
	x,
	paskutinis,
	parametras1,
	parametras2 = "defaultas",
	parametras3
) {
	console.log(x);
	console.log(x);
	console.log(x);
	console.log(x);
	console.log(paskutinis);
	console.log(parametras1); //"a"
	console.log(parametras2); //"defaultas"
	console.log(parametras3); //undefined
}
const x = 4;
isvesti5ConsoleLogus("Paskutinis", x, "a", "Nedefaultas");

const balansoElementas = document.querySelector("#balansas");

let dabartinisBalansas = 0;

function gautiAlga(alga = 500) {
	dabartinisBalansas += alga; //0 + undefined = NaN
	balansoElementas.innerHTML = dabartinisBalansas;
}

const prekes = ["Batonas", "Odekolonas", "Dantų šepetėlis", "Pirties vanta"];
const kainos = [87, 47.25, 24.25, 28.25];
function pirktiPreke(prekesPavadinimas) {
	// Paieška pagal elemento pavadinimą
	const prekesIndeksas = prekes.indexOf(prekesPavadinimas); //-1 jei neras
	const prekesKaina = kainos[prekesIndeksas];
	if (prekesIndeksas === -1) return console.error("Prekė buvo nerasta");
	else {
		// Atimti pinigų
		dabartinisBalansas -= prekesKaina;
		balansoElementas.innerHTML = dabartinisBalansas;
	}
}
