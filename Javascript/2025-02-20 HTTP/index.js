import http from "http";
import fs from "node:fs";

http
	.createServer((request, response) => {
		// Užklausos headeriai:
		// console.log(request.headers);
		// console.log("Serveris gavo užklausą!");
		console.log(request.method, request.url);
		// /a
		if (request.url == "/a") {
			response.writeHead(200, {
				"Content-Type": "application/json",
			});
			// Atsakymo duomenų pateikimas
			response.write(
				JSON.stringify([
					{ name: "PrekeA", price: 87.24 },
					{ name: "PrekeB", price: 24.22 },
					{ name: "PrekeC", price: 188.11 },
				])
			);
		}
		// /b
		else if (request.url == "/b") {
			response.writeHead(200, {
				"Content-Type": "application/json",
			});
			// Atsakymo duomenų pateikimas
			response.write(
				JSON.stringify([
					{ name: "PrekeA", quantity: 4 },
					{ name: "PrekeB", quantity: 2 },
					{ name: "PrekeC", quantity: 0 },
				])
			);
		}
		// pagrindinis puslapis
		else if (request.url == "/") {
			const html = String(fs.readFileSync("pagrindinis.html"));
			response.writeHead(200, {
				"Content-Type": "text/html",
			});
			response.write(html);
		}
		// style.css pasiekimas per serverį
		else if (request.url.startsWith("/public")) {
			const pathToFile = request.url.slice(1);
			const content = String(fs.readFileSync(pathToFile));
			response.writeHead(200);
			response.write(content);
		}
		// visi kiti routes
		else {
			const html = String(fs.readFileSync("404.html"));
			// Atsakymo headerių nustatymai
			response.writeHead(404, {
				"Content-Type": "text/html",
			});
			// Atsakymo duomenų pateikimas
			response.write(html);
		}

		// Atsakymo pabaiga
		response.end();
	})
	.listen(3000);

// localhost:3000
// 127.0.0.1:3000
// Vietinio tinklo vidinis ipv4 adresas
// 192.168.1.79:3000
