function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let sk1 = rand(1, 10); //5
let sk2 = rand(1, 10); //7
console.log("Pirmasis skaicius yra " + sk1);
console.log("Antrasis skaicius yra " + sk2);

// 3min
// jei sk1 iskrito 7 arba 9 tada ji paversti į 4
// jei sk2 iskrito 7 arba 9 tada ji paversti į 4
// ARBA operatorius ||
if (sk1 == 7 || sk1 == 9) {
	sk1 = 4;
	console.log("sk1 buvo paverstas į 4...");
}
if (sk2 == 7 || sk2 == 9) {
	sk2 = 4;
	console.log("sk2 buvo paverstas į 4...");
}

// Jei sk1 yra didesnis nei sk2 - parasyti kad pirmieji laimi!
// Jei sk2 yra didesnis nei sk1 - parasyti kad antrieji laimi!
// Jei sk2 ir sk1 yra lygūs, parašyti lygiosios!

// 5 min
// IR operatorius &&
// NE operatorius !
if (sk1 > sk2 && sk1 % 2 == 0) console.log("pirmieji laimi lyginiai");
else if (sk1 > sk2 && sk1 % 2 != 0) console.log("pirmieji laimi nelyginiai");
else if (sk1 < sk2 && sk2 % 2 == 0) console.log("antrieji laimi lyginiai");
else if (sk1 < sk2 && sk2 % 2 != 0) console.log("antrieji laimi nelyginiai");
else console.log("lygiosios");
