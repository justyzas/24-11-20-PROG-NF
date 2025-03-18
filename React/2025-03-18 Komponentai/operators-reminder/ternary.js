function getFee(isMember) {
	return isMember ? "$2.00" : "$10.00";
}

console.log(getFee(true)); // 2
console.log(getFee("b")); // 2
console.log(getFee({})); // 2
console.log(getFee([])); // 2
console.log(getFee(new Date()));
console.log(getFee(new Error()));
console.log(getFee(Infinity));
console.log(getFee(-Infinity));
console.log(getFee(function () {}));

console.log(getFee(false));
console.log(getFee(0));
console.log(getFee(null));
console.log(getFee(undefined));
console.log(getFee(""));
console.log(getFee(NaN));

// Funkcija, kurioje nurodome pozityvų arba neigiamą balansą.
// Jei balansas yra teigiamas - tai yra mokesčių nepermoka
// Jei balansas yra neigiamas - tai yra mokesčių permoka
// Jei balansas yra 0 - tai yra mokesčių permoka

// Jei mokesčių permoka, tai gražina "mokesčių mokėti dar nereikia"
// Jei mokesčių nepermoka, tai gražina "mokesčius reikia mokėti"

function tax(balance) {
	return balance <= 0
		? "mokesčius reikia mokėti"
		: "mokesčių mokėti dar nereikia";
}
console.log(tax(1));

// JOKE :)
// USE TERNARY OPERATOR!
// jei ištikimas ir sportiškas, tai gražina "no worries"
// jei ištikimas bet nesportiškas, tai gražina "make up"
// jei neištikimas bet sportiškas, tai gražina "make up"
// jei neištikimas ir nesportiškas, tai gražina "break up"

function breakUp(isLoyal, isSporty) {
	return isLoyal
		? isSporty
			? "no worries"
			: "make up"
		: isSporty
		? "make up"
		: "break up";
}

// console.log(breakUp(true, true));
// console.log(breakUp(true, false));
// console.log(breakUp(false, true));
// console.log(breakUp(false, false));
