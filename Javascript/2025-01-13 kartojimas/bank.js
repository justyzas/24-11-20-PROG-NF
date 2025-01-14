const MINIMALUS_ATLYGINIMAS = 600;

const balansoElementas = document.querySelector("#balansas");
const pajamuElementas = document.querySelector("h1.income");
const islaiduElementas = document.querySelector("h1.outcome");

let balansas = 0;
let pajamosSiMen = 0;
let islaidosSiMen = 0;

balansoElementas.innerHTML = formatCurrency(balansas);
pajamuElementas.innerHTML = formatCurrency(pajamosSiMen);
//3. Jei islaidos buvo didesnės nei 0, priekyje papildomai turi atsirasti "-";
// PVZ: $0.00    $-0.01 (pabaiga 13:26)
if (islaidosSiMen === 0)
	islaiduElementas.innerHTML = formatCurrency(islaidosSiMen);
else islaiduElementas.innerHTML = "-" + formatCurrency(islaidosSiMen);

function formatCurrency(skaicius) {
	let skaiciaiPoKablelio = skaicius.toFixed(2); //"-1000.17"
	if (skaicius < 1000) {
		// return ne tik atiduoda rezultatą, tačiau kartu ir užbaigia funkcijos darbą
		return "$" + skaiciaiPoKablelio;
	}
	let suformatuotasSkaicius =
		skaiciaiPoKablelio.slice(0, -6) + "," + skaiciaiPoKablelio.slice(-6);
	return "$" + suformatuotasSkaicius;
}

function gautiAlga(alga = MINIMALUS_ATLYGINIMAS) {
	balansas += alga;
	balansoElementas.innerHTML = formatCurrency(balansas);
	pajamosSiMen += alga;
	pajamuElementas.innerHTML = formatCurrency(pajamosSiMen);
}

// Įgyvendinti funkciją isleistiPinigus(), kuri
// 1. atnaujins balansą
// 2. atnaujins išlaidas šį mėnesį (pabaiga 14:18)

function isleistiPinigus(prekesPavadinimas, prekesKaina) {
	if (balansas - prekesKaina < 0) {
		alert("Jūs neturite pakankamai pinigų nusipirkti " + prekesPavadinimas);
		return;
	}

	balansas -= prekesKaina;
	islaidosSiMen += prekesKaina;

	if (islaidosSiMen === 0)
		islaiduElementas.innerHTML = formatCurrency(islaidosSiMen);
	else islaiduElementas.innerHTML = "-" + formatCurrency(islaidosSiMen);

	balansoElementas.innerHTML = formatCurrency(balansas);
}
