const DOM = {
	uzduotiesPridejimoLaukelis: document.getElementById("task-add-field"),
	uzduotiesPridejimoMygtukas: document.getElementById("task-add-button"),
	nepabaigtuUzduociuSarasas: document.querySelector("#tasks-active"),
	pabaigtuUzduociuSarasas: document.querySelector("#tasks-finished"),
};

const uzduotys = gautiIssaugotasUzduotisLocalStorage();

rodytiUzduotis();
// 1. Sukurti užduočių pridėjimą.
// Užduoties pavadinimas negali būti trumpesnis nei 5 simb.
DOM.uzduotiesPridejimoMygtukas.addEventListener("click", () => {
	const reiksme = DOM.uzduotiesPridejimoLaukelis.value;
	if (reiksme.length >= 5) {
		uzduotys.push({ title: reiksme, isFinished: false });
		issaugotiUzduotisLocalStorage();
		rodytiUzduotis();
	} else alert("Užduoties pavadinimas turėtų būti ne trumpesnis nei 5 simb.");
});

// 2. Sukurti užduočių atvaizdavimą.
// Užduotys turi būti paskirstomos pagal "isFinished" laukelį.
// Jei isFinished yra false - pridėti į aktyvių užduočių sąrašą
// Jei isFinished yra true - pridėti į pabaigtų užduočių sąrašą

function rodytiUzduotis() {
	const nepabaigtosUzduotys = uzduotys.filter(
		(uzduotis) => !uzduotis.isFinished //false
	);
	const pabaigtosUzduotys = uzduotys.filter((uzduotis) => uzduotis.isFinished);

	let nepabaigtuUzduociuHtml = "";
	let pabaigtuUzduociuHtml = "";

	nepabaigtosUzduotys.forEach((nepabaigtaUzduotis) => {
		nepabaigtuUzduociuHtml += `<li>
				<span>${nepabaigtaUzduotis.title}</span>
				<button onclick="istrintiUzduoti('${nepabaigtaUzduotis.title}')">Ištrinti</button>
				<button onclick="pabaigtiUzduoti('${nepabaigtaUzduotis.title}')">Užduotis atlikta</button>
			</li>`;
	});

	pabaigtosUzduotys.forEach((pabaigtaUzduotis) => {
		pabaigtuUzduociuHtml += `<li>
				<span>${pabaigtaUzduotis.title}</span>
				<button onclick="istrintiUzduoti('${pabaigtaUzduotis.title}')">Ištrinti</button>
			</li>`;
	});

	DOM.nepabaigtuUzduociuSarasas.innerHTML = nepabaigtuUzduociuHtml;
	DOM.pabaigtuUzduociuSarasas.innerHTML = pabaigtuUzduociuHtml;
}

// 3. Ištrinti užduotį
function istrintiUzduoti(title) {
	console.log("Trinama užduotis pagal pavadinimą: ", title);
	const uzduotiesIndeksas = uzduotys.findIndex(
		(uzduotis) => title.toLowerCase() == uzduotis.title.toLowerCase()
	);
	if (uzduotiesIndeksas !== -1) {
		uzduotys.splice(uzduotiesIndeksas, 1);
		issaugotiUzduotisLocalStorage();
		rodytiUzduotis();
	} else
		console.error(
			"Trinamos užduoties pavadinimas užduočių masyve buvo nerastas"
		);
}

// 4. Atnaujinti užduoties statusą

function pabaigtiUzduoti(title) {
	const uzduotis = uzduotys.find(
		(uzduotis) =>
			title.toLowerCase() == uzduotis.title.toLowerCase() &&
			uzduotis.isFinished === false
	);

	uzduotis.isFinished = true;
	issaugotiUzduotisLocalStorage();
	rodytiUzduotis();
}

//1. Išsaugoti dabar turimas užduotis localStorage. 5min 14:07
function issaugotiUzduotisLocalStorage() {
	localStorage.setItem("uzduotys", JSON.stringify(uzduotys));
}

//2. Gauti jau išsaugotas užduotis
function gautiIssaugotasUzduotisLocalStorage() {
	const visosUzduotys = localStorage.getItem("uzduotys"); //string arba null
	//Ternary operatorius (?)  ->  salyga ? reiksmeJeiTiesa : reiksmeJeiMelas;
	return !visosUzduotys ? [] : JSON.parse(visosUzduotys);

	// Alternatyvus - ilgesnis užrašymas
	// if (visosUzduotys==null) return [];
	// const uzduociuMasyvas = JSON.parse(visosUzduotys);
	// return uzduociuMasyvas;
}
