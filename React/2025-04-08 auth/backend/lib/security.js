import crypto from "crypto";

export function generateSalt() {
	return crypto.randomBytes(16).toString("hex");
}

export function hashPassword(password, salt) {
	const hashedPassword = crypto
		.createHmac("sha256", salt)
		.update(password)
		.digest("hex");
	return hashedPassword;
}

export function isValidCredentials(password, salt, hashedPassword) {
	return hashPassword(password, salt) === hashedPassword;
}
