import fs from "node:fs";

// Sukurti failą
// paskutinis-paleidimas.txt:  "Paskutinis paleidimas - 2025-02-19 14:07:28";
// Kiekvieną kartą paleidus programą, atnaujinti paskutinio paleidimo datą.
// 14:15

const date = new Date();
// "Paskutinis paleidimas - 2025-02-19 14:07:28"
const time = date.toLocaleTimeString("lt");
const formattedDate = date.toLocaleDateString("lt");
fs.writeFileSync(
	"paskutinis-paleidimas.txt",
	`Paskutinis paleidimas - ${formattedDate} ${time}`
);
