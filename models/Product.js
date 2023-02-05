const { Model, DataTypes } = require('sequelize');
const { dateToString } = require('sqlstring');
const sequelize = require('../config/connection');


class Product extends Model {}

Product.init(
  {
    id: {
      type:DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    price: {
      type: DataTypes.DECIMAL(10, 4),
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: true,
    createdAt: true,
    updatedAt: 'updateTimestamp',
    freezeTableName: true,
    underscored: true,
    modelName: 'product'
  });

module.exports = Product;
