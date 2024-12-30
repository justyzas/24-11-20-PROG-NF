// let piniguKiekis = 10;

// let bandelesKaina = 2;
// let kiekis = prompt("Kiek norite nusipirkti bandeliu?");

// let bandeliuKaina = bandelesKaina * kiekis;

// if (bandeliuKaina > piniguKiekis) {
// 	console.log("Bandelių nusipirkti negalite, nepakanka pinigų");
// } else {
// 	piniguKiekis = piniguKiekis - bandeliuKaina;
// 	console.log(`Štai jūsų bandelės, ačiū kad pirkote`);
// 	console.log(`Naujas balansas: ${piniguKiekis}€`);
// }

// Žinoma tai, kad 1.00EUR = 1.04$

// 1. iškris prompt, kuris klaus kiek pinigų žmogus nori konvertuoti į USD iš EUR
// 2. Jei konvertuojama mažiau nei 100EUR  taikomas 4% komisinis mokestis
//    Jei konvertuosime 100 EUR arba daugiau, taikysime 3% komisinis mokestis
//    Jei konvertuosime 500 EUR arba daugiau, taikysime 2% komisinį mokestį
//    Jei konvertuosime 1000 EUR arba daugiau, taikysime 1% komisinį mokestį.
// 3. Jei klientas yra VIP - pritaikyti 30% nuolaidą komisiniam mokesčiui
// 4. Atspausdinti, kiek dolerių gausime iš keityklos.

const EURUSD = 1.04;
const vip = true;

const vipH1 = document.querySelector("#ar-vip");
if (vip) {
	vipH1.innerHTML = "VIP panelė";
} else {
	vipH1.innerHTML = "";
}

const keiciamasEurKiekisElement = document.querySelector(
	"#keiciamas-eur-kiekis"
);
const komisinioMokescioProcentasElement = document.querySelector(
	"#komisinio-mokescio-procentas"
);

let keiciamasEurKiekis = prompt("Kiek eurų keisite į $?");
keiciamasEurKiekisElement.innerHTML = `${keiciamasEurKiekis}€`;
let atsakymas; // undefined

if (keiciamasEurKiekis < 100) {
	//99.9999
	let komisinis = 4;
	let komisinisSantykis = (100 - komisinis) / 100; //0.96
	let komisinisSantykisVip = (100 - komisinis * 0.7) / 100; //0.972

	if (vip) {
		komisinioMokescioProcentasElement.innerHTML = (komisinis * 0.7).toFixed(1);
		atsakymas = keiciamasEurKiekis * komisinisSantykisVip * EURUSD;
	} else {
		komisinioMokescioProcentasElement.innerHTML = komisinis.toFixed(1);
		atsakymas = keiciamasEurKiekis * komisinisSantykis * EURUSD;
	}
} else if (keiciamasEurKiekis < 500) {
	let komisinis = 3;
	let komisinisSantykis = (100 - komisinis) / 100;
	let komisinisSantykisVip = (100 - komisinis * 0.7) / 100;
	if (vip) {
		komisinioMokescioProcentasElement.innerHTML = (komisinis * 0.7).toFixed(1);
		atsakymas = keiciamasEurKiekis * komisinisSantykisVip * EURUSD;
	} else {
		komisinioMokescioProcentasElement.innerHTML = komisinis.toFixed(1);
		atsakymas = keiciamasEurKiekis * komisinisSantykis * EURUSD;
	}
} else if (keiciamasEurKiekis < 1000) {
	let komisinis = 2;
	let komisinisSantykis = (100 - komisinis) / 100;
	let komisinisSantykisVip = (100 - komisinis * 0.7) / 100;
	if (vip) {
		komisinioMokescioProcentasElement.innerHTML = (komisinis * 0.7).toFixed(1);
		atsakymas = keiciamasEurKiekis * komisinisSantykisVip * EURUSD;
	} else {
		komisinioMokescioProcentasElement.innerHTML = komisinis.toFixed(1);
		atsakymas = keiciamasEurKiekis * komisinisSantykis * EURUSD;
	}
} else {
	let komisinis = 1;
	let komisinisSantykis = (100 - komisinis) / 100;
	let komisinisSantykisVip = (100 - komisinis * 0.7) / 100;
	if (vip) {
		komisinioMokescioProcentasElement.innerHTML = (komisinis * 0.7).toFixed(1);
		atsakymas = keiciamasEurKiekis * komisinisSantykisVip * EURUSD;
	} else {
		komisinioMokescioProcentasElement.innerHTML = komisinis.toFixed(1);
		atsakymas = keiciamasEurKiekis * komisinisSantykis * EURUSD;
	}
}

console.log(komisinis);
console.log(atsakymas);
