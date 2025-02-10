// Sukurkite knygų katalogo app.
//  Knygos gaunamos iš API. Sukūrus katalogą, integruoti knygų paieškos laukelį.
//  Atlikti filtraciją pagal kategoriją.
//  Savo nuožiūra stilizuokite atvaizdavimą. Naudoti API nuorodas:
// https://in3.dev/knygos/
// https://in3.dev/knygos/types/

// MVP - Minimal viable product;
// 1. Susikurti knygų filtracijas (paieškos laukelis ir select elementas - pasirinkti kategorijai)
// 2. Sukurti vienos atvaizduojamos knygos HTML
// 3. Gausime iš API knygas ir knygų tipus.
// 4. Pridėti kiekvieno žanro pavadinimą į knygų objektus.
// 5. Sudėti kategorijas į filtracijas (select laukelis)
// 6. Sudėti knygas į HTML
// 7. Sudaryti filtracijų funkncionalumą

function showBooks(books = []) {
	let html = "";

	books.forEach((book) => {
		html += `<div class="accordion-item">
						<h2 class="accordion-header">
							<button
								class="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapse-${book.id}"
								aria-expanded="true"
								aria-controls="collapse-${book.id}"
							>
								${book.title}
							</button>
						</h2>
						<div
							id="collapse-${book.id}"
							class="accordion-collapse collapse"
							data-bs-parent="#books-accordion"
						>
							<div class="accordion-body row row-cols-12">
								<img
									src="${book.img}"
									alt="knygos nuotrauka - ${book.title}"
									class="col-12 col-sm-3 col-lg-2"
									style="max-width: 300px"
								/>
								<div class="col-12 col-sm-9 col-lg-10">
									<p><b>Autorius: </b> <i>${book.author}</i></p>
									<p><b>Kaina: </b> <i>${book.price.toFixed(2)}€</i></p>
									<p><b>Išleidimo data: </b> <i>${new Date(book.time * 1000).toLocaleDateString(
										"lt"
									)}</i></p>
									<p><b>Žanras: </b> <i>${book.type}</i></p>
								</div>
							</div>
						</div>
					</div>`;
	});

	document.querySelector("#books-accordion").innerHTML = html;
}

function showSelectOptions(selectOptions = []) {
	const select = document.querySelector("#knygos-zanro-pasirinkimas");
	let html = "<option selected>Visi žanrai</option>";
	selectOptions.forEach((knygosTipas) => {
		html += `<option>${knygosTipas.title}</option>`;
	});
	select.innerHTML = html;
}
/**
 * # Funkcija, skirta gauti visoms knygoms
 * **Knygos turi tokius laukelius:**
 * - id: number
 * - title: string
 * - author: string
 * - time: number
 * - price: number
 * - type: number
 */
async function getAllBooks() {
	const promise = await fetch("https://in3.dev/knygos/");
	const data = await promise.json();
	return data;
}
/**
 * # Funkcija, skirta gauti visiems knygų tipams
 * **Knygų tipai turi tokius laukelius:**
 * - id: number
 * - title: string
 */
async function getAllBookTypes() {
	const promise = await fetch("https://in3.dev/knygos/types/");
	const data = await promise.json();
	return data;
}

async function main() {
	const promises = [getAllBooks(), getAllBookTypes()];
	const responses = await Promise.all(promises);

	/**
	 * # bookTypes - knygų žanrų masyvas
	 * **Knygos žanras turi tokius laukelius:**
	 * - id: number
	 * - title: string
	 */
	const bookTypes = responses[1]; //[]
	/**
	 * # Funkcija, skirta gauti visoms knygoms
	 * **Knygos yra masyvas iš objektų kurie turi tokius laukelius:**
	 * - id: number
	 * - title: string
	 * - author: string
	 * - time: number
	 * - price: number
	 * - type: string
	 */
	const books = responses[0].map((book) => {
		book.type = bookTypes.find((bookType) => bookType.id == book.type).title; //knygosTipas
		return book;
	});
	showSelectOptions(bookTypes);
	showBooks(books);
	document.querySelector("form").addEventListener("submit", (e) => {
		e.preventDefault();
		//formData - formos duomenys. Objektas su specialiaisiais metodais skirtais gauti formos duomenis
		const formData = new FormData(e.target);

		const name = formData.get("search");
		const category = formData.get("category");

		console.log(name);
		console.log(category);

		const filteredBooks = []; //?
		showBooks(filteredBooks);
	});
}

main();
