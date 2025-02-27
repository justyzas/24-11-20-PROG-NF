import mysql from "mysql2/promise";

console.log("Prisijungiama prie MySQL duomeų bazės...");
const connection = await mysql.createConnection({
	host: "127.0.0.1",
	user: "root",
	password: "",
	database: "products",
});
console.log("Prisijungimas prie duomenų bazės buvo sėkmingas!");

export default connection;
