const session = require("express-session");
const {users} = require("../database/models");

let usersController = {
    login:(req,res)=>{
        res.render("./admin_login");
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
    admin_menu:(req,res)=>{
        res.render("./admin_menu");
    },
}
module.exports = usersController;