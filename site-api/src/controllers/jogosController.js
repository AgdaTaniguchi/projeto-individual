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

module.exports = {
    listar
}