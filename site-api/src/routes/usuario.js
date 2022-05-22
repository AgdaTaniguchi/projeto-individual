const express = require("express");
const router = express.Router();

const usuarioController = require("../controllers/usuarioController");

router.post("/entrar", function(req, res){
    usuarioController.entrar(req, res);
})

module.exports = router;