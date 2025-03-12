import { DataTypes } from "sequelize";
import sequelize from "../setup/setup-sequelize.js";

const Profile = sequelize.define("Profile", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  profilePictureUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  bio: {
    type: DataTypes.TEXT,
    allowNull: true,
  }
});

export default Profile; 