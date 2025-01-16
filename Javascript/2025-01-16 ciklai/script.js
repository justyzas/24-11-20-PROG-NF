// Reikia sukurti funkciją, kuriai padavus skaičių masyvą,
// reiktų atlikti filtraciją ir palikti tik lyginius skaičius masyve
// ir jį atiduoti iš funkcijos.

const masyvas = [
	1,
	3,
	4,
	9,
	6,
	2,
	1,
	0,
	-44,
	22,
	19,
	2,
	"a",
	true,
	"false",
	[4, 5, 6],
];

function filtruotiNelyginius(masyvas) {
	// Skliausteliai while cikle įtakoja kiek kartų bus kartojama užduotis
	// let index = 0;
	// while (index < masyvas.length) {
	// 	if (masyvas[index] % 2 == 0 || typeof masyvas[index] !== "number") {
	// 		masyvas.splice(index, 1);
	// 	}
	//  index++;
	// }
	// const atfiltruoti = [];
	for (let i = 0; i < masyvas.length; i++) {
		// if (!(masyvas[i] % 2 == 0 || typeof masyvas[i] !== "number")) {
		if (masyvas[i] % 2 == 0 || typeof masyvas[i] !== "number") {
			masyvas.splice(i, 1);
			i--;
			// atfiltruoti.push(masyvas[i])
		}
	}
	// return atfiltruoti;
	return masyvas;

	// tolimesnės komandos...
}
function atrinktiTekstus(masyvas) {
	for (let i = 0; i < masyvas.length; i++) {
		if (typeof masyvas[i] !== "string") {
			masyvas.splice(i, 1);
			i--;
		}
	}
	return masyvas;
}
// Funkcija, kuriai padavus masyvą, būtų gražinama tik kas antra reikšmė.
// Gražinama reikšmė - masyvas, pirmas masyvo elementas - įskaičiuotinas

function gautiKasAntraMasyvoElementa(masyvas) {
	for (let i = 0; i < masyvas.length; i++) {
		masyvas.splice(i, 1);
	}
	return masyvas;
}

function generuotiHTMLSarasa(
	masyvas = ["Elementas1", "Elementas2", "Elementas3"]
) {
	let tekstas = "";
	for (let i = 0; i < masyvas.length; i++) {
		tekstas += `<li>${masyvas[i]}</li>`;
	}

	return `<ul>${tekstas}</ul>`;
}

const manoDivas = document.querySelector("#manoSarasas");
const kasAntrasMasyvoElementas = gautiKasAntraMasyvoElementa([
	"Elementas1",
	"Elementas2",
	"Elementas3",
	"Elementas4",
	"Elementas5",
	"Elementas6",
	"Elementas7",
	"Elementas8",
]);
manoDivas.innerHTML = generuotiHTMLSarasa(kasAntrasMasyvoElementas);
// console.log(filtruotiNelyginius(masyvas));
// console.log(atrinktiTekstus(masyvas));
// console.log(gautiKasAntraMasyvoElementa([2, 3, 4, 5, "tekstas", 7, 8, 9, 10]));
