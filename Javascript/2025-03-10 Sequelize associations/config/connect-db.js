import Sequelize from "sequelize";

const sequelize = new Sequelize("sql_associations", "root", "", {
	host: "localhost",
	dialect: "mysql",
});
await sequelize.authenticate();

export default sequelize;
