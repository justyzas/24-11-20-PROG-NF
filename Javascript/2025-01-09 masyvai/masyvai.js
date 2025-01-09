// Masyvų samprata.   Array  -> Lietuviškai "Masyvas"

// Immutable - jos tipas nesikeičia
const vardai = ["Jolanta", "Austėja", "Marius", "Juozas", "Justinas", "Rokas"]; //tuščio masyvo sukūrimas
// Konkretaus vardo pasiekimas naudojantis indeksu
console.log(vardai[1]);

//Tuščio masyvo sukūrimas
const tusciasSarasas = [];
console.log(tusciasSarasas);

// Kitoks masyvo sukūrimo būdas:
const kitasSarasas = new Array("pirmas", "antras", "trečias");
console.log(kitasSarasas);

// Paskutinysis masyvo elementas:
const paskutinysisVarduElementas = vardai[vardai.length - 1];
console.log(paskutinysisVarduElementas);

// Sąrašo atvaizdavimas naudojantis HTML elementu: (vardai būna atskiriami kableliais pagal nutylėjimą)
const sarasoElementas = document.querySelector("#sarasas");
sarasoElementas.innerHTML = vardai;

// Masyvų metodai.

// masyvas.push() - Į masyvo galą įterpiama nauja reikšmė
vardai.push("Tadas");

// masyvas.pop() - pašalina paskutinį elementą iš masyvo galo, kartu pašalinus atiduoda elemento reikšmę
vardai.pop();

// masyvas.shift() - pašalina pirmąjį elementą iš masyvo priekio
vardai.shift();

// masyvas.splice(pozicija, salinamasKiekis, naujasElementas) - Įterpia arba pašalina elementus iš masyvo;
vardai.splice(1, 0, "Petras", "Darius", "Angelė");
//Jei nurodomi tik 2 parametrai šioje funkcijoje - yra pašalinamas pirmame parametre pateikto indekso elementas
// Antrasis šios funkcijos parametras nurodo šalinamų elementų iš masyvo kiekį
vardai.splice(5, 1); //Elemento pašalinimas iš masyvo

console.log(vardai);
// masyvas.toString() - skirtas paversti masyvą į tekstą
const masyvasKaipTekstas = vardai.toString();
console.log(masyvasKaipTekstas);

// masyvas.join() - Konvertuoja masyvą į tekstą, tik turime papildomą galimybę pasirinkti atskyriklį
const sujungtasMasyvas = "<li>" + vardai.join("</li><li>") + "</li>";
sarasoElementas.innerHTML = sujungtasMasyvas;
console.log(sujungtasMasyvas);

// tekstas.split() - konvertuoja tekstą į masyvą su pasirinktu atskyrikliu
const sugeneruotasMasyvas = sujungtasMasyvas.split(" -> ");
console.log(sugeneruotasMasyvas);

// masyvas.slice() - paima tam tikrą masyvo dalį pagal indeksus.
const pirmiTrysVardai = vardai.slice(0, 3);
console.log(pirmiTrysVardai);

const paskutiniaiTrysVardai = vardai.slice(-3);
console.log(paskutiniaiTrysVardai);

// nuo antrojo vardo iki priešpaskutinio vardo
const customVardai = vardai.slice(1, -1);
console.log(customVardai);

vardai.push("Ąžuolas");
// masyvas.sort() - išrikiuoja elementus nuo A-Z. Lietuviškos raidės eina į patį galą. Keičia originalaus masyvo išrikiavimą
vardai.sort();
console.log(vardai);

// masyvas.reverse() - Išrikiuoja elementus iš priešingos pusės nei buvo, keičia originalaus masyvo išrikiavimą;
vardai.reverse();
console.log(vardai);

// masyvas.includes() - Atranda elementus masyve pagal reikšmę. Jei toks elementas egzistuoja duoda true reikšmę, priešingu atveju - false
vardai.push("TADAS");

// masyvas.includes() reikalauja tikslios reikšmės (didžiosios raidės turi įtaką). Todėl jis suveiks jei parametre bus pateikta tiksli reikšmė
if (vardai.includes("TADAS")) {
	console.log("Masyve yra TADAS");
} else {
	console.log("Masyve TADO nėra");
}
// Norint ieškoti vardo nepriklausomai nuo raidžių dydžio:
if (vardai.join(",").toLowerCase().split(",").includes("tadas")) {
	console.log("Masyve yra Tadas");
} else {
	console.log("Masyve Tado nėra");
}

// masyvas.indexOf(reiksme) - atiduoda masyvo indeksą, elemento kuris pagal reikšmę buvo įvestas parametre.
console.log(vardai.indexOf("TADAS"));
// Jei masyvo elementas nerandamas, gražina reikšmę -1
console.log(vardai.indexOf("TADAs"));
