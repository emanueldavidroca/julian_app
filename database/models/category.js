'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  //Relacion entre tablas
  class category extends Model {
    static associate(models) {
    }
  }
  //Columnas
  category.init({
    categoryName: DataTypes.STRING,
  }, {
    //Configuraciones generales de la tabla
    sequelize,
    modelName: 'category',
    paranoid:true,
    timestamps:true
  });
  return category;
};