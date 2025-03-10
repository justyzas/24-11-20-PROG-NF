import UserModel from "../models/user.model.js";
import AddressModel from "../models/address.model.js";
import BankAccountModel from "../models/bank-account.model.js";
import generateIBAN from "../lib/generate-iban.js";
const positiveAnswers = ["yes", "true", "ok"];

export async function getAllUsers(req, res) {
	const includes = [BankAccountModel];
	if (
		req.query.includeAddress &&
		positiveAnswers.includes(req.query.includeAddress.toLowerCase())
	)
		includes.push(AddressModel);
	const users = await UserModel.findAll({ include: includes });
	console.log(users);
	res.send(users);
}
export function getUser(req, res) {
	res.send({});
}
export async function createUser(req, res) {
	const newUser = await UserModel.create(req.body);
	res.status(200).send(newUser);
}
export async function addAddress(req, res) {
	const reqAddress = req.body;
	console.log(reqAddress);

	const newAddress = await AddressModel.create({
		country: reqAddress.country,
		city: reqAddress.city,
		ownerId: req.params.id,
	});
	res.status(200).json({ message: "Address was set successfully" });
}
export async function getAllAddresses(req, res) {
	const includes = [];
	if (
		req.query.includeUser &&
		positiveAnswers.includes(req.query.includeUser.toLowerCase())
	)
		includes.push(UserModel);
	const addresses = await AddressModel.findAll({ include: includes });
	res.status(200).send(addresses);
}
