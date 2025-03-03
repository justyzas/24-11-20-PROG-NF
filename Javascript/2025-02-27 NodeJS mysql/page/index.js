import { generateProductsHtml } from "./generate-products.js";

// ------------INICIALIZAVIMAS-------------
const promise = await fetch("http://localhost:3069/products");
const products = await promise.json();

document.querySelector("#all-products").innerHTML =
	generateProductsHtml(products);

// ------------Event listeneriai-------------

const productDeleteButtons = document.querySelectorAll(
	"#all-products .button-delete"
);
productDeleteButtons.forEach((deleteButton) => {
	deleteButton.addEventListener("click", (event) => {
		//  event.target  - ištrynimui skirtas mygtukas
		const deleteId = event.target.attributes.getNamedItem("delete-id").value;
		deleteProduct(deleteId);
	});
});

async function deleteProduct(id) {
	const answer = confirm("Ar tikrai norite ištrinti šį produktą?");
	console.log(answer);
	const promise = await fetch(`http://localhost:3069/products/${id}`, {
		method: "DELETE",
	});
}
