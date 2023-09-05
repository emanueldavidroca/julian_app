var express = require('express');
var router = express.Router();
let usersController = require("../controller/users");

/* GET users listing. */
router.get("/login",usersController.login);
router.post("/login",usersController.logear);
router.get("/wishlist",usersController.wishlist);
router.get("/home",usersController.home);
router.get("/electros",usersController.electros);
router.get("/cart",usersController.cart);


module.exports = router;
