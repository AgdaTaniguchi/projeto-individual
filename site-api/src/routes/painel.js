const express = require("express");
const router = express.Router();

const painelController = require("../controllers/painelController");

router.get("/pegarKpisJogos", function(req, res){
    painelController.pegarKpisJogos(req, res);
});

router.get("/jogosPorCategoria", function(req, res){
    painelController.jogosPorCategoria(req, res);
});

router.get("/pegarKpisUsuarios", function(req, res){
    painelController.pegarKpisUsuarios(req, res);
});

router.get("/novosUsuarios", function(req, res){
    painelController.novosUsuarios(req, res);
});

module.exports = router;