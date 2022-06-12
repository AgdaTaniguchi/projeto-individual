const express = require("express");
const router = express.Router();

const indexController = require("../controllers/indexController");

router.get("/", function(_, res){
    res.render("index");
});

router.get("/listarUsuario", (req, res) => {
    indexController.listarUsuario(req, res);
});

router.get("/listarJogoSugerido", (req, res) => {
    indexController.listarJogoSugerido(req, res);
});

router.get("/listarJogo", (req, res) => {
    indexController.listarJogo(req, res);
});

router.get("/listarCategoria", (req, res) => {
    indexController.listarCategoria(req, res);
});

router.get("/listarJogoCategoria", (req, res) => {
    indexController.listarJogoCategoria(req, res);
});

router.get("/listarAvaliacao", (req, res) => {
    indexController.listarAvaliacao(req, res);
});

module.exports = router;