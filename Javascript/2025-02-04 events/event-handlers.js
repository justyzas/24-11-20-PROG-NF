function mygtukoPaspaudimas(event) {
	console.log(event);
	// event.target - suinicijavęs įvykį elementas
	const mygtukas = event.target;

	const kitoElementoSelektorius = mygtukas.attributes.elementoSelektorius.value;

	document.querySelector(kitoElementoSelektorius).innerText = "Aš gyvas!";
}
