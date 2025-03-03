export function generateProductsHtml(products) {
	return products
		.map((product) => {
			return `
    <div class="p-4 mb-3 bg-light rounded">
					<p><b>Pavadinimas</b> ${product.title}</p>

					<p>
						<b>Aprašymas</b> ${product.description}
					</p>
					<p><b>Kaina</b> ${product.price}€</p>
					<button class="btn btn-danger button-delete" delete-id="${product.id}">Ištrinti</button>
					<button class="btn btn-primary">Atnaujinti</button>
				</div>`;
		})
		.join("");
}
