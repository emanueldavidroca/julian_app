const session = require("express-session");
const { Op } = require("sequelize");
const {users} = require("../database/models");
let indexController = {
    index:async (req, res) => {
        try {
            res.render("./admin_login");
        } catch (error) {
            console.log(error);
        }
        
    },
    login: (req, res) => {
        res.render("./login");
    }
}

module.exports = indexController;