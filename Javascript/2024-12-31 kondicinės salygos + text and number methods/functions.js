function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

const moneyElement = document.querySelector("#money-amount > span");
const gambleMoneyElement = document.querySelector("#gamble-money");
let money = 10;
let gambleMoney = 0;

atnaujintiPinigus();
gambleMoneyElement.innerHTML = gambleMoney;

function hey() {
	alert("Sveiki atvykę į barą!");
}

function buyBeer() {
	if (money >= 2) {
		alert("Stai jusu alus!");
		money = money - 2;
		atnaujintiPinigus();
	} else {
		alert("Neuztenka pinigų!");
	}
}

function gamble() {
	// Tikimybė 1/2 kad laimės 2 eur, arba pralaimės 1 eur
	let statymas = gambleMoney;
	if (money < statymas) {
		alert("Neturi pakankamai pinigų");
	} else {
		let skaicius = rand(1, 2); //1 arba 2
		if (skaicius == 1) {
			money = money + statymas;
		} else {
			money = money - statymas;
		}
		atnaujintiPinigus();
	}
}

function atnaujintiPinigus() {
	moneyElement.innerHTML = money;
}

function didintiStatyma() {
	// gambleMoney = gambleMoney + 1;
	if (gambleMoney >= money) {
		alert("Nepakanka pinigų statymui");
	} else {
		gambleMoney += 1;
		gambleMoneyElement.innerHTML = gambleMoney;
	}
}

function mazintiStatyma() {
	if (gambleMoney <= 1) {
		alert("Statomų pinigų kiekis - per mažas");
	} else {
		gambleMoney -= 1;
		gambleMoneyElement.innerHTML = gambleMoney;
	}
}
