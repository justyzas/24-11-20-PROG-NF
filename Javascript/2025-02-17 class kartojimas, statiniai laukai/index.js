class PavyzdineKlase {
	#privatausKeitimoKartai;
	#privatus;
	viesas;

	constructor() {
		this.#privatus = 6;
		this.#privatausKeitimoKartai = 0;
		this.viesas = "Aš esu viešas";
	}

	get privatus() {
		return this.#privatus;
	}
	set privatus(kitaReiksme) {
		this.#privatausKeitimoKartai++;
		console.log("Privati reikšmė buvo pakeista");
		this.#privatus = kitaReiksme;
	}

	get privatausKeitimoKartai() {
		return this.#privatausKeitimoKartai;
	}
}

// const pvz1 = new PavyzdineKlase();

// pvz1.privatus = "Laba diena!";
// console.log(pvz1.privatausKeitimoKartai);
// pvz1.privatus = "Labas vakaras!";
// console.log(pvz1.privatausKeitimoKartai);
// pvz1.privatus = "Labas rytas!";
// console.log(pvz1.privatausKeitimoKartai);
// console.log(pvz1.privatus);

class Circle {
	#radius;
	#area;

	constructor(radius) {
		// Čia nustatinėjamas ne privatus laukelis, o iškviečiamas setteris
		this.radius = radius;
	}

	#skaiciuotiPlota() {
		this.#area = Math.PI * this.#radius ** 2;
	}

	get radius() {
		return this.#radius;
	}
	set radius(newRadius) {
		this.#radius = newRadius;
		this.#skaiciuotiPlota();
	}
	get area() {
		return this.#area;
	}
}

// const apskritimas1 = new Circle(7);
// console.log(apskritimas1);

// apskritimas1.area = 1000;
// apskritimas1.radius = 1000;
// console.log(apskritimas1.radius);
// console.log(apskritimas1.area);

class TransactionHistory {
	#history;

	constructor() {
		this.#history = [];
	}

	get history() {
		return this.#history;
	}

	addTransaction(operation, amount, comment = "No comments") {
		const date = new Date();
		const transaction = {
			date: `${date.toLocaleDateString("lt")} ${date
				.getHours()
				.toString()
				.padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`, //2025-02-17
			operation: operation,
		};

		if (
			operation === "DEPOSIT" ||
			operation === "WITHDRAW" ||
			operation === "CANCELLED"
		) {
			transaction.data = {
				amount,
			};
		}
		if (operation === "CANCELLED") {
			transaction.data.comment = comment;
		}
		this.#history.push(transaction);
		return transaction;
	}
}

class BankAccount {
	// Balansas
	#balance;
	// Operacijų istorija
	#transactionHistory;

	constructor(pradinisBalansas = 0) {
		this.#balance = pradinisBalansas;
		this.#transactionHistory = new TransactionHistory();
		this.#transactionHistory.addTransaction("CREATE");
	}

	#patikslintiBalansa() {
		this.#balance = Number(this.#balance.toFixed(2));
	}

	// Pinigų įnešimas
	deposit(amount) {
		//"asd4"
		if (isNaN(amount)) {
			this.#transactionHistory.addTransaction(
				"CANCELLED",
				0,
				"Operacija atmesta, bandyta įnešti neapibrėžtą pinigų kiekį"
			);
			return;
		}

		this.#balance += Number(amount);
		this.#patikslintiBalansa();
		this.#transactionHistory.addTransaction("DEPOSIT", amount);
	}

	// Pinigų išėmimas
	withdraw(amount) {
		if (isNaN(amount)) {
			this.#transactionHistory.addTransaction(
				"CANCELLED",
				0,
				"Operacija atmesta, bandyta išimti neapibrėžtą pinigų kiekį"
			);
			return;
		}
		if (this.#balance >= amount) {
			this.#balance -= amount;
			this.#patikslintiBalansa();
			this.#transactionHistory.addTransaction("WITHDRAW", amount);
		} else {
			const message = `KLAIDA - Nepakankamas pinigų kiekis išėmimui. 
            Buvo bandyta išimti  ${amount}€, o tuo tarpu sąskaitoje buvo ${
				this.#balance
			}€`;
			console.error(message);
			this.#transactionHistory.addTransaction("CANCELLED", amount, message);
		}
	}

	get balansas() {
		return this.#balance;
	}
	get transactionHistory() {
		return this.#transactionHistory.history;
	}
}

const bankoSaskaita1 = new BankAccount(45.44);

bankoSaskaita1.deposit("asd4");
bankoSaskaita1.deposit(1000);
bankoSaskaita1.withdraw(20);
bankoSaskaita1.withdraw(100);
bankoSaskaita1.withdraw(100);

console.log(bankoSaskaita1.balansas);
console.log(bankoSaskaita1.transactionHistory);
