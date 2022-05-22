const usuarioModel = require("../models/usuarioModel");

function entrar(req, res){
    const email = req.body.emailServer;
    const senha = req.body.senhaServer;

    if(email == undefined){
        res.status(400).send("Preencha o seu e-mail corretamente!");
    }
    else if(senha == undefined){
        res.status(400).send("Preencha a sua senha corretamente!");
    }
    else{
        usuarioModel.entrar(email, senha)
        .then((resultado) => {
            console.log(`Resultados encontrados: ${resultado.length}`);
            console.log(`Resultados: ${JSON.stringify(resultado)}`);

            if(resultado.length == 1){
                console.log(resultado);
                res.json(resultado[0]);
            }
            else if(resultado.length == 0){
                res.status(403).send("E-mail e/ou senha inválido(s)");
            }
            else{
                res.status(403).send("Mais de um usuário com o mesmo login e senha!");
            }
        })
        .catch((erro) =>{
            console.log(erro);
            console.log(`Houve um erro ao realizar o login! Erro: ${erro.sqlMessage}`);
            res.status(500).json(erro.sqlMessage);
        });
    }
}

module.exports = {
    entrar
}