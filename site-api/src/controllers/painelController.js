const painelModel = require("../models/painelModel");

function pegarKpisJogos(req, res){
    painelModel.pegarKpisJogos()
    .then((resultado) => {
        res.json(resultado[0]);
    })
    .catch((erro) =>{
        console.log(erro);
        console.log(`Houve um erro ao pegar as KPI's dos jogos! Erro: ${erro.sqlMessage}`);
        res.status(500).json(erro.sqlMessage);
    });
}

function jogosPorCategoria(req, res){
    painelModel.jogosPorCategoria()
    .then((resultado) => {
        res.json(resultado);
    })
    .catch((erro) =>{
        console.log(erro);
        console.log(`Houve um erro ao pegar os jogos por categoria! Erro: ${erro.sqlMessage}`);
        res.status(500).json(erro.sqlMessage);
    });
}

function pegarKpisUsuarios(req, res){
    painelModel.pegarKpisUsuarios()
    .then((resultado) => {
        res.json(resultado[0]);
    })
    .catch((erro) =>{
        console.log(erro);
        console.log(`Houve um erro ao pegar as KPI's dos usuários! Erro: ${erro.sqlMessage}`);
        res.status(500).json(erro.sqlMessage);
    });
}

function novosUsuarios(req, res){
    painelModel.novosUsuarios()
    .then((resultado) => {
        res.json(resultado);
    })
    .catch((erro) =>{
        console.log(erro);
        console.log(`Houve um erro ao pegar os novos usuários! Erro: ${erro.sqlMessage}`);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarUsuarios(req, res){
    painelModel.listarUsuarios()
    .then((resultado) => {
        res.json(resultado);
    })
    .catch((erro) => {
        console.log(erro);
        console.log(`Houve um erro ao listar os usuários! Erro: ${erro.sqlMessage}`);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarSugestoes(req, res){
    painelModel.listarSugestoes()
    .then((resultado) => {
        res.json(resultado);
    })
    .catch((erro) => {
        console.log(erro);
        console.log(`Houve um erro ao listar as sugestões! Erro: ${erro.sqlMessage}`);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    pegarKpisJogos,
    jogosPorCategoria,
    pegarKpisUsuarios,
    novosUsuarios,
    listarUsuarios,
    listarSugestoes,
}