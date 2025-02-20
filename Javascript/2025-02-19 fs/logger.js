import fs from "node:fs";

export function log(data) {
	const date = new Date();
	fs.appendFileSync(
		"log.txt",
		`\n[${date.toLocaleDateString("lt")} ${date.toLocaleTimeString()}]\t${data}`
	);
}
