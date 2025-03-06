import { DataTypes, Op } from "sequelize";
import sequelize from "./connect-db.js";
import { raw } from "mysql2";

// Sukūrus modelį, norint kad lentelė susikurtų automatiškai - reikia paleisti .sync() metodą;
// await User.sync();
// await sequelize.sync({ alter: true });
// await sequelize.sync({ force: true });

// .create(obj)  - sukūrimas
// .findAll      - gavimas visų
// .findOne      - gavimas vieno
// .destroy      - Ištrynimas
// .update       - atnaujinimas

// Sukūrimas

await User.create({
	firstName: "Jonas",
	lastName: "Jonaitis",
	email: "jda00jda00ja00@ja.ja",
});

const userModelInstance = User.build({
	firstName: "Tadas",
	lastName: "Blinda",
	email: "tadas.blinda@mail.lt",
});
userModelInstance.firstName = "Saulius";
await userModelInstance.save();

console.log(userModelInstance);

// Duomenų paieška duomenų bazėje:
// Parametras raw: true, nurodo, kad norime gauti jau išparsintą, reikšmę

const allUsers = await User.findAll({ raw: true });
console.log(allUsers);
console.log(allUsers[0].toJSON());
allUsers[0].email = "asdas";
allUsers[0].age = 21;
await allUsers[0].save();

const manoUseris = await User.findOne({
	where: {
		firstName: "Jonas",
	},
	raw: true,
});
console.log(manoUseris);

await User.destroy({
	where: {
		firstName: "Tadas",
	},
});

// Atnaujinimo komanda
await User.update({ firstName: "Paulius" }, { where: { id: 4 } });
