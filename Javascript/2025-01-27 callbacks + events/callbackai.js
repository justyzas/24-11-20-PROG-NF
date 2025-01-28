// Reikia pridėti event listener'į mygtukui, esančiam HTML'e,
// Paspaudus mygtuką, turime matyti alert pranešimą "Neliesk manęs!"
// 13:50

// 1. gausime elemento kintamąjį

const button = document.querySelector("img");

// 2. pridėsime event listenerį
// Pridėti įvykio stebėjimą

button.addEventListener("mouseup", function () {
	console.log("Neužstok saulės");
});
