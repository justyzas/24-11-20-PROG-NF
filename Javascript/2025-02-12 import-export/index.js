// import "kelias/iki/modulio" sužadina tame modulyje esantį kodą.
import "./modules/defaultStyle.js";
import "./modules/objektai-masyvai.js";
// default funkcijos importas neturi riestinių skliaustų ir gali būti įvardinamas bet kokiu pavadinimu
// Jei importuojame ir default bei kitus exportus, defaultas rašomas be riestinių skliaustelių, o kiti import'ai
// riestiniuose skliaustuose
// importuojamas dalykas gali būti pervadinimas su as raktažodžio pagalba.

// import instrukcijos, { suma as sum, vidurkis, PI } from "./modules/math.js";

const masyvas = [1, 2, 3, 4, 5];

// instrukcijos();

// console.log(sum(masyvas));
// console.log(vidurkis(masyvas));

// import * as pavadinimas importuoja viską iš duoto modulio. Vėliau importuojamos reikšmės yra pasiekiamos per
//pavadinimas.funkcija()
import instrukcijos, * as math from "./modules/math.js";

// console.log(math);
// ---2 variantai, kaip panaudoti/gauti default export'ą-----------
// instrukcijos();
// math.default();
//---------------

//Įprastų export'ų panaudojimas
// console.log(math.suma(masyvas));
// console.log(math.vidurkis(masyvas));
// console.log(math.apskritimoPlotas(2));

// math.printEinamasisSkaicius();
// math.setEinamasisSkaicius(12);
// math.printEinamasisSkaicius();
