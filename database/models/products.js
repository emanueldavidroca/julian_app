'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  //Relacion entre tablas
  class products extends Model {
    static associate(models) {
      products.belongsTo(models.categories,{foreignKey:"idCategoria",as:"categoria",targetKey:"id"});
    }
  }
  //Columnas
  products.init({
    productName: DataTypes.STRING,
    description: DataTypes.STRING,
    barCode: DataTypes.STRING,
    idCategoria: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    img: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    status: DataTypes.STRING,
  }, {
    //Configuraciones generales de la tabla
    sequelize,
    modelName: 'products',
    paranoid:true,
    timestamps:true
  });
  return products;
};