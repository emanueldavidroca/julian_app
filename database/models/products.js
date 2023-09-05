'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  //Relacion entre tablas
  class orders extends Model {
    static associate(models) {
    }
  }
  //Columnas
  orders.init({
    productName: DataTypes.STRING,
    description: DataTypes.STRING,
    barCode: DataTypes.STRING,
    idCategory: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    img: DataTypes.STRING,
    stock: DataTypes.INTEGER,
  }, {
    //Configuraciones generales de la tabla
    sequelize,
    modelName: 'orders',
    paranoid:true,
    timestamps:true
  });
  return orders;
};