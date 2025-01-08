// Sukurti funkciją, priimančią parametrus pinigai ir valiuta,
// kuri gautą skaičių suformatuoja kaip valiutą.

function padaugintiIsDvieju(skaicius) {
	if (typeof skaicius != "number") {
		console.error("Funkcija padaugintiIsDvieju() priima tik skaičius.");
		return;
	}
	let rezultatas = skaicius * 2;
	// Return raktažodis turi dvi paskirtis: 1. pabaigti funkciją 2. atiduoti rezultatą;
	return rezultatas;
}

const rez = padaugintiIsDvieju("tekstas"); //undefined = neapibrėžtas
console.log(rez);

function padaugintiIsKeturiu(skaicius) {
	let rezultatas = padaugintiIsDvieju(skaicius) * 2;
	return rezultatas;
}
