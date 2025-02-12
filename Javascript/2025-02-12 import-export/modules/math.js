//[1, 2, 3, 4, 5]
//export default viename faile gali būti tik vienas
export default () => {
	console.log("Funkcija suma(masyvas) - Susumuoja kiekvieną masyvo elementą.");
	console.log("Funkcija vidurkis(masyvas) - Apskaičiuoja viso masyvo vidurkį.");
};

export function suma(masyvas) {
	let suma = 0;
	masyvas.forEach((elementas) => {
		suma += elementas;
	});
	return suma;
}

export function vidurkis(masyvas) {
	const sum = suma(masyvas);
	return sum / masyvas.length;
}

export const PI = 3.14;

export function apskritimoPlotas(spindulys) {
	return PI * 2 * spindulys ** 2;
}
let einamasisSkaicius = 0;

export function printEinamasisSkaicius() {
	console.log(einamasisSkaicius);
}
export function setEinamasisSkaicius(kitasSk) {
	einamasisSkaicius = kitasSk;
}
