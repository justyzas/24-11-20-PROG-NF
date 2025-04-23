import { DataTypes } from 'sequelize';
import sequelize from '../config/connect-sequelize.js';
import Product from './Product.js';

const ProductImage = sequelize.define(
    'ProductImage',
    {
     productImageFileName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
     }
    },
    {
      timestamps: false,
      tableName: "product_image"
    },
  );

  Product.hasMany(ProductImage);
  ProductImage.belongsTo(Product, {foreignKey: "productId"});

  export default ProductImage;