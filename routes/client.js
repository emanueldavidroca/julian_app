var express = require('express');
var router = express.Router();
let clientController = require("../controller/client");
let userRolValidation = require("../middlewares/userRolValidation");

/* GET users listing. */
router.get("/login",clientController.client_login);
router.post("/login",clientController.client_logear);
router.get("/wishlist",clientController.client_wishlist);
router.get("/scan",userRolValidation("cliente"),clientController.client_scan);
router.post("/scan",userRolValidation("cliente"),clientController.client_scanning);
router.get("/home",clientController.client_home);
router.get("/coleccion/:id",clientController.client_coleccion);
router.get("/cart",clientController.client_cart);


module.exports = router;
