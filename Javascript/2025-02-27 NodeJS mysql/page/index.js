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
		// const deleteId = event.target.parentElement.attributes.getNamedItem("product-id").value;
		const button = event.target;
		const buttonParentDiv = button.parentElement;
		const divAttributes = buttonParentDiv.attributes;
		const deleteId = divAttributes.getNamedItem("product-id").value;

		deleteProduct(deleteId);
	});
});

async function deleteProduct(id) {
	const answer = confirm("Ar tikrai norite ištrinti šį produktą?");
	if (!answer) return;

	const promise = await fetch(`http://localhost:3069/products/${id}`, {
		method: "DELETE",
	});
	if (promise.ok) deleteProductFromHtml(id);
	else {
		const response = await promise.json();
		console.error(response);
		alert("Įvyko klaida, produktas neištrintas.");
	}
}

function deleteProductFromHtml(id) {
	const productDiv = document.querySelector(`[product-id="${id}"]`);
	productDiv.remove();
}

const productUpdateButtons = document.querySelectorAll(
	"#all-products .button-update"
);

productUpdateButtons.forEach((updateButton) => {
	updateButton.addEventListener("click", (event) => {
		console.log("Atnaujinimas sužadintas");
		const button = event.target;
		const parent = button.parentElement;
		const parentAttributes = parent.attributes;
		const updateId = parentAttributes.getNamedItem("product-id").value;

		enterProductEditMode(updateId);
	});
});

function enterProductEditMode(id) {
	// 1. Gauti produkto duomenis iš HTML
	const productDetails = getProductDetails(id);
	// 2. Ištrinti visus .title, .description bei .price elementuose esančius span
	deleteProductSpans(id);
	// 3. Pridėti įvesties laukelius naudojantis 1. gautais duomenimis
	generateInputsForProduct(id, productDetails);
	// IDĖJA 4. Atnaujinti atnaujinimo mygtuką - Padaryti jo tekstą į "Išsiūsti duomenis"
	// 4. Išsiūsti duomenis, atšaukti mygtukų sukūrimas
	createSaveAndCancelButtons(id, productDetails);
	// 5. Pridėti event listenerius šiems mygtukams
}
function getProductDetails(id) {
	const productDiv = document.querySelector(`[product-id="${id}"]`);

	const productTitleSpan = productDiv.querySelector("p.title > span");
	const productDescriptionSpan = productDiv.querySelector(
		"p.description > span"
	);
	const productPriceSpan = productDiv.querySelector("p.price > span");

	const product = {
		title: productTitleSpan.textContent,
		price: Number(productPriceSpan.textContent.replace("€", "")),
		description: productDescriptionSpan.textContent,
	};
	return product;
}
function deleteProductSpans(id) {
	const productDiv = document.querySelector(`[product-id="${id}"]`);

	const productTitleSpan = productDiv.querySelector("p.title > span");
	const productDescriptionSpan = productDiv.querySelector(
		"p.description > span"
	);
	const productPriceSpan = productDiv.querySelector("p.price > span");
	productTitleSpan.remove();
	productDescriptionSpan.remove();
	productPriceSpan.remove();
}
function generateInputsForProduct(id, productDetails) {
	const productDiv = document.querySelector(`[product-id="${id}"]`);

	const productTitle = productDiv.querySelector("p.title");
	const productDescription = productDiv.querySelector("p.description");
	const productPrice = productDiv.querySelector("p.price");

	const inputElementTitle = document.createElement("input");
	const inputElementPrice = document.createElement("input");
	const inputElementDescription = document.createElement("input");

	inputElementTitle.name = "title";
	inputElementPrice.name = "price";
	inputElementDescription.name = "description";

	inputElementTitle.type = "text";
	inputElementPrice.type = "number";
	inputElementDescription.type = "text";

	inputElementPrice.min = "0";
	inputElementPrice.max = "999999.99";

	inputElementTitle.className = "form-control";
	inputElementPrice.className = "form-control";
	inputElementDescription.className = "form-control";

	inputElementTitle.value = productDetails.title;
	inputElementPrice.value = productDetails.price;
	inputElementDescription.value = productDetails.description;

	productTitle.appendChild(inputElementTitle);
	productDescription.appendChild(inputElementDescription);
	productPrice.appendChild(inputElementPrice);
}
function createSaveAndCancelButtons(id, productDetails) {
	const buttonSave = document.createElement("button");
	// TODO: išsiaiškinti, kodėl neužsideda margin
	buttonSave.className = "btn btn-success mx-1 button-save";
	buttonSave.innerText = "Išsaugoti";

	const buttonCancel = document.createElement("button");
	buttonCancel.className = "btn btn-secondary button-cancel";
	buttonCancel.innerText = "Atšaukti";
	buttonCancel.addEventListener("click", () => {
		deleteAllInputs(id);
		createProductData(id, productDetails);
		deleteProductButtons(id);
	});

	buttonSave.addEventListener("click", async () => {
		const newProduct = {};
		["title", "description", "price"].forEach((name) => {
			newProduct[name] = document.querySelector(`input[name="${name}"]`).value;
		});
		newProduct.price = Number(newProduct.price);
		const promise = await fetch(`http://localhost:3069/products/${id}`, {
			method: "PUT",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(newProduct),
		});
		if (promise.ok) {
			deleteAllInputs(id);
			deleteProductButtons(id);
			createProductData(id, newProduct);
		} else {
			alert("Produkto atnaujinimas nepavyko");
		}
	});
	const productDiv = document.querySelector(`[product-id="${id}"]`);
	productDiv.append(buttonSave, buttonCancel);
}
function deleteAllInputs(id) {
	const inputParents = ["title", "description", "price"];
	inputParents.forEach((parentClass) => {
		document
			.querySelector(`[product-id="${id}"]>p.${parentClass}>input`)
			.remove();
	});
}
function createProductData(id, product) {
	const titleSpan = document.createElement("span");
	titleSpan.innerText = product.title;
	document.querySelector(`[product-id="${id}"] p.title`).append(titleSpan);

	const descriptionSpan = document.createElement("span");
	descriptionSpan.innerText = product.description;
	document
		.querySelector(`[product-id="${id}"] p.description`)
		.append(descriptionSpan);

	const priceSpan = document.createElement("span");
	console.log(product);
	priceSpan.innerText = Number(product.price).toFixed(2) + "€";
	document.querySelector(`[product-id="${id}"] p.price`).append(priceSpan);
}

function deleteProductButtons(id) {
	["button-cancel", "button-save"].forEach((className) => {
		document.querySelector(`[product-id="${id}"] button.${className}`).remove();
	});
}
