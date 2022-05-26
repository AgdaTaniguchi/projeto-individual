const express = require("express");
const router = express.Router();

const usuarioController = require("../controllers/usuarioController");

router.post("/entrar", function(req, res){
    usuarioController.entrar(req, res);
});

router.post("/cadastrar", function(req, res){
    usuarioController.cadastrar(req, res);
});

router.post("/atualizar", function(req, res){
    usuarioController.atualizar(req, res);
});

router.post("/sugerir", function(req, res){
    usuarioController.sugerir(req, res);
});

module.exports = router;