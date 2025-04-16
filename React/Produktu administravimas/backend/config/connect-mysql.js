import mysql from "mysql2/promise";
let connection = null;
try {
	connection = await mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "",
		database: "product_administration_db",
	});
	console.log("✅ Prisijungimas prie duomenų bazės pavyko");
} catch (err) {
	console.log("❌ Prisijungimas prie duomenų bazės nepavyko");

	console.error(err);
	process.exit(1);
}
export default connection;
