import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
	database: "sql_associations_two",
	username: "root",
	password: "",
	host: "localhost",
	dialect: "mysql",
});

await sequelize.authenticate();
console.log("Connection to database has been established successfully.");

export default sequelize;
