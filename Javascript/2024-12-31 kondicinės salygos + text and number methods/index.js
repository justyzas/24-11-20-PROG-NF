const pirmoKauliukoElementas = document.querySelector("#first-dice-number");
const antroKauliukoElementas = document.querySelector("#second-dice-number");

const pirmoKauliukoLyginisElementas = document.querySelector(
	"#first-dice .is-even"
);
const antroKauliukoLyginisElementas = document.querySelector(
	"#second-dice .is-even"
);
const pirmoKauliukoTrukstamasSkElementas = document.querySelector(
	"#first-dice .diff-between-6"
);
const antroKauliukoTrukstamasSkElementas = document.querySelector(
	"#second-dice .diff-between-6"
);

function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let iskritesAkiuSkaicius = rand(1, 6); //1-6
// "Iškrito kauliukas - 5"
mestiKauliuka1();

console.log("ANTRO KAULIUKO DUOMENYS");

let iskritesAkiuSkaiciusAntrasBandymas = rand(1, 6);
console.log(`Iškrito kauliukas - ${iskritesAkiuSkaiciusAntrasBandymas}`);
if (iskritesAkiuSkaiciusAntrasBandymas == 6) {
	console.log("Va bank!");
} else if (iskritesAkiuSkaiciusAntrasBandymas == 1) {
	console.log("Whoops!");
}

let antrasLyginisArNelyginis;
if (iskritesAkiuSkaiciusAntrasBandymas % 2 == 0) {
	antrasLyginisArNelyginis = "Lyginis";
} else {
	antrasLyginisArNelyginis = "Nelyginis";
}
console.log(antrasLyginisArNelyginis);
antroKauliukoLyginisElementas.innerHTML = antrasLyginisArNelyginis;

if (iskritesAkiuSkaicius + iskritesAkiuSkaiciusAntrasBandymas == 12) {
	alert("Vienas iš 36!");
}

pirmoKauliukoElementas.innerHTML = iskritesAkiuSkaicius;
antroKauliukoElementas.innerHTML = iskritesAkiuSkaiciusAntrasBandymas;

// pirmoKauliukoElementas.style.color = "green";

if (iskritesAkiuSkaicius > iskritesAkiuSkaiciusAntrasBandymas) {
	pirmoKauliukoElementas.style.color = "green";
	antroKauliukoElementas.style.color = "red";
} else if (iskritesAkiuSkaicius < iskritesAkiuSkaiciusAntrasBandymas) {
	antroKauliukoElementas.style.color = "green";
	pirmoKauliukoElementas.style.color = "red";
} else {
	antroKauliukoElementas.style.color = "orange";
	pirmoKauliukoElementas.style.color = "orange";
}

pirmoKauliukoTrukstamasSkElementas.innerHTML = 6 - iskritesAkiuSkaicius;
antroKauliukoTrukstamasSkElementas.innerHTML =
	6 - iskritesAkiuSkaiciusAntrasBandymas;

function mestiKauliuka1() {
	//  Duomenų generavimas, papildomi apskaičiavimai
	iskritesAkiuSkaicius = rand(1, 6);
	console.log("PIRMO KAULIUKO DUOMENYS");
	console.log(`Iškrito kauliukas - ${iskritesAkiuSkaicius}`);

	if (iskritesAkiuSkaicius == 6) {
		console.log("Va bank!");
	} else if (iskritesAkiuSkaicius == 1) {
		console.log("Whoops!");
	}

	if (iskritesAkiuSkaicius % 2 == 0) {
		pirmasLyginisArNelyginis = "Lyginis";
	} else {
		pirmasLyginisArNelyginis = "Nelyginis";
	}

	// Duomenų ekrane atnaujinimas
	pirmoKauliukoElementas.innerHTML = iskritesAkiuSkaicius;
	pirmoKauliukoLyginisElementas.innerHTML = pirmasLyginisArNelyginis;
	pirmoKauliukoTrukstamasSkElementas.innerHTML = 6 - iskritesAkiuSkaicius;
}
// function mestiKauliukus()
// {
// 	mestiKauliuka1();
// 	mestiKauliuka2();
// }
