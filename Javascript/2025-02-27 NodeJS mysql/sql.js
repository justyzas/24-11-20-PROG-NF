import connection from "./mysql-connect.js";

// SQL įrašų lentelėje perskaitymas.

// const [data] = await connection.query("SELECT * FROM products");
// console.log(data);

// Reikšmių prie DB lentelės pridėjimas

// const data = await connection.query(
// 	`INSERT INTO products (title, price, description)
//     VALUES("Vidurinė sodo sofos dalis iš palečių, ruda", 114.99, "Ši medinė vidurinė sofos dalis iš palečių bus puikiu pasirinkimu jūsų poilsiui, mėgavimuisi oru, norint nusnausti arba pokalbiams su savo šeima ar draugais.")`
// );
// console.log(data);

// Reikšmių iš DB lentelės ištrynimas

// const data = await connection.query(
// 	"DELETE FROM products WHERE id BETWEEN 4 AND 5"
// );
// console.log(data);

// const data = await connection.query(`UPDATE products
// SET price = 114.99, title = "Naujas pavadinimas"
// WHERE id=1;`);
// console.log(data);
