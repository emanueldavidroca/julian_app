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
    idUser: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
    status: DataTypes.STRING,
  }, {
    //Configuraciones generales de la tabla
    sequelize,
    modelName: 'orders',
    paranoid:true,
    timestamps:true
  });
  return orders;
};