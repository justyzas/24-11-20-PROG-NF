// CommonJS modulių sistemos importavimas (.js plėtinys nebūtinas)
// const { plotasApskritimo, plotasStaciakampio } = require("./math");

// ESM module importų/exportų sistemos panaudojimas

import { plotasApskritimo, plotasStaciakampio } from "./math.js";

// Papildomi, paleidimo metu numatomi parametrai gaunami į process.argv masyvą.
const argsArray = process.argv.slice(2);
const args = {};

argsArray.forEach((val) => {
	const [key, value] = val.split("="); //["plotis", "4"]
	args[key] = isNaN(value) ? value : Number(value);
});

const galimiRezimai = ["staciakampis", "apskritimas"];
if (galimiRezimai.includes(args.rezimas)) {
	let plotas;
	if (args.rezimas === "staciakampis")
		plotas = plotasStaciakampio(args.plotis, args.aukstis);
	else if (args.rezimas === "apskritimas")
		plotas = plotasApskritimo(args.spindulys);
	console.log("Apskaičiuotas figūros plotas: ");
	console.log(plotas);
} else {
	console.log(
		"Nepasirinktas joks programos paleidimo rezimas. Galimos reiksmes: " +
			galimiRezimai.join(", ")
	);
}
console.log("Programos darbas baigtas...");
