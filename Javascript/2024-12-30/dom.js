var vardas = prompt("Koks yra jusu vardas?");

// Elemento pasirinkimas ir gavimas į kintamąjį
var manoDivas = document.querySelector("#info");
// Elemento vidinio HTML perrašymas
// elementas.innerHTML - keičia vidinę elemento HTML struktūrą
manoDivas.innerHTML = `<b>Sveiki, ${vardas}</b>`;
// elementas.style.color - keičia elemento color savybę
manoDivas.style.color = "red";
// jei css savybė turi brūkšnelių (pvz: margin-top),
// jo pavadinimas JavaScripte įsivardina su camelCase
manoDivas.style.marginTop = "40px";
// document.title - keičia HTML dokumento pavadinimą esantį
// <title></title> tag'e
document.title = `Sveiki, ${vardas}`;
