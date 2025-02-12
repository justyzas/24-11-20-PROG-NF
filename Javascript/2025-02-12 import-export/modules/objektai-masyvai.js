const response = await fetch("https://randomuser.me/api/?results=10");
//{ info: {}, data: []}
const { results: zmoniuMasyvas } = await response.json();

// ----------------DARBO ZONA--------------------
console.log(zmoniuMasyvas);
const [pirmasZmogus, , , ketvirtasZmogus] = zmoniuMasyvas;

console.log(pirmasZmogus);

zmoniuMasyvas.forEach((zmogus) => {
	const { street: tempStreet, city, country } = zmogus.location;
	zmogus.location.street = `${tempStreet.name} ${tempStreet.number}`;
	const { street } = zmogus.location;
	zmogus.location.fullAddress = `${street}, ${city}, ${country}`;
});

const atfiltruotaZmoniuInformacija = zmoniuMasyvas.map((zmogus) => {
	const { first, last } = zmogus.name;
	return {
		telefonoNumeris: zmogus.cell,
		email: zmogus.email,
		fullAddress: zmogus.location.fullAddress,
		fullName: `${first} ${last}`,
	};
});

console.log(atfiltruotaZmoniuInformacija);

// ------------------TEORIJA-----------------
// // Objektų destruktūravimas (galimybė iš objekto laukų sukurti kintamuosius)
// const { results: rezultatai, info } = data;

// console.log(rezultatai); //[]
// console.log(info); //{}
// // const zmoniuMasyvas = data.results;

// // Masyvų destruktūravimas
// const masyvas = [1, 2, 3, 4, 5];

// // const pirmasElementas = masyvas[0]; //1
// // const antrasElementas = masyvas[1]; //2

// const [pirmasElementas, , , ketvirtasElementas] = masyvas;
// console.log(pirmasElementas, ketvirtasElementas);
