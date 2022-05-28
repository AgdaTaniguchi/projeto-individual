const jogosModel = require("../models/jogosModel");

function listarJogos(req, res){
    jogosModel.listarJogos()
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

function pegarInfoJogo(req, res){
    const idJogo = req.query.idJogo;
    jogosModel.pegarInfoJogo(idJogo)
    .then((dadosJogo) => {
        if(dadosJogo.length == 0){
            res.status(403).send("ERRO: O jogo não foi encontrado no banco de dados!");
        }
        else{
            jogosModel.pegarCategoriasJogo(idJogo)
            .then((categorias) => {
                dadosJogo.push(categorias);

                console.log(dadosJogo);
                res.json(dadosJogo);
            })
            .catch((erro) => {
                console.log(erro);
                console.log(`Houve um erro ao pegar as categorias do jogo! Erro: ${erro.sqlMessage}`);
    	        res.status(500).json(erro.sqlMessage);
            });
        }
    })
    .catch((erro) => {
        console.log(erro);
        console.log(`Houve um erro ao pegar os dados do jogo! Erro: ${erro.sqlMessage}`);
        res.status(500).json(erro.sqlMessage);
    });
}

function pegarAvaliacoesJogo(req, res){
    const idJogo = req.query.idJogo;
    jogosModel.pegarAvaliacoesJogo(idJogo)
    .then((avaliacoes) => {
        if(avaliacoes.length == 0){
            res.status(404).send("Nenhuma avaliação encontrada.");
        }
        else{
            console.log(avaliacoes);
            res.json(avaliacoes);
        }
    })
    .catch((erro) =>{
        console.log(erro);
        console.log(`Houve um erro ao pegar as avaliações do jogo! Erro: ${erro.sqlMessage}`);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    listarJogos,
    pegarInfoJogo,
    pegarAvaliacoesJogo
}