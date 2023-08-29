var express = require('express');
var router = express.Router();
let usersController = require("../controller/users");

/* GET users listing. */
router.get("/login",usersController.login);
router.post("/login",usersController.logear);
router.get("/admin_menu",usersController.admin_menu);


module.exports = router;
