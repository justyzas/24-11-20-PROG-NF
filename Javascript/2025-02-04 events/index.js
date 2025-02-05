// const mygtukas = document.querySelector("button"); // vieno elemento selektorius
// mygtukas.addEventListener("click", mygtukoPaspaudimas);

// visų puslapyje egzistuojančių elementų pagal selektorių pasirinkimas
// const mygtukai = document.querySelectorAll("button.manipuliuojantis-mygtukas");

// mygtukai.forEach((mygtukas) => {
// 	mygtukas.addEventListener("click", mygtukoPaspaudimas);
// });
const leistiniSimboliai = "0123456789";

// keydown - suveikia kai mygtukas yra nuspaudžiamas

// document.querySelector("input").addEventListener("keydown", (event) => {
// 	if (event.code === "AltRight") {
// 		if (event.target.type === "password") {
// 			event.target.type = "text";
// 		} else {
// 			event.target.type = "password";
// 		}
// 	}

// 	if (!leistiniSimboliai.includes(event.key)) {
// 		console.log("Nutraukiamas veiksmas");
// 		// Nutraukti įprastą puslapio atoveiksmį
// 		event.preventDefault();
// 		return;
// 	}

// 	console.log(event);
// });

//Kai įvyksta įvesties laukelio pasikeitimas (paspaudžiama ir parašoma reikšmė bei laukelis yra atžymimas)
document.querySelector("input").addEventListener("change", (event) => {
	console.log("Įvesta įvesties laukelio reikšmė");
});

// Reikia pridėti event listenerį, kuris suveikia.
// - kai yra paspaudžiama g raidė - ji paverstų body fono spalvą į žalią.
// - kai yra paspaudžiama w raidė - ji paverstų body fono spalvą į baltą, o tekstą į juodą
// - kai yra paspaudžiama b raidė - ji paverstų body fono spalvą į juodą, o tekstą į baltą

document.body.addEventListener("keydown", (event) => {
	console.log(event);

	if (event.target.tagName !== "BODY") return;

	if (event.key.toLowerCase() == "g") {
		document.body.style.backgroundColor = "green";
		document.body.style.color = "white";
	} else if (event.key.toLowerCase() == "w") {
		document.body.style.backgroundColor = "white";
		document.body.style.color = "black";
	} else if (event.key.toLowerCase() == "b") {
		document.body.style.backgroundColor = "black";
		document.body.style.color = "white";
	}
});
