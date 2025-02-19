import path from "path";
import { log } from "./logger.js";
// Sinchroninio failų sistemos modulio importavimas
import fs from "node:fs";
// Pagrindinė projekto direktorija pasiekiama per komandą process.cwd();
console.log(process.cwd());

// const aplankoKelias = path.dirname(`${process.cwd()}/katalogas/`);
// console.log(aplankoKelias);

const aplankoKelias = path.join(
	process.cwd(),
	"katalogas",
	"katalogiukas",
	"failas.js",
	"kitas failas"
);

// Gali būti su join sukurtas ir neteisingas kelias
console.log(aplankoKelias);

// dirname - pasirūpina, kad būtų naudojamas tik teisingas kelio segmentas
console.log(path.dirname(aplankoKelias));

// Norint "pritempti" nurodytą kelią nežinomu formatu prie OS suprantamo kelio.
console.log(path.normalize("path//to//dirname"));

// Norint sužinoti ar duotas kelias parametre yra absoliutus (prasidedantis nuo C:/...)
console.log(path.isAbsolute(aplankoKelias));

// Sinchroninis būdas kreiptis į failų sistemą (blokuojantis veiksmų seką elgesys)

// \n - naujos eilutės simbolis
// \t - tabuliacinė žymė
// fs.writeFileSync(failoKelias, tekstas)  -
// sukuria failą su duotu tekstu arba perrašo jau egzistuojančio failo turinį
log("Sukurtas failas.txt, jo turinys: 'Hello world!'");
fs.writeFileSync("failas.txt", "Hello world!\n\tHelloha");

// fs.appendFileSync(failoKelias,tekstas) -
// sukuria failą su duotu tekstu arba papildo jau egzistuojančio failo turinį
fs.appendFileSync("failas.txt", "\nNext info");

// Failo perskaitymas
const gautasTekstoBufferis = fs.readFileSync("log.txt");
const gautasTekstas = String(gautasTekstoBufferis);
console.log(gautasTekstas);

// Katalogo arba failo ištrynimas papildomas parametras, norint ištrinti per prievartą
fs.rmSync("failas.txt", { recursive: true, force: true });

// fs.renameSync(keliasFailo, naujasKeliasFailo) - pervadina failą
fs.renameSync("katalogasA/failas.txt", "katalogasA/kitoksFailoPavadinimas.txt");

// Asinchroninis būdas kreiptis į failų sistemą (neblokuojantis veiksmų seką elgesys)
