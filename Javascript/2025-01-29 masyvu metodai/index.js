const masinos = [
	"Audi",
	"Mercedes",
	"BMW",
	"Volkswagen",
	"Toyota",
	"Honda",
	"Ford",
	"Tesla",
	"Volvo",
	"Porsche",
	"Lexus",
];

const countries = [
	{ countryCode: "lt", country: "Lithuania" },
	{ countryCode: "lv", country: "Latvia" },
	{ countryCode: "ee", country: "Estonia" },
	{ countryCode: "pl", country: "Poland" },
	{ countryCode: "de", country: "Germany" },
	{ countryCode: "fr", country: "France" },
	{ countryCode: "es", country: "Spain" },
	{ countryCode: "it", country: "Italy" },
	{ countryCode: "uk", country: "United Kingdom" },
	{ countryCode: "us", country: "United States" },
];

const colors = [
	{ colorCode: "#FF0000", colorName: "Red" },
	{ colorCode: "#00FF00", colorName: "Green" },
	{ colorCode: "#0000FF", colorName: "Blue" },
	{ colorCode: "#FFFF00", colorName: "Yellow" },
	{ colorCode: "#FFA500", colorName: "Orange" },
	{ colorCode: "#800080", colorName: "Purple" },
	{ colorCode: "#FFC0CB", colorName: "Pink" },
	{ colorCode: "#808080", colorName: "Gray" },
	{ colorCode: "#000000", colorName: "Black" },
	{ colorCode: "#FFFFFF", colorName: "White" },
];

const skaiciaiMasyvas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < skaiciaiMasyvas.length; i++) {
// 	const skaicius = skaiciaiMasyvas[i];
// 	console.log(skaicius);
// }

// for (const skaicius of skaiciaiMasyvas) {
// 	console.log(skaicius);
// }

// for (const i of skaiciaiMasyvas) {
// 	const skaicius = skaiciaiMasyvas[i - 1];
// 	console.log(skaicius);
// }

// MASYVO METODAS .forEach

// skaiciaiMasyvas.forEach((skaicius, i) => {
// 	console.log(`indeksas: ${i}\nskaičius:${skaicius}`);
// });

// MASYVO METODAS .map - norint sugeneruoti naują masyvą iš jau esamo masyvo.
const valiutos = skaiciaiMasyvas.map((skaicius) => skaicius.toFixed(2) + "€");

console.log(valiutos);
console.log(skaiciaiMasyvas);

// MASYVO METODAS .filter - norint atfiltruoti masyvo reikšmes.
// Atfiltruosime reikšmes, kurios yra mažesnės nei 5

const atfiltruotosReiksmes = skaiciaiMasyvas.filter(
	(skaicius) => skaicius % 2 === 0 && skaicius <= 6
);
console.log(atfiltruotosReiksmes);

// Filtruojame tekstines reikšmes pagal paieškos raktažodį
const paieskosRaktazodis = "bm";
const atfiltruotosMasinos = masinos.filter((pavadinimas) =>
	pavadinimas.toLowerCase().includes(paieskosRaktazodis.toLowerCase())
);
console.log(atfiltruotosMasinos);

// Filtruojame objektines reikšmes

const atfiltruotosSalys = countries.filter((salis) =>
	salis.country.toLowerCase().includes("e")
);

// MASYVO METODAS .find()
// Atranda vieną reikšmę (pirmą pasitaikiusią) pagal duotą kriterijų

const atrastaSalis = countries.find((salis) => salis.countryCode === "lt");
console.log(atrastaSalis);

const ieskomasSk = skaiciaiMasyvas.find((skaicius) => skaicius > 10);
console.log(ieskomasSk);

// MASYVO METODAS .findIndex()
// Kaip ir find - ieško reikšmės pagal duotą kriterijų. Tačiau vietoje reikšmės
// atiduoda indeksą
const ieskomasIndeksas = skaiciaiMasyvas.findIndex((skaicius) => skaicius > 5);
console.log(ieskomasIndeksas);
