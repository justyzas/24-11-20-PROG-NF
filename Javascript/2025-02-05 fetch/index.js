// Kreipimasis į serverius.
// API - Application programming interface
// Asinchroninės funkcijos užtrunka šiek tiek laiko
// const knyguSarasas = document.querySelector("#knygos");

// fetch("https://in3.dev/knygos/")
// 	.then((metadata) => metadata.json())
// 	.then(apdorotiAtsakyma); //3500ms

// function apdorotiAtsakyma(data) {
// 	fetch("https://in3.dev/knygos/types/")
// 		.then((metadata) => metadata.json())
// 		.then((tipai) => {
// 			console.log("tipai: ", tipai);
// 			const knyguHtmlDivai = document.querySelectorAll("#knygos>div");
// 			console.log(knyguHtmlDivai);
// 			knyguHtmlDivai.forEach((knygosDiv) => {
// 				const knygosTipoId =
// 					knygosDiv.attributes.getNamedItem("knygos-type").value; //string
// 				const kategorija = tipai.find((type) => type.id == knygosTipoId); // {id: ?, title: ?}
// 				console.log(kategorija);
// 				knygosDiv.innerHTML += `<p><b>Kategorija:</b> <i>${kategorija.title}</i></p>`;
// 			});
// 		}); //3201ms
// 	console.log("Gauti tikslūs duomenys iš serverio");
// 	console.log(data);
// 	data.forEach((knygosObj) => {
// 		knyguSarasas.innerHTML += `<div knygos-type="${knygosObj.type}">
//         <img src="${knygosObj.img}" />
//         <h3>${knygosObj.title}</h3>
//         <p>${knygosObj.price.toFixed(2)}€</p>
//         <p><b>Autorius:</b> <i>${knygosObj.author}</i></p>
//         </div><hr>`;
// 	});
// }

// console.log("Toliau vyksta darbas....");
// console.log("Toliau vyksta darbas....");
// console.log("Toliau vyksta darbas....");
// console.log("Toliau vyksta darbas....");

async function main() {
	const responseKnygos = await fetch("https://in3.dev/knygos/");
	const knygos = await responseKnygos.json();
	const responseKnyguTipu = await fetch("https://in3.dev/knygos/types/");
	const knyguTipai = await responseKnyguTipu.json();

	const knyguSarasas = document.querySelector("#knygos");

	console.log(knygos);

	knygos.forEach((knygosObj) => {
		knyguSarasas.innerHTML += `<div knygos-type="${knygosObj.type}">
    <img src="${knygosObj.img}" />
    <h3>${knygosObj.title}</h3>
    <p>${knygosObj.price.toFixed(2)}€</p>
    <p><b>Autorius:</b> <i>${knygosObj.author}</i></p>
    </div><hr>`;
	});

	const knyguHtmlDivai = document.querySelectorAll("#knygos>div");
	knyguHtmlDivai.forEach((knygosDiv) => {
		const knygosTipoId = knygosDiv.attributes.getNamedItem("knygos-type").value; //string
		const kategorija = knyguTipai.find((type) => type.id == knygosTipoId); // {id: ?, title: ?}
		knygosDiv.innerHTML += `<p><b>Kategorija:</b> <i>${kategorija.title}</i></p>`;
	});

	console.log(knyguTipai);
}
main();
