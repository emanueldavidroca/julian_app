const session = require("express-session");
const { Op } = require("sequelize");
const {users} = require("../database/models");
let adminController = {
    login: (req, res) => {
        res.render("./admin_login");
    },
    menu: (req, res) => {
        res.render("./admin_menu");
    },
    pedidos: (req, res) => {
        res.render("./admin_pedidos");
    },
    productos: (req, res) => {
        res.render("./admin_productos");
    },
    crearProductos: (req, res) => {
        res.render("./admin_productos");
    },
    usuarios: (req, res) => {
        res.render("./admin_usuarios");
    },
    crearUsuarios: (req, res) => {
        res.render("./admin_productos");
    },
    editar: (req, res) => {
        res.render("./editar");
    }
}

module.exports = adminController;