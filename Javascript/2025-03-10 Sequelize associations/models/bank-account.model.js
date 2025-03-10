import { DataTypes } from "sequelize";
import sequelize from "../config/connect-db.js";
import User from "./user.model.js";

const BankAccount = sequelize.define(
	"BankAccount",
	{
		provider: {
			// Iš anksto aprašomos galimos reikšmės IBAN sukūrimui/atnaujinimui
			type: DataTypes.ENUM("swedbank", "seb", "siauliu bankas"),
			defaultValue: "swedbank",
			allowNull: false,
		},
		iban: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		balance: {
			type: DataTypes.DECIMAL(8, 2).UNSIGNED,
			defaultValue: 0,
			allowNull: false,
		},
	},
	{
		timestamps: false,
	}
);

User.hasMany(BankAccount);
BankAccount.belongsTo(User);

await sequelize.sync({ alter: true });

export default BankAccount;
