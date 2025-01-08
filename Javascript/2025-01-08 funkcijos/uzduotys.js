// 1. Sukurti funkciją, kuri atiduoda pirmą pateikto teksto simbolį;
// funkcija turės priimti vieną parametrą

function pirmasSimbolis(tekstas) {
	return tekstas.charAt(0);
}
function paskutinisSimbolis(tekstas) {
	return tekstas.charAt(tekstas.length - 1);
}

let rezultatas1 = pirmasSimbolis("Justinas");
let rezultatas2 = pirmasSimbolis("Raudonkepuraitė");
let rezultatas3 = pirmasSimbolis("Darbo birža");
console.log(rezultatas3);
console.log(paskutinisSimbolis("Raudon"));
