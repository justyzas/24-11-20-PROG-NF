import { DataTypes } from 'sequelize';
import sequelize from '../config/connect-sequelize.js';
import User from './user.js';
import Product from './Product.js';


const ProductActionsHistory = sequelize.define(
    'ProductActionsHistory',
    {
      actionType: {
        type: DataTypes.STRING,
        allowNull: false
      },
      details:{
        type: DataTypes.STRING
      },

    },
    {
      timestamps: true,
      createdAt: "date",
      updatedAt: false,
      tableName: "product_actions_history"
    },
  );


  User.hasMany(ProductActionsHistory);
  ProductActionsHistory.belongsTo(User, {
    foreignKey: {
      field: "userId",
    }
  });

  Product.hasMany(ProductActionsHistory);
  ProductActionsHistory.belongsTo(Product, {
    foreignKey: {
      field: "productId",
    }
  });

  export default ProductActionsHistory;