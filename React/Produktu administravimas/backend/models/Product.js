import { DataTypes } from 'sequelize';
import sequelize from '../config/connect-sequelize.js';


const Product = sequelize.define(
    'Product',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description:{
        type: DataTypes.STRING(2000),
        allowNull: false
      },
      price:{
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      status: {
        type: DataTypes.ENUM(["Aktyvus", "Nebetiekiamas", "Mažėjantis likutis"]),
        allowNull: false,
      },
    },
    {
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
      tableName: "product"
    },
  );

  
  Product.addHook("beforeValidate", (product)=>{
    if(product.status) return;
    if(product.quantity && product.quantity < 10){
      product.status = "Mažėjantis likutis";
    }
    else{
      product.status = "Aktyvus";
    }
  });
  export default Product;