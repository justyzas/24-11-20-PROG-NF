// Callback funkcija -
// tai funkcija, kuri yra paduodama kitai funkcijai kaip parametras.

const h2 = document.querySelector("h2");

// Event listeneris - Vartotojo veiksmų stebėjimas.
// Vartotojo veiksmai gali būti praktiškai bet kokie (paspaudimai, pelytės pajudinimai, paspaudimo pradžia, pabaiga resize, zoom, kopijavimas ir t.t.)
// Į šiuos veiksmus, reaguojame paduodami atsišaukiančią funkciją.
// Tarsi sakytume, kai įvyks nukopijavimas h2 elementui, atlikime tokį veiksmą.
h2.addEventListener("copy", function () {
	console.log("Ivyko nukopijavimas lietuvisko h2 elemento");
});

// Paskutinis funkcijos parametras - atsišaukianti funkcija - callback. Atsitinkanti prieš return'ą
apskaiciuotiPvm(100, 18, (naujaKaina) => {
	// document.querySelector("h3#lt").innerText = naujaKaina;
	console.log(naujaKaina.toUpperCase());
});

// function atnaujintiLietuviskaKainaPuslapyje(naujaKaina)
// {
//     document.querySelector("h3#lt").innerText = naujaKaina;
// }

function apskaiciuotiPvm(kaina, pvm, callback) {
	const galutineKaina = (kaina * (100 + pvm)) / 100;
	callback(`Galutinė, apskaičiuota kaina yra ${galutineKaina}`);
	return galutineKaina;
	// 21%
	// 18%
}

function atnaujintiVokiskaKainaPuslapyje(naujaKaina) {
	document.querySelector("h3#de").innerText = naujaKaina;
}

const masyvas = [1, 2, 3, 4, 5, 6];
console.log(masyvas.filter((reiksme) => reiksme % 2 !== 0));
