import { DataTypes } from "sequelize";
import sequelize from "../setup/setup-sequelize.js";

const Author = sequelize.define("Author", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  }
});

export default Author; 