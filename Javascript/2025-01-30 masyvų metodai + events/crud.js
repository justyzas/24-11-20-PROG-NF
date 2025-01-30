const DOM = {
	uzduotiesPridejimoLaukelis: document.getElementById("task-add-field"),
	uzduotiesPridejimoMygtukas: document.getElementById("task-add-button"),
	nepabaigtuUzduociuSarasas: document.querySelector("#tasks-active"),
	pabaigtuUzduociuSarasas: document.querySelector("#tasks-finished"),
};

const uzduotys = [
	{
		title: "pabaigta užduotis",
		isFinished: true,
	},
];

rodytiUzduotis();
// 1. Sukurti užduočių pridėjimą.
// Užduoties pavadinimas negali būti trumpesnis nei 5 simb.

DOM.uzduotiesPridejimoMygtukas.addEventListener("click", () => {
	const reiksme = DOM.uzduotiesPridejimoLaukelis.value;
	if (reiksme.length >= 5) uzduotys.push({ title: reiksme, isFinished: false });
	else alert("Užduoties pavadinimas turėtų būti ne trumpesnis nei 5 simb.");
	rodytiUzduotis();
});

// 2. Sukurti užduočių atvaizdavimą.
// Užduotys turi būti paskirstomos pagal "isFinished" laukelį.
// Jei isFinished yra false - pridėti į aktyvių užduočių sąrašą
// Jei isFinished yra true - pridėti į pabaigtų užduočių sąrašą

function rodytiUzduotis() {
	const nepabaigtosUzduotys = uzduotys.filter(
		(uzduotis) => !uzduotis.isFinished
	);
	const pabaigtosUzduotys = uzduotys.filter((uzduotis) => uzduotis.isFinished);

	let nepabaigtuUzduociuHtml = "";
	let pabaigtuUzduociuHtml = "";
	nepabaigtosUzduotys.forEach((nepabaigtaUzduotis) => {
		nepabaigtuUzduociuHtml += `<li>
				<span>${nepabaigtaUzduotis.title}</span>
				<button onclick="istrintiUzduoti('${nepabaigtaUzduotis.title}')">Ištrinti</button>
				<button>Užduotis atlikta</button>
			</li>`;
	});
	pabaigtosUzduotys.forEach((pabaigtaUzduotis) => {
		pabaigtuUzduociuHtml += `<li>
				<span onclick="istrintiUzduoti('${pabaigtaUzduotis.title}')">${pabaigtaUzduotis.title}</span>
				<button>Ištrinti</button>
			</li>`;
	});

	DOM.nepabaigtuUzduociuSarasas.innerHTML = nepabaigtuUzduociuHtml;
	DOM.pabaigtuUzduociuSarasas.innerHTML = pabaigtuUzduociuHtml;
}
function istrintiUzduoti(title) {
	console.log("Trinama užduotis pagal pavadinimą: ", title);
	const uzduotiesIndeksas = uzduotys.findIndex(
		(uzduotis) => title.toLowerCase() == uzduotis.title.toLowerCase()
	);
	if (uzduotiesIndeksas !== -1) {
		uzduotys.splice(uzduotiesIndeksas, 1);
		rodytiUzduotis();
	} else
		console.error(
			"Trinamos užduoties pavadinimas užduočių masyve buvo nerastas"
		);
}
