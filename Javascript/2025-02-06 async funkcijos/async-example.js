function paprastaFunkcija1() {
	let count;
	for (i = 0; i < 10000; i++) count = i;
	console.log("funkcija1 - pabaiga");
	return count;
} //3ms
function paprastaFunkcija2() {
	let count;
	for (i = 0; i < 1000; i++) count = i;
	console.log("funkcija2 - pabaiga");
	return count;
} //1ms

async function asinchronineFunkcija1(trukme = 1000) {
	console.log("asinchronineFunkcija1 pradžia");
	await new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Yes");
		}, trukme);
	});
	console.log("async1 - pabaiga");
	// throw new Error("Serveris nepasiekamas");
	return "Rezultatas1";
}
async function asinchronineFunkcija2(trukme = 2000) {
	console.log("asinchronineFunkcija2 pradžia");
	await new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Yes");
		}, trukme);
	});
	console.log("async2 - pabaiga");
	return "Rezultatas2";
}

// paprastaFunkcija2();
// paprastaFunkcija1();

// Async raktažodis naudojamas sukurti funkcijoms, kurių pabaigos mes norime sulaukti
async function main() {
	//await raktažodis sulaukia kol asinchroninė funkcija baigs savo darbą
	// await asinchronineFunkcija2(); //2000ms
	// const data = await asinchronineFunkcija1(); //+1000ms
	const startDate = Date.now();

	const uzklausos = [asinchronineFunkcija1(), asinchronineFunkcija2()];
	const [atsakymas1, atsakymas2] = await Promise.all(uzklausos);
	// const atsakymas1 = await asinchronineFunkcija1(); //1s
	// const atsakymas2 = await asinchronineFunkcija2(); //2s
	const endDate = Date.now();
	console.log("Trukmė: ", endDate - startDate + "ms");

	console.log(atsakymas1);
	console.log(atsakymas2);
	console.log("main funkcijos pabaiga");
}

console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");

main();
console.log("6");
console.log("7");
console.log("8");
console.log("9");
console.log("10");
