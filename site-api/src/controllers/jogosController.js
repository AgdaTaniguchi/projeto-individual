const jogosModel = require("../models/jogosModel");

function listar(req, res){
    jogosModel.listar()
    .then((resultado) => {
        if(resultado.length == 0){
            res.status(403).send("Nenhum jogo cadastrado no banco de dados!");
        }
        else{
            res.json(resultado);
        }
    })
    .catch((erro) =>{
        console.log(erro);
        console.log(`Houve um erro ao listar os jogos! Erro: ${erro.sqlMessage}`);
        res.status(500).json(erro.sqlMessage);
    });
}

function pegarInfo(req, res){
    const idJogo = req.query.idJogo;
    jogosModel.pegarInfo(idJogo)
    .then((resultado) => {
        if(resultado.length == 0){
            res.status(403).send("ERRO: O jogo não foi encontrado no banco de dados!");
        }
        else{
            res.json(resultado);
        }
    })
    .catch((erro) => {
        console.log(erro);
        console.log(`Houve um erro ao pegar os dados do jogo! Erro: ${erro.sqlMessage}`);
        res.status(500).json(erro.sqlMessage);
    });
}

function filtrar(req, res){
    const idCategoria = req.query.idCategoria;
    jogosModel.filtrar(idCategoria)
    .then((resultado) => {
        if(resultado.length == 0){
            res.status(403).send("Nenhum jogo foi encontrado na lista!");
        }
        else{
            res.json(resultado);
        }
    })
    .catch((erro) => {
        console.log(erro);
        console.log(`Houve um erro ao pegar os jogos! Erro: ${erro.sqlMessage}`);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    listar,
    pegarInfo,
    filtrar
}