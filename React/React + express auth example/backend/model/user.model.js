import db from "../config/connect-mysql.js";

export async function createUser(user) {
	const [result] = await db.execute(
		`INSERT INTO users 
        (firstName, lastName, email, password, salt)
        VALUES (?, ?, ?, ?, ?);`,
		[user.firstName, user.lastName, user.email, user.password, user.salt]
	);
	user.id = result.insertId;
	return user;
}

export async function getUserById(id) {}

export async function getUserByEmail(email) {
	const [result] = await db.execute(`SELECT * FROM users WHERE email = ?;`, [
		email,
	]);
	if (result.length === 0)
		throw new Error("User was not found", {
			err: "NOT_FOUND",
			field: email,
		});
	return result[0];
}

export async function getAllUsers() {}
