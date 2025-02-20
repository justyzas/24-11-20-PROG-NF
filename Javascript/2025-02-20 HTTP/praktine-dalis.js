import http from "http";
import fs from "node:fs";

http
	.createServer((req, res) => {
		console.log(req.url);
		if (req.url === "/hey") {
			res.write("Serveris: labas!");
		} else if (req.url === "/products-json") {
			// 1. Perskaityti JSON failą
			const data = fs.readFileSync("products.json");
			// 2. Nustatyti header'į nusakantį, kad tai JSON formatas
			res.writeHead(200, { "Content-Type": "application/json" });
			// 3. Pateikti atsakymą
			res.write(data);
		}
		// Server-Side-Rendering - SSR
		else if (req.url === "/products") {
			const html = String(fs.readFileSync("products.html"));
			const products = JSON.parse(String(fs.readFileSync("products.json")));
			let htmlText = "";
			products.forEach((product) => {
				htmlText += `<li>${product.name} - <i>${product.price.toFixed(
					2
				)}€</i></li>`;
			});
			const fullHtml = html.replace("{{PRODUCTS}}", htmlText);
			res.writeHead(200, { "Content-Type": "text/html" });
			res.write(fullHtml);
		}

		res.end();
	})
	.listen(3000);
