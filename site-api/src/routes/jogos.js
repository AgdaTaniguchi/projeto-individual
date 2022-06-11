const express = require("express");
const router = express.Router();

const jogosController = require("../controllers/jogosController");

router.get("/listarJogos", function(req, res){
    jogosController.listarJogos(req, res);
});

router.get("/pegarInfoJogo", function(req, res){
    jogosController.pegarInfoJogo(req, res);
});

router.get("/pegarAvaliacoesJogo", function(req, res){
    jogosController.pegarAvaliacoesJogo(req, res);
});

router.get("/sugerirJogos", function(req, res){
    jogosController.sugerirJogos(req, res);
});

router.get("/historicoAvaliacao", function(req, res){
    jogosController.historicoAvaliacao(req, res);
});

router.get("/pegarTop5", function(req, res){
    jogosController.pegarTop5(req, res);
});

router.post("/avaliarJogo", function(req, res){
    jogosController.avaliarJogo(req, res);
});

router.post("/atualizarAvaliacaoJogo", function(req, res){
    jogosController.atualizarAvaliacaoJogo(req, res);
});

module.exports = router;