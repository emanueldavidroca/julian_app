const session = require("express-session");
const { Op } = require("sequelize");
const {users,products} = require("../database/models");
const { tryEach } = require("async");
let adminController = {
    admin_login: (req, res) => {
        res.render("./admin_login");
    },
    admin_logear: async(req, res) => {
        try {
            let {email,password} = req.body;
        
            let checkLogin = await users.findOne({where:{email:email,password:password,rol:"administrador"}});
            console.log(checkLogin)
            if(checkLogin){
                let sess = req.session;
                sess.email = checkLogin.email;
                sess.usuario = checkLogin.usuario;
                sess.id = checkLogin.id;
                sess.rol = checkLogin.rol;
                req.session.save(function(err) {
                    console.log("saved");
                })
                res.redirect("/admin/menu");
            }
            else{
                res.redirect("/admin/login");

            }
        } catch (error) {
            console.log(error)
        }
        
        //res.render("./admin_login");
    },
    admin_logout: (req, res) => {
        req.session.destroy((err)=>{
            console.log("destroy");
        });
        res.redirect("/admin/login");
    },
    admin_menu: (req, res) => {
        res.render("./admin_menu");
    },
    admin_pedidos: (req, res) => {
        res.render("./admin_pedidos");
    },
    admin_productos: (req, res) => {
        res.render("./admin_productos");
    },
    admin_crearProductos: async(req, res) => {
        try {
            let {productName,description,barCode,price,category,stock} = req.body;
            let result = await products.create({productName,description,barCode,price,idCategory:category,stock});
            if(result){
                res.redirect("/admin/productos");
            }
        } catch (error) {
            console.log(error)
        }
        
    },
    admin_usuarios: (req, res) => {
        res.render("./admin_usuarios");
    },
    admin_crearUsuarios: (req, res) => {
        res.render("./admin_productos");
    },
    admin_editar: (req, res) => {
        res.render("./editar");
    }
}

module.exports = adminController;