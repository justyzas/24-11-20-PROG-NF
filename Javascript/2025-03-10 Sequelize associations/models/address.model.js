import { DataTypes } from "sequelize";
import sequelize from "../config/connect-db.js";
import User from "./user.model.js";
const Address = sequelize.define(
	"Address",
	{
		country: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		city: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		ownerId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			unique: true,
		},
	},
	{
		timestamps: false,
	}
);

// 1:1
User.hasOne(Address, {
	foreignKey: {
		name: "ownerId",
	},
});
Address.belongsTo(User, {
	foreignKey: {
		name: "ownerId",
	},
});

await sequelize.sync({ alter: true });
export default Address;
