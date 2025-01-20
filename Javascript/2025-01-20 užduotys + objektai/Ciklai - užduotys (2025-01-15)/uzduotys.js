function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 1. Sukurkite funkciją, kuri sukuria atsitiktinių skaičių masyvą iš N elementų.
// Atsitiktiniai skaičiai nuo M iki O;

// n - tai skaičius, kiek elementų bus sugeneruotame masyve
// m - tai minimali reikšmė, nuo kurios turi būti generuojamas atsitiktinis sk.
// o - tai maksimali reikšmė, iki kurios turi būti generuojamas atsitiktinis sk.

function kurtiAtsitiktiniuSkaiciuMasyva(n, m, o) {
	// 1. deklaruosime nauja masyvą
	const masyvas = [];
	// 2. Naudosime ciklą, vykdantį kodą n kartų
	for (let i = 0; i < n; i++) {
		// 2.1. generuojamas atsitiktinis sk. nuo m iki o
		var atsitiktinis = rand(m, o);
		// 2.2. Tas atsitiktinis bus pridedamas į masyvą.
		masyvas.push(atsitiktinis);
	}
	// 3. return [4,5,6,7,54]
	return masyvas;
}

const atsitiktiniai1 = kurtiAtsitiktiniuSkaiciuMasyva(1000, 1, 100);
console.log(atsitiktiniai1);

// 2. Sukurkite funkciją, kuri console.log’e parašo tik skaičius iš masyvo M,
//  mažesnius nei N.

// M - skaičių masyvas, kuris paduodamas funkcijai
// N - iki kurios reikšmės, console.log'inti skaičius iš masyvo.
function parasytiTikMazesnius(m, n) {
	for (let i = 0; i < m.length; i++) {
		if (m[i] <= n) {
			console.log(m[i]);
		}
	}
}

// parasytiTikMazesnius(atsitiktiniai1, 5);

// 3. Sukurkite funkciją, countAllThrees(array), kuri suskaičiuotų,
//  kiek kartų pateiktame skaičių masyve yra pasikartojantis skaičius 3;

// [3,4,5,6,3,3, 33] => 3
function countAllThrees(array) {
	let pasikartojimuSkaicius = 0;

	for (let i = 0; i < array.length; i++) {
		if (array[i] == 3) {
			pasikartojimuSkaicius++;
		}
	}

	return pasikartojimuSkaicius;
}

console.log(countAllThrees(atsitiktiniai1));

// 4. Sukurkite funkcijas countAllEven(array) ir countAllOdd(array).
// Pirmoji funkcija suskaičiuoja, kiek yra lyginių skaičių pateiktame masyve.
// Kita suskaičiuoja kiek yra nelyginių skaičių;

// countAllEven([2,3,4,5,6])  => 3     //lyginis%2 = 0 - lyginis
// countAllOdd([2,3,4,5,6])  => 2      //nelyginis%2 = 1 - nelyginis

function countAllEven(array) {
	let kiekPasikartojimu = 0;

	for (let i = 0; i < array.length; i++) {
		if (array[i] % 2 == 0) {
			kiekPasikartojimu++;
		}
	}

	return kiekPasikartojimu;
}

function countAllOdd(array) {
	let kiekPasikartojimu = 0;

	for (let i = 0; i < array.length; i++) {
		if (array[i] % 2 != 0) {
			kiekPasikartojimu++;
		}
	}

	return kiekPasikartojimu;
}

console.log(countAllEven(atsitiktiniai1)); //lyginiu skaicius
console.log(countAllOdd(atsitiktiniai1)); //nelyginiu skaicius

// 5. Sukurkite funkciją countAllEvenUnderSix(array), kuri suskaičiuoja,
// kiek yra lyginių skaičių, kurių reikšmė yra  6 arba mažesnė  pateiktame masyve.

function countAllEvenUnderSix(array) {
	let count = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i] % 2 == 0 && array[i] <= 6) {
			count++;
		}
	}
	return count;
}

console.log(countAllEvenUnderSix(atsitiktiniai1)); //30

// 6. Sukurkite funkciją throwCoin(), kuri imituoja monetos metimą.
// funkcijos gražinama reikšmė: “H” - Herbas arba “S” - Skaičius;

function throwCoin() {
	if (rand(0, 1) == 1) return "H";
	return "S";
}

// 7. Sukurkite funkciją, kuri imituoja monetos metimą 20 kartų,
//  suskaičiuokite kiek kartų iškrito skaičius, kiek kartų iškrito herbas.
//  Paskaičiuokite procentaliai, kokiu dažnumu krito skaičius;

function throwCoinTimes(n) {
	let kartuIskritoSk = 0;
	let kartuIskritoH = 0;

	for (let i = 0; i < n; i++) {
		// Įvyksta metimas
		let iskritusiReiksme = throwCoin();
		// Metimo vertinimas
		if (iskritusiReiksme == "H") kartuIskritoH++;
		else kartuIskritoSk++;
	}

	let procentaliaiKritoSk = (kartuIskritoSk / n) * 100;
	let procentaliaiKritoH = (kartuIskritoH / n) * 100;

	console.log(`Skaičius iškrito ${kartuIskritoSk} kartų`);
	console.log(`Herbas iškrito ${kartuIskritoH} kartų`);
	console.log(
		`Skaičius procentaliai krito ${procentaliaiKritoSk}% atvejų, Herbas procentaliai iškrito ${procentaliaiKritoH}% atvejų`
	);
}

throwCoinTimes(56);
// 8. Sukurkite funkciją sumAll(masyvas), kuri susumuoja visus masyvo elementus
//  bei gražina šią sumą kaip rezultatą;

// 9. Sukurkite funkciją average(arr), kuri atranda visų masyve pateiktų skaičių vidurkį;

// 10. Sukurkite funkciją findAllUniqueNumbers(masyvas),
//  kuri atranda masyve esančius unikalius skaičius.
//  gražina juos masyvo pavidalu:
// pvz: findAllUniqueNumbers([1,1,2,8,8,1, 4, 6]) // [1,2,8,4,6];
