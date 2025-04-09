import db from "../config/connect-mysql.js";

export async function createUser(user) {
	const result = await db.execute(
		`INSERT INTO users 
        (firstName, lastName, email, password, salt)
        VALUES (?, ?, ?, ?, ?);`,
		[user.firstName, user.lastName, user.email, user.password, user.salt]
	);
	console.log(result);
	return result;
}

export async function getUser(id) {}

export async function getAllUsers() {}
