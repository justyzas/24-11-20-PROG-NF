// Objektai - tai reikšmių rinkinys, apibūdinantis vieną objektą

const algirdas = {
	// Primityvios reiksmes - number, string, boolean
	vardas: "Algirdas",
	amzius: 27,
	seimyninePadetis: "Vedęs ir neturi vaikų",
	arSusituokes: true,
	arTuriVaiku: false,
	// Kompleksinės reikšmės - object, array, function
	augintiniai: [
		{ vardas: "Knopke", veisle: "Spicas" },
		{ vardas: "Bulma", veisle: "Pekinas" },
	],
	zmona: {
		vardas: "Asta",
		amzius: 26,
		seimyninePadetis: "Vedusi ir neturi vaikų",
	},
};

console.log(algirdas);

function minIrMaxReiksmes(masyvas) {
	let minReiksme = masyvas[0];
	let maxReiksme = masyvas[0];

	for (let i = 0; i < masyvas.length; i++) {
		if (masyvas[i] < minReiksme) minReiksme = masyvas[i];
		if (masyvas[i] > maxReiksme) maxReiksme = masyvas[i];
	}

	return { min: minReiksme, max: maxReiksme };
}

console.log(minIrMaxReiksmes([0, 1, 2, 3, 4, 8, -2]));
