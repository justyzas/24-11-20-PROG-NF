// await - naudojamas asinchroninėms operacijoms atlikti ir sulaukti kol ši operacija įvyks
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
