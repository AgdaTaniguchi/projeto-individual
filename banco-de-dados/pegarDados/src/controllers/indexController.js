const indexModel = require("../models/indexModel");

function listarUsuario(req, res){
    indexModel.listarUsuario()
    .then((resultado) => {
        res.json(resultado);
    })
    .catch((erro) => {
        console.log(erro);
        console.log(erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarJogoSugerido(req, res){
    indexModel.listarJogoSugerido()
    .then((resultado) => {
        res.json(resultado);
    })
    .catch((erro) => {
        console.log(erro);
        console.log(erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarJogo(req, res){
    indexModel.listarJogo()
    .then((resultado) => {
        res.json(resultado);
    })
    .catch((erro) => {
        console.log(erro);
        console.log(erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarCategoria(req, res){
    indexModel.listarCategoria()
    .then((resultado) => {
        res.json(resultado);
    })
    .catch((erro) => {
        console.log(erro);
        console.log(erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarJogoCategoria(req, res){
    indexModel.listarJogoCategoria()
    .then((resultado) => {
        res.json(resultado);
    })
    .catch((erro) => {
        console.log(erro);
        console.log(erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarAvaliacao(req, res){
    indexModel.listarAvaliacao()
    .then((resultado) => {
        res.json(resultado);
    })
    .catch((erro) => {
        console.log(erro);
        console.log(erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    listarUsuario,
    listarJogoSugerido,
    listarJogo,
    listarCategoria,
    listarJogoCategoria,
    listarAvaliacao,
}