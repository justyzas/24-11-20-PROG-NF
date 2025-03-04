//delete-id - Mygtuko atributas, aprašantis duomens id, kuris turėtų būti ištrintas.
//.button-delete - klasė pasirinkti mygtukams, skirtiems ištrinti įrašus

export function generateProductsHtml(products) {
	return products
		.map((product) => {
			return `
    <div class="p-4 mb-3 bg-light rounded" product-id="${product.id}">
					<p class="title"><b>Pavadinimas</b> <span>${product.title}</span></p>
					<p class="description">
						<b>Aprašymas</b> <span>${product.description}</span>
					</p>
					<p class="price"><b>Kaina</b> <span>${product.price}€</span></p>
					<button class="btn btn-danger button-delete">Ištrinti</button>
					<button class="btn btn-primary button-update">Atnaujinti</button>
				</div>`;
		})
		.join("");
}
