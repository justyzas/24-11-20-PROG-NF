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
	"LUPRA",
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

// 1. Reikia sukurti masyvą, kur visos mašinos pasibaigia raide A. (5 min)
// 13:48
const paieska = "A";
// .includes()
// .endsWith() - true/false

const atfiltruotosMasinos = masinos.filter((auto) =>
	auto.toLowerCase().endsWith(paieska.toLowerCase())
);
console.log(atfiltruotosMasinos);

// 2. reikia sukurti masyvą mašinų,
// kur visi pavadinimai būtų  mažosiomis raidėmis => .map() (5min.) (14:00)

const masinosDidziosiomis = masinos.map((v) => v.toUpperCase());
console.log(masinosDidziosiomis);

// 3. Jei Šalis prasideda su L arba su U reikšme,
// reikia šias reikšmes išskirti į naują masyvą. (6 min) (14:10)

const atfiltruotosSalys = countries
	.filter(
		(salis) => salis.country.startsWith("L") || salis.country.startsWith("U")
	)
	.map((salis) => {
		return {
			saliesKodas: salis.countryCode.toUpperCase(),
			pavadinimas: salis.country,
		};
	});

console.log(atfiltruotosSalys);
