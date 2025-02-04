const paieskosLaukelis = document.querySelector(".paieskos-laukelis");

const sarasas = document.querySelector("#produktai");

const produktai = [
	"Alus",
	"Bergamontas",
	"Citrina",
	"Dantų krapštukai",
	"Fedora",
	"Gertuve",
	"Pieno kokteilis",
];

produktai.forEach((produktas) => {
	//
	sarasas.innerHTML += `<li>${produktas}</li>`;
});

function filtruotiPagalPaieska(paieska) {
	const atfiltruotiProduktai = produktai.filter((produktas) =>
		produktas.toLowerCase().includes(paieska.toLowerCase())
	);

	sarasas.innerHTML = "";

	atfiltruotiProduktai.forEach((produktas) => {
		sarasas.innerHTML += `<li>${produktas}</li>`;
	});
}

paieskosLaukelis.addEventListener("keyup", (event) => {
	console.log("Vyksta filtracija");
	filtruotiPagalPaieska(event.target.value);
});
