let express = require('express');
let router = express.Router();
let adminController = require("../controller/admin");

/* GET users listing. */
router.get("/login",adminController.menu);
router.get("/menu",adminController.menu);
router.get("/usuarios",adminController.usuarios);
router.post("/usuarios",adminController.crearUsuarios);
router.get("/editar",adminController.editar);
router.get("/pedidos",adminController.pedidos);
router.get("/productos",adminController.productos);
router.post("/productos",adminController.crearProductos);


module.exports = router;