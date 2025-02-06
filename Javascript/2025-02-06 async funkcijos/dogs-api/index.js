const select = document.querySelector("select#veisles-pasirinkimas");
// 1. Gauti visas veisles pagal dokumentacijoje nurodytą nuorodą.
const veisles = []; //0ms
fetch("https://dog.ceo/api/breeds/list/all")
	.then((x) => x.json())
	.then(gautiVisasVeisles); //1ms -> 200ms

console.log(veisles); //2ms

// 2. Sutvarkyti iš serverio gautą objektą taip, kad gaunamos veislės būtų viename sąraše.
function gautiVisasVeisles(data) {
	console.log(data);
	const keys = Object.keys(data.message);

	for (const key of keys) {
		if (data.message[key].length == 0) {
			veisles.push(key);
		} else {
			for (const poveisle of data.message[key])
				veisles.push(`${key} ${poveisle}`);
		}
	}
	pridetiPasirinkimus();
}

// 3. Visas veisles atvaizduoti <select></select> HTML elemente, kaip pasirinkimus
function pridetiPasirinkimus() {
	veisles.forEach((veisle) => {
		select.innerHTML += `<option value="${veisle.replace(
			" ",
			"/"
		)}">${veisle}</option>`;
	});
}
// 4. Pasirinkus naują reikšmę, automatiškai turi būti kreipiamasi į serverį, dinamiškai generuojant kreipimosi adresą taip, kad būtų gaunama nuotrauka pagal šuns veislę.

select.addEventListener("change", () => {
	const reiksme = select.value;
	console.log(`https://dog.ceo/api/breed/${reiksme}/images`);
	fetch(`https://dog.ceo/api/breed/${reiksme}/images`)
		.then((data) => data.json())
		.then((data) => {
			document.querySelector("#dog-image").src = data.message[0];
		});
	// 5. Po select elementu atvaizduoti šuns nuotrauką ir parašyti jo veislę;
	document.querySelector("#veisle").innerText = reiksme.replace("/", " ");
});
