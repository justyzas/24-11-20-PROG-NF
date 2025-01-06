function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
let sk = rand(0, 99);
console.log(sk);
// 1 Kategorija: 0 - 10 - pakelti skaičių kvadratu ir atspausdinti
if (sk <= 10) {
	sk **= 2; // **= pakelti skaičių laipsnių
	console.log("Skaičiaus kategorija I");
	console.log(sk);
}
// Kategorija 2: 11 - 19  - atspausdinti skaičių tokį koks jis yra;
else if (sk <= 19) {
	console.log("Skaičiaus kategorija II");
	console.log(sk);
}
// Kategorija 3: 20 - 49  ir skaičius yra lyginis: Skaičiaus dešimtis atimti iš paties skaičiaus ir atspausdinti
else if (sk <= 49 && sk % 2 == 0) {
	console.log("Skaičiaus kategorija III");
	// Math.floor() apvalina skaičių į mažają pusę. PVZ apvalinant 4.7, rezultate gautume 4
	// Math.ceil() apvalina skaičių į didžiąją puse. PVZ. apvalinant 4.2, rezultate gautume 5
	// Math.round() apvalina skaičių PVZ. apvalinant 4.3 gautume 4 o apvalinant 4.7 rezultate gautume 5;
	sk -= Math.floor(sk / 10);

	console.log(sk);
}
// Kategorija 4: 20 - 49  ir skaičius yra nelyginis:
else if (sk <= 49 && sk % 2 != 0) {
	// Skaičiaus vienetus pridėti prie paties skaičiaus ir padalinti iš 2. Galiausiai atspausdinti;
	// (37 + 7) / 2
	sk = (sk + (sk % 10)) / 2;
	console.log("Skaičiaus kategorija IV");
	console.log(sk);
}
// Kategorija 5:  50 arba didesnis ir skaičius dalinasi iš 3 be liekanos:
else if (sk % 3 == 0 && sk >= 50) {
	console.log("Skaičiaus kategorija V");
	let sugeneruotasTekstas =
		String.fromCharCode(rand(65, 90)) +
		String.fromCharCode(rand(65, 90)) +
		String.fromCharCode(rand(65, 90)) +
		String.fromCharCode(rand(65, 90));
	console.log(sugeneruotasTekstas);
} else
	console.log(
		"Sugeneruotas skaičius nepapuola nei į vieną iš paminėtų kategorijų"
	);
