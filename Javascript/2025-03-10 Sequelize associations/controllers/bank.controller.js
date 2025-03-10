export async function createBankAccount(req, res) {
	const reqBankAccount = req.body;
	console.log(reqBankAccount);

	const iban = generateIBAN("LT");

	const newBankAccount = await BankAccountModel.create({
		provider: reqBankAccount.provider,
		iban,
		UserId: req.params.userId,
	});

	res.status(201).send(newBankAccount);
}

export async function depositMoney(req, res) {}
export async function withdrawMoney(req, res) {}
