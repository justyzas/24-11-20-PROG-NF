const objektas1 = {};

//reiksmeA ir reiksmeB  -   Objekto parametrai
// 1 ir "Labas"         -   Objekto parametro reikšmė
const objektas2 = { reiksmeA: 1, reiksmeB: "Labas" };

function hey() {}
//Objektas gali laikyti ir kompleksiškas reikšmes
//Objekto funkcijos - Metodai
const objektas3 = {
	name: "Arturas",
	age: 29,
	children: ["Ugne", "Saulius"],
	zmona: { name: "Asta", age: 27 },
	pasakytiLabas() {
		console.log(`${this.name}: 'Labas!'`);
	},
	svestiGimtadieni() {
		this.age++;
		console.log("Iššaunamos fanfaros");
	},
};

objektas3.pasakytiLabas();
console.log(objektas3.age);
objektas3.svestiGimtadieni();
console.log(objektas3.age);
//------------------------------------
//Klasės pagalba, kuriamas objektas pagal šabloną.

class Zmogus {
	// Klasėje konstruktorius apibrėžia objekto pradines reikšmes
	constructor(firstName = "Jonas", lastName = "Jonaitis", age = 20) {
		//this - klasėje naudojamas kaip nuoroda į šios klasės sukurtą objektą
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}

	pasakytiLabas() {
		console.log(`${this.firstName}: 'Labas!'`);
	}
}

const antanas = new Zmogus("Antanas", "Antanaitis", 22);
antanas.firstName = "Antanas";
antanas.pasakytiLabas();

const jonas = new Zmogus();
jonas.pasakytiLabas();

console.log(antanas);
console.log(jonas);

class Staciakampis {
	//Klasės privačių laukų apibrėžimas
	#plotis;
	#aukstis;
	#plotas;
	#perimetras;

	//Konstruktorius - funkcija, pasileidžianti objekto sukūrimo metu
	constructor(plotis = 1, aukstis = 1, matavimoVienetas = "m") {
		if (typeof plotis !== "number") {
			console.error(
				`Kuriant klasę gautas plotis buvo ne skaičius, gauta reikšmė ${plotis}. Vietoje to naudosime skaičių 1`
			);
			plotis = 1;
		}
		if (typeof aukstis !== "number") {
			console.error(
				`Kuriant klasę gautas aukštis buvo ne skaičius, gauta reikšmė ${aukstis}. Vietoje to naudosime skaičių 1`
			);
			aukstis = 1;
		}
		const galimiMatavimoVienetai = ["m", "cm", "mm", "dm", "km"];
		if (!galimiMatavimoVienetai.includes(matavimoVienetas)) {
			console.error(
				`Pateiktas matavimo vienetas neatitiko nei vieno iš galimų variantų: ${galimiMatavimoVienetai.join()}. Todėl naudosime metrus`
			);
			matavimoVienetas = "m";
		}

		this.#plotis = plotis;
		this.#aukstis = aukstis;
		this.matavimoVienetas = matavimoVienetas;

		this.#plotas = aukstis * plotis;
		this.#perimetras = (plotis + aukstis) * 2;
	}

	//Norint gauti privačių objekto laukų duomenis, naudojame get metodus
	get plotis() {
		return this.#plotis;
	}
	get aukstis() {
		return this.#aukstis;
	}
	get plotas() {
		return `${this.#plotas}${this.matavimoVienetas}2`;
	}
	get perimetras() {
		return `${this.#perimetras}${this.matavimoVienetas}`;
	}

	//Norint nustatyti privačių objekto laukų duomenis,
	//(+ papildomai pridėti tarpinę logiką kitų reikšmių apskaičiavimui),
	//naudojame set metodus
	set plotis(naujasPlotis) {
		if (typeof naujasPlotis !== "number")
			return console.error(
				"Pateiktas naujas plotis buvo ne skaičius, gauta reikšmė: " +
					naujasPlotis
			);
		this.#plotis = naujasPlotis;
		this.#plotas = naujasPlotis * this.#aukstis;
		this.#perimetras = (naujasPlotis + this.#aukstis) * 2;
	}
	set aukstis(naujasAukstis) {
		if (typeof naujasAukstis !== "number")
			return console.error(
				"Pateiktas naujas aukštis buvo ne skaičius, gauta reikšmė: " +
					naujasAukstis
			);

		this.#aukstis = naujasAukstis;
		this.#plotas = naujasAukstis * this.#plotis;
		this.#perimetras = (this.#plotis + naujasAukstis) * 2;
	}
}

//Būdas sukurti objektą pagal klasės šabloną
const st1 = new Staciakampis(10, 56, 456);
const st2 = new Staciakampis(17, 2, "km");

console.log(st1);

console.log(st1.plotas);
console.log(st2.plotas);

console.log(st1.perimetras);
console.log(st2.perimetras);
// st1.setAukstis(3);
// st1.asdasd = 5;
// console.log(st1);
