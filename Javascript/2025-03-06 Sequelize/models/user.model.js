import { DataTypes } from "sequelize";
import sequelize from "../connect-db.js";
const User = sequelize.define(
	"User",
	{
		firstName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		age: {
			type: DataTypes.TINYINT.UNSIGNED, //Skaičiai teigiami 0 - 255
			// type: DataTypes.TINYINT,//Skaičiai neigiami ir teigiami -127 - 127
			allowNull: false,
			defaultValue: 20, // Nustato reikšmę pagal nutylėjimą
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isEmail: true,
			},
			unique: true,
		},
	},
	{
		timestamps: false,
	}
);
// await sequelize.sync({ alter: true });
export default User;
