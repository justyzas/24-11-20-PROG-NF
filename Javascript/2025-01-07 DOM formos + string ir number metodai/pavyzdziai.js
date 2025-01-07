const inputas = document.querySelector("#vardo-ivestis"); // 1. Elementas 2. null
const amziausInput = document.querySelector("#amziaus-ivestis");
const termsCheckbox = document.querySelector("#terms");

function getFormData() {
	// Checkbox įvestis duoda boolean reikšmę (pažymėta/nepažymėta) (true/false) per savybę .checked
	let arSutinkaSuTaisyklemis = termsCheckbox.checked; //true
	console.log(arSutinkaSuTaisyklemis); //true
	if (!arSutinkaSuTaisyklemis) {
		alert(
			"Jūs privalote sutikti su taisyklėmis ir sąlygomis prieš registruojantis"
		);
	}

	let vardas = inputas.value; //Ivesties laukelio reiksmes gavimas
	console.log(vardas);
	let amzius = Number(amziausInput.value); // Amžiaus įvesties laukelio reikšmės gavimas ir konvertavimas į skaičių
	console.log(amzius);
}

let skaicius = "4"; //string

console.log(typeof skaicius); // typeof kintamasis   - duoda tekstine išraiška žinoti, koks yra kintamojo tipas
console.log(skaicius + skaicius);
// Primityvūs kintamųjų tipai
// 1. string (tekstas)
// 2. number (skaičius)
// 3. boolean (tiesa/melas) (true/false)

// skaicius = Number(skaicius); // Number(tekstas)  - konvertuoja kitą kintamojo tipą į skaičių
// skaicius = 1 * skaicius; // Atliekant matematinę operaciją, gali pakisti duomenų tipas į skaičių
skaicius = +skaicius;

console.log(typeof skaicius);
let rezultatas = skaicius + skaicius;
console.log(rezultatas);

// rezultatas = String(rezultatas);
// rezultatas = "" + rezultatas;
// rezultatas = rezultatas.toFixed(0); // skaicius.toFixed() - nurodo konvertuojamo i teksta skaiciaus tiksluma

console.log(rezultatas);
console.log(typeof rezultatas);
