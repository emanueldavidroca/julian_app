'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  //Relacion entre tablas
  class users extends Model {
    static associate(models) {
      users.hasOne(models.carts,{foreignKey:"idUser"})

    }
  }
  //Columnas
  users.init({
    usuario: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    rol: DataTypes.STRING,
  }, {
    //Configuraciones generales de la tabla
    sequelize,
    modelName: 'users',
    paranoid:false,
    timestamps:false
  });
  return users;
};