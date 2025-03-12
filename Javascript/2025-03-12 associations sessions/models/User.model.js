import { DataTypes } from "sequelize";
import sequelize from "../setup/setup-sequelize.js";

const User = sequelize.define(
	"User",
	{
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		isAdmin: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false,
		},
	},
	{
		defaultScope: {
			attributes: {
				exclude: ["password"],
			},
		},
		scopes: {
			contactData: {
				attributes: ["name", "email"],
			},
		},
	}
);

export default User;
