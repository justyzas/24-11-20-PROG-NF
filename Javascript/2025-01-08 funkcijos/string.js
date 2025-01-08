let tekstas = "Hello {name}. Hey {name}, nice to meet you";

console.log(tekstas);
// tekstas.length - atiduoda teksto simbolių kiekį
console.log(tekstas.length);
// tekstas.charAt(i) arba tekstas[i] - atiduoda simbolį, pateiktą i pozicijoje
// console.log(tekstas.charAt(3));
console.log(tekstas[3]);

// Šis kodas neveiks! tačiau ir neišmes klaidos;
// tekstas[0] = "A";
// console.log(tekstas);

// tekstas.replace(ieskomasTekstas, pakeičiamasTekstas);
// Ši funkcija ieško ieskomasTekstas parametro originaliame tekste
// ir pakeičia kitu raktažodžiu - pakeičiamasTekstas reikšme

// tekstas.replace - pakeičia pirmą pasitaikiusį ieškomą tekstą
// tekstas.replaceAll - pakeičia visus pasitaikiusius ieškomus tekstus

// tekstas.replace("{name}", "Andrius") - paleidus tokią funkciją - originalus tekstas nepasikeis
// tekstas = tekstas.replace("{name}", "Andrius");
tekstas = tekstas.replaceAll("{name}", "Andrius");
console.log(tekstas);

// Teksto karpymo metodai (funkcijos)

let tekstas2 = "Obuolių_Muškietininkai";
// tekstas.slice(nuoIndekso, ikiIndekso) -  Paima tam tikrą teksto dalį, nepakeisdamas originalios reikšmės
let tekstoDalis = tekstas2.slice(0, 7); //Obuolių
console.log(tekstoDalis);

// Pateikus tik pirmąjį parametrą, nuo pradžios būna praleidžiamas toks simbolių kiekis, koks nurodytas parametre
let text = "Apple, Banana, Kiwi";
let part = text.slice(7);
console.log(part);

// Raidžių padidinimas/pamažinimas
let tekstasDidziosiomis = text.toUpperCase();
let tekstasMazosiomis = text.toLowerCase();

console.log(tekstasDidziosiomis);
console.log(tekstasMazosiomis);

// capitalize("tekstas") -> Tekstas

function capitalize(text) {
	//"mama"
	return text.replace(text[0], text[0].toUpperCase());
}

console.log(capitalize("vieną kartą, girioje....."));

// Teksto paieškos metodai:
let tekstas3 = "vieną kartą, girioje..... tą kartą visi nuėjo ramiai miegoti.";
console.log(tekstas3);
// indexOf() - ieško teksto indekso tekste
let pozicija = tekstas3.indexOf("katra"); //-1 atiduoda tokiu atveju, jei simbolių seka buvo neatrasta
console.log(pozicija);

if (tekstas3.indexOf("kartą") != -1) {
	console.log("Tekstas 'kartą' buvo atrastas");
} else {
	console.log("Tekstas 'kartą' buvo neatrastas");
}

// lastIndexOf()
// lastIndexOf daro tą patį, kaip ir indexOf, tik ieško simbolių sekų nuo galo

// includes() //true/false
// includes ieško teksto tekste, ir jei randa, gauname true reikšmę. Priešingu atveju gauname false reikšmę
let tekstas4 = "Jūsų šalis yra: Lietuva";

let arLietuviai = tekstas4.includes("Lietuva"); //true/false

if (arLietuviai) {
	if (tekstas4.startsWith("Mūsų šalis")) {
		console.log("mes esame Lietuviai!");
	} else {
		console.log("jūs esate Lietuviai!");
	}
} else if (tekstas4.includes("Lenkija")) {
	if (tekstas4.startsWith("Mūsų šalis")) {
		console.log("mes esame Lenkai!");
	} else {
		console.log("jūs esate Lenkai!");
	}
} else {
	if (tekstas4.startsWith("Mūsų šalis")) {
		console.log("Mes ir patys nežinom kas mes esam");
	} else {
		console.log("Jūs ir patys nežinot kas jūs esate");
	}
}
// startsWith() - ieško teksto pradžioje. Jei toks tekstas pradžioje yra - duoda true reikšmę, priešingu atveju false
// endsWith() - ieško teksto pabaigoje. Jei toks tekstas pabaigoje yra - duoda true reikšmę, priešingu atveju false
