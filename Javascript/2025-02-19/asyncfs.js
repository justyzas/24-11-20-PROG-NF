// Asinchroninis būdas kreiptis į failų sistemą (neblokuojantis veiksmų seką elgesys)
import fs from "node:fs/promises";

try {
	await fs.writeFile("data/failas.txt", "Labas pasauli!");
	console.log("Saved!");
} catch (err) {
	console.error(err);
}

fs.writeFile("data/mynewfile3.txt", "Hello content!", function (err) {
	if (err) console.log(err);
	else console.log("Saved!");
});

console.log("Programa baigė savo darbą");
