const express = require("express");
const router = express.Router();

const jogosController = require("../controllers/jogosController");

router.get("/listar", function(req, res){
    jogosController.listar(req, res);
});

router.get("/pegarInfo", function(req, res){
    jogosController.pegarInfo(req, res);
});

module.exports = router;