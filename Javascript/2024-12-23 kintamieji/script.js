var dabartiniaiMetai = 2024;
// Tai kas yra tekstas (string)  turi ir tekstinėms eilutėms skirtas funkcijas
var vardas = "Antanas";
var pavarde = "Koriš";
var amzius = 26;

var gimimoMetai = dabartiniaiMetai - amzius;

// Norint sujungti tekstinę informaciją į vieną kintamąjį - naudojame operatorių +
var rezultatas =
	"Mano vardas yra " +
	vardas +
	", o pavardė " +
	pavarde +
	", aš esu gimęs " +
	gimimoMetai +
	" metais";

var rezultatas2 = `Mano vardas yra ${vardas}, o pavardė yra ${pavarde}, aš esu gimęs ${gimimoMetai} metais.`;

console.log(rezultatas);
//Operacijos su tekstu:

// Tekstas didžiosiomis raidėmis gaunamas įvykdžius tekstinei eilutei .toUpperCase() funkciją
console.log(rezultatas.toUpperCase());
// Tekstas mažosiomis raidėmis gaunamas įvykdžius tekstinei eilutei .toLowerCase() funkciją
console.log(rezultatas.toLowerCase());
// Teksto ilgį galime gauti panaudoję teksto savybę .length
console.log(rezultatas.length);
// Jei reikia gauti tam tikrą raidę tekste (pirmoji raidė startuoja ties indeksu 0)
console.log(rezultatas.charAt(0));
console.log(rezultatas.charAt(1));
console.log(rezultatas.charAt(2));
console.log(rezultatas.charAt(3));

// Naudojanti prompt reikia nustatyti prekės pavadinimą, kiekį ir kainą.
// Galutiniame rezultate turi matytis tekstas:
// "Prekės X buvo nupirkta Y vnt. po Z€ kainą. Galutinė kaina: Z1€"

var pavadinimas = prompt("Koks yra jūsų prekės pavadinimas?");
var kiekis = prompt("Kokį kiekį prekės norite nusipirkti?");
var kaina = prompt("Kiek kainuoja viena prekė?");

// Tarpinius rezultatus geriausia saugoti kintamuosiuose - geresniam duomenų valdymui ir švaresniai kodo bazei.
var kainaBePvm = kiekis * kaina;
var galutineKaina = kainaBePvm * 1.21;

var prekiuPirkimoRezultatas = `Prekės ${pavadinimas} buvo nupirkta ${kiekis} vnt. po ${kaina}€ kainą. Kaina be PVM: ${kainaBePvm}€, galutinė kaina: ${galutineKaina}`;

console.log(prekiuPirkimoRezultatas);
