const prekes = [
	{ barkodas: "4061615651", pavadinimas: "Degtukai", kaina: 0.2 },
	{ barkodas: "4061615652", pavadinimas: "Dantų šepetėlis", kaina: 1.5 },
	{ barkodas: "4061615653", pavadinimas: "Kava", kaina: 4.99 },
	{ barkodas: "4061615654", pavadinimas: "Vandens butelis", kaina: 0.89 },
	{ barkodas: "4061615655", pavadinimas: "Šokoladas", kaina: 1.79 },
	{ barkodas: "4061615656", pavadinimas: "Tualetinis popierius", kaina: 2.5 },
	{ barkodas: "4061615657", pavadinimas: "Makaronai", kaina: 0.99 },
	{ barkodas: "4061615658", pavadinimas: "Ryžiai", kaina: 1.2 },
	{ barkodas: "4061615659", pavadinimas: "Kondicionierius", kaina: 3.5 },
	{ barkodas: "4061615660", pavadinimas: "Šampūnas", kaina: 3.99 },
];

// const atnaujintosPrekes = prekes.map((preke) => ({
// 	barkodas: preke.barkodas,
// 	pavadinimas: preke.pavadinimas,
// 	kaina: preke.kaina,
// 	pvmProcentas: preke.kaina < 1.5 ? 15 : 21,
// 	pvmMokestis: Number(
// 		((preke.kaina * (preke.kaina < 1.5 ? 15 : 21)) / 100).toFixed(2)
// 	),
// }));
const atnaujintosPrekes = [];
prekes.forEach((preke) => {
	// if (preke.kaina < 1.5) {
	// 	preke.pvmProcentas = 15;
	// } else {
	// 	preke.pvmProcentas = 21;
	// }

	//Ternary operatorius - naudojamas vietoje viršuje esančių if'ų. Veikia kaip inline if'as
	preke.pvmProcentas = preke.kaina < 1.5 ? 15 : 21;

	preke.pvmMokestis = Number(
		((preke.pvmProcentas * preke.kaina) / 100).toFixed(2)
	);

	atnaujintosPrekes.push(preke);
});

console.log(atnaujintosPrekes);
