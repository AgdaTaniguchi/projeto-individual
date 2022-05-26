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

function cadastrar(req, res){
    const nome = req.body.nomeServer;
    const nick = req.body.nickServer;
    const email = req.body.emailServer;
    const senha = req.body.senhaServer;

    if(email == undefined){
        res.status(400).send("Preencha o seu e-mail corretamente!");
    }
    else if(senha == undefined){
        res.status(400).send("Preencha a sua senha corretamente!");
    }
    else if(nome == undefined){
        res.status(400).send("Preencha o seu nome corretamente!");
    }
    else if(nick == undefined){
        res.status(400).send("Preencha o seu nick corretamente!");
    }
    else{
        usuarioModel.cadastrar(nome, nick, email, senha)
        .then((resultado) => {
            res.json(resultado);
        })
        .catch((erro) =>{
            console.log(erro);
            console.log(`Houve um erro ao realizar o cadastro! Erro: ${erro.sqlMessage}`);
            res.status(500).json(erro.sqlMessage);
        });
    }
}

function atualizar(req, res){
    const nome = req.body.nomeServer;
    const nick = req.body.nickServer;
    const email = req.body.emailServer;
    const idUsuario = req.body.idUsuarioServer;

    if(email == undefined){
        res.status(400).send("Preencha o seu e-mail corretamente!");
    }
    else if(nome == undefined){
        res.status(400).send("Preencha o seu nome corretamente!");
    }
    else if(nick == undefined){
        res.status(400).send("Preencha o seu nick corretamente!");
    }
    else if(idUsuario == undefined){
        res.status(400).send("Usuário não encontrado, faça o login novamente!");
    }
    else{
        usuarioModel.atualizar(nome, nick, email, idUsuario)
        .then((resultado) => {
            res.json(resultado);
        })
        .catch((erro) =>{
            console.log(erro);
            console.log(`Houve um erro ao realizar a alteração do usuário! Erro: ${erro.sqlMessage}`);
            res.status(500).json(erro.sqlMessage);
        });
    }
}

function sugerir(req, res){
    const jogo = req.body.jogoServer;
    const categoria = req.body.categoriaServer;
    const idUsuario = req.body.idUsuarioServer;

    if(jogo == undefined){
        res.status(400).send("Preencha o nome do jogo corretamente!");
    }
    else if(categoria == undefined){
        res.status(400).send("Preencha a categoria corretamente!");
    }
    else if(idUsuario == undefined){
        res.status(400).send("Usuário não encontrado, faça o login novamente!");
    }
    else{
        usuarioModel.sugerir(jogo, categoria, idUsuario)
        .then((resultado) => {
            res.json(resultado);
        })
        .catch((erro) =>{
            console.log(erro);
            console.log(`Houve um erro ao realizar a sugestão de jogo! Erro: ${erro.sqlMessage}`);
            res.status(500).json(erro.sqlMessage);
        });
    }
}

module.exports = {
    entrar,
    cadastrar,
    atualizar,
    sugerir
}