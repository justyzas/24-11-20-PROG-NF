// BILIETU PIRKIMAS   10EUR
// Jei amžius yra mažiau nei 12    - 50%
// Jei amžius yra daugiau nei 65   - 80%
// Jei studentas                   - 40%
// Jei Karys                       - 50%
// Jei Studentas ir karys          - 70%

// 1. Turima informacija
let ticketPrice = 10;
const jaunuolioAmzius = 16;
const nuolaidaJaunuoliui = 50;
const nuolaidaSenjorui = 80;
const nuolaidaStudentui = 90;
const nuolaidaKariui = 50;
const nuolaidaStudentuiKariui = 70;

const amziausIvestis = document.querySelector("#age-input");
const studentCheckbox = document.querySelector("#is-student");
const militaryCheckbox = document.querySelector("#is-military");

function showTicketPrice() {
	// 2. Kintančios informacijos suvedimas
	let amzius = Number(amziausIvestis.value);
	let arStudentas = studentCheckbox.checked; //true/false
	let arKarys = militaryCheckbox.checked; //true/false
	let totalPrice = ticketPrice;

	// 3. Atliekame skaičiavimus
	if (amzius < jaunuolioAmzius) {
		totalPrice = ticketPrice - (ticketPrice * nuolaidaJaunuoliui) / 100;
	} else if (amzius > 65) {
		totalPrice = ticketPrice - (ticketPrice * nuolaidaSenjorui) / 100;
	} else {
		if (arStudentas && arKarys) {
			totalPrice = ticketPrice - (ticketPrice * nuolaidaStudentuiKariui) / 100;
		} else if (arStudentas == true) {
			totalPrice = ticketPrice - (ticketPrice * nuolaidaStudentui) / 100;
		} else if (arKarys == true) {
			totalPrice = ticketPrice - (ticketPrice * nuolaidaKariui) / 100;
		}
	}
	// 4. Rezultato pateikimas
	alert(`Jūsų bilietas kainuoja ${totalPrice.toFixed(2)}€`);
}
// let age = 22;
// let isStudent = true;
// let isMilitary = false;
