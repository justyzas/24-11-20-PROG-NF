import Sequelize from "sequelize";

const sequelize = new Sequelize("sequelize_test", "root", "", {
	host: "localhost",
	dialect: "mysql",
});
await sequelize.authenticate();

export default sequelize;
