import { DataTypes, Sequelize } from "sequelize";

const sequelize = new Sequelize("sqlite::memory:");

// Modelio kūrimas
const User = sequelize.define(
	"User",
	{
		firstName: DataTypes.STRING,
		lastName: DataTypes.STRING,
		favoriteColor: {
			type: DataTypes.STRING,
			defaultValue: "Blue",
		},
	},
	{ timestamps: false }
);

// Modelio sinchronizavimas su duomenų baze:
await User.sync();

await User.create({
	firstName: "Rolandas",
	lastName: "Rolandavičius",
	favoriteColor: "Red",
});
await User.create({
	firstName: "Paulius",
	lastName: "Rolandavičius",
});
await User.create({
	firstName: "Mantas",
	lastName: "Mantelio",
});
await User.create({
	firstName: "Asta",
	lastName: "Kuraitienė",
});

// Užklausa norint gauti visus naudotojus
const users = await User.findAll();

const user1 = users[0];
user1.firstName = "Haris";
await user1.save();
// Komanda iššifruojanti gautus naudotojus
const user1Json = users[0].toJSON();

// const usersJson = users.map((user) => user.toJSON());

// console.log(newUser);
console.log(user1);

// Duomenų iš DB ištrynimas naudojantis iš DB gautu modeliu.
// await user1.destroy();
// await User.destroy({
// 	where: {
// 		firstName: "Haris",
// 	},
// });

// Duomenų duomenų bazėje atnaujinimas

await User.update(
	{
		firstName: "Petras",
	},
	{
		where: {
			id: 1,
		},
	}
);

// Vieno naudotojo paieška DB
const myUser = await User.findOne({
	where: {
		id: 1,
		firstName: "etras",
	},
});

if (myUser != null) console.log(myUser.toJSON());
else console.log("Naudotojas nerastas");
