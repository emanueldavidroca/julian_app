const session = require("express-session");
const {users,products,categories,carts} = require("../database/models");

let usersController = {
    client_login:(req,res)=>{
        res.render("./client_login");
    },
    client_logear:async (req,res)=>{
        try{
            const {password,email} = req.body;
            let result = await users.findOne({where:{password:password,email:email,rol:"cliente"}});
            console.log(result);
            if(result){
                let sess = req.session;
                sess.email = result.email;
                sess.usuario = result.usuario;
                sess.idUser = result.id;
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
        let sess = req.session;
        let carrito_lista = await carts.findAll({where:{idUser:sess.idUser},include:[{model:products,as:"producto"},{model:users,as:"usuario",where:{id:sess.idUser}}]});
        let categorias_lista = await categories.findAll();
        res.render("./client_cart",{categorias_lista,carrito_lista});
    },
    client_wishlist:async(req,res)=>{
        let categorias_lista = await categories.findAll();

        res.render("./client_wishlist",{categorias_lista});
    },
    client_scan:async(req,res)=>{
        let categorias_lista = await categories.findAll();

        res.render("./client_scan",{categorias_lista});
    },
    client_scanning:async(req,res)=>{
        try {
            let sess = req.session;
            let {barCode} = req.body;
            let find_product = await products.findOne({where:{barCode}});
            console.log(sess)
            if(find_product){
                let find_cart = await carts.findOne({where:{idUser:sess.idUser,idProduct:find_product.id}});
                if(find_cart){
                    let add_cart = await carts.update({quantity:(find_cart.quantity + 1)},{where:{id:find_cart.id}})
                    res.redirect("/client/scan?success=acumulado");
    
                }else{
                    let add_cart = await carts.create({idUser:sess.idUser,idProduct:find_product.id,quantity:1});
                    res.redirect("/client/scan?success=agregado");
                }
            }else{
                res.redirect("/client/scan?error=not-found");
    
            }
        } catch (error) {
            console.log(error)
        }

    },
    
}
module.exports = usersController;