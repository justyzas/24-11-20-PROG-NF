const productCreationForm = document.getElementById("product-creation-form");

productCreationForm.addEventListener("submit", async (event) => {
	event.preventDefault();

	// console.log(event);

	// Iš formos gauti duomenims paprastesniu būdu - FormData objektas
	const formData = new FormData(event.target);

	// JSON duomenų išsiuntimas serveriui
	const json = {
		title: formData.get("product-name"),
		price: Number(formData.get("product-price")),
		description: formData.get("product-description"),
	};
	const promise = await fetch("http://localhost:3069/products/", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(json),
	});
	const response = await promise.json();

	//Redirectinimas į kitą puslapį
	// if (promise.ok) {
	// 	window.location.href = "http://127.0.0.1:5500/page/";
	// }

	// Formos duomenų ištrynimas
	event.target.reset();

	// Konkrečių formos įvesties laukelių reikšmių gavimas
	// console.log(typeof formData.get("product-name"));
	// console.log(typeof formData.get("product-price"));
	// console.log(typeof formData.get("product-description"));

	// Hipotetinė situacija, jei turime checkbox laukelį.
	// console.log(formData.get("accept-terms") === "on"); // 'on'|'off'
});
