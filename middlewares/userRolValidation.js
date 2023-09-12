const userRolValidation = (type) =>{
    return (req, res, next) => {
        let sess = req.session ?? null;
        console.log(sess);
        if(sess.email){
            next()
        }
        else{
            if(type == "administrador")
                res.redirect("/admin/login")
            if(type == "cliente")
                res.redirect("/client/login")
        }
    }
}
module.exports = userRolValidation;
