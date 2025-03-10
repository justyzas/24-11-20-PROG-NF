export default function generateIBAN(countryCode = "LT") {
	const firstPart = rand(100000000, 999999999);
	const secondPart = rand(100000000, 999999999);

	return `${countryCode}${firstPart}${secondPart}`;
}

function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
