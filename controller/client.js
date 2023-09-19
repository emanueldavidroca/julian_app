const session = require("express-session");
const {users,products,categories} = require("../database/models");

let usersController = {
    client_login:(req,res)=>{
        res.render("./admin_login");
    },
    client_logear:async (req,res)=>{
        try{
            const {password,email} = req.body;
            let result = await users.findOne({where:{password:password,email:email,rol:"cliente"}});
            
            if(result){
                let sess = req.session;
                sess.email = result.email;
                sess.usuario = result.usuario;
                sess.id = result.id;
                sess.rol = result.rol;
                req.session.save(function(err) {
                    console.log("saved");
                })
                res.redirect("/client/home");
            }
            else{
                res.render("/client/login",{error:true});
            }
        }
        catch(e){
            console.log(e);
        }
    },
    client_home:async(req,res)=>{
        let productos_lista = await products.findAll();
        let categorias_lista = await categories.findAll();
        res.render("./client_home",{productos_lista,categorias_lista});
    },
    client_coleccion:async(req,res)=>{
        let categorias_lista = await categories.findAll();
        let idCategoria = req.params.id;
        let categoria_actual = await categories.findOne({where:{id:idCategoria}});
        let productos = await products.findAll({where:{idCategoria}});
        res.render("./client_coleccion",{productos,categoria_actual,categorias_lista});
    },
    client_cart:async(req,res)=>{
        let categorias_lista = await categories.findAll();
        res.render("./client_cart",{categorias_lista});
    },
    client_wishlist:async(req,res)=>{
        let categorias_lista = await categories.findAll();
        res.render("./client_wishlist",{categorias_lista});
    },
}
module.exports = usersController;