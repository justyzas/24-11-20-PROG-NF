import { DataTypes } from "sequelize";
import sequelize from "../setup/setup-sequelize.js";

const Book = sequelize.define("Book", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isbn: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  publishedYear: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});

export default Book; 