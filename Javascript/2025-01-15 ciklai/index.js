const produktuKainos = [4, 12.5, 6.2, 4.8, 4, 10];

let suma = 0;
let index = 0;
while (index < produktuKainos.length) {
	suma += Math.ceil(produktuKainos[index]);
	index++;
}
console.log(suma / produktuKainos.length);

const skaiciai = [];

// Skaiciu masyve reikia pridėti elementus tokia tvarka:
// [0, 2, 4, 6, 8, 10..... 98, 100];
// Numatoma pabaiga (13:00)
// index = 50;
// while (index <= 100) {
// 	skaiciai.push(index);
// 	index += 2;
// }
// console.log(skaiciai);

// Sugeneruokite masyvą iš 10 atsitiktinių skaičių nuo 1 iki 100;
// Pabaigos laikas 13:12

function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

const atsitiktiniai = [];
index = 0;
while (index < 10) {
	const atsitiktinisSk = rand(1, 100); //44
	atsitiktiniai.push(atsitiktinisSk);
	index++;
}

console.log(atsitiktiniai);

// Sukurti funkciją, kuri susumuoja visus skaičius masyve ir
// atiduoda bendrą sumą 13:31

suma = sum(atsitiktiniai); //Atsitiktiniu skaičiu suma
console.log(suma);

function sum(masyvas) {
	let suma = 0;
	let index = 0;
	while (index < masyvas.length) {
		suma += masyvas[index];
		index++;
	}
	return suma;
}

// Reikia sukurti funkciją, kuri rastų didžiausią skaičių masyve
// Pabaigos laikas 14:20;
const max = didziausias(atsitiktiniai);
console.log(max); //8

function didziausias(masyvas) {
	let didziausiasSk = 0;
	let index = 0;
	while (index < masyvas.length) {
		if (masyvas[index] > didziausiasSk) {
			didziausiasSk = masyvas[index];
		}
		index++;
	}
	return didziausiasSk;
}
