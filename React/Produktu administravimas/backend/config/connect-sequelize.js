import { Sequelize } from "sequelize";

const sequelize = new Sequelize('product_administration_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

export default sequelize;