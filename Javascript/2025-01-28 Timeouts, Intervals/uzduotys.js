const uzsakymoMygtukas = document.querySelector("#uzsakymas");
const atsaukimoMygtukas = document.querySelector("#uzsakymo-atsaukimas");

let uzsakymoNr, atsaukimoMygtukoTimeoutId;

atsaukimoMygtukas.disabled = true;

uzsakymoMygtukas.addEventListener("click", uzsakytiPica);
atsaukimoMygtukas.addEventListener("click", atsauktiUzsakyma);

function uzsakytiPica() {
	alert("Pica sėkmingai užsakyta");

	uzsakymoMygtukas.disabled = true;
	atsaukimoMygtukas.disabled = false; //0.5ms

	//setTimeout - tai yra komanda, kuri užsako, kad po 10sek. būtų įvykdyta funkcija
	uzsakymoNr = setTimeout(() => {
		alert("Pica atvažiavo!");
		uzsakymoMygtukas.disabled = false;
	}, 10000);

	atsaukimoMygtukoTimeoutId = setTimeout(() => {
		atsaukimoMygtukas.disabled = true;
	}, 5000);

	console.log("Funkcijos pabaiga");
}

function atsauktiUzsakyma() {
	uzsakymoMygtukas.disabled = false;
	atsaukimoMygtukas.disabled = true; //0.5ms
	console.log("Užsakymas atšauktas");
	clearTimeout(uzsakymoNr);
	clearTimeout(atsaukimoMygtukoTimeoutId);
	console.log(atsaukimoMygtukoTimeoutId, uzsakymoNr);
}
