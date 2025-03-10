import { DataTypes } from "sequelize";
import sequelize from "../config/connect-db.js";
const User = sequelize.define(
	"User",
	{
		firstName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		lastName: {
			type: DataTypes.STRING,
		},
	},
	{
		timestamps: false,
	}
);

export default User;
