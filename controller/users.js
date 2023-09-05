const session = require("express-session");
const {users} = require("../database/models");

let usersController = {
    login:(req,res)=>{
        let saludo = "hola";
        let despedida = "chau";
        res.render("./admin_login",{saludo,despedida});
    },
    logear:async (req,res)=>{
        try{
            const {password,email} = req.body;
            let result = await users.findOne({where:{password:password,email:email}});
            
            if(result){
                sess = req.session;
                sess.email = result.email;
                sess.usuario = result.usuario;
                sess.id = result.id;
                req.session.save(function(err) {
                    console.log("saved");
                })
                res.redirect("./admin_menu");
            }
            else{
                res.render("./admin_login",{error:true});
            }
        }
        catch(e){
            console.log(e);
        }
    },
    home:(req,res)=>{
        res.render("./client_home");
    },
    electros:(req,res)=>{
        res.render("./client_electros");
    },
    cart:(req,res)=>{
        res.render("./client_cart");
    },
    wishlist:(req,res)=>{
        res.render("./client_wishlist");
    },
}
module.exports = usersController;