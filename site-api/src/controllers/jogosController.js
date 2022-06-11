const jogosModel = require("../models/jogosModel");

function listarJogos(req, res){
    const ordem = req.query.ordem || undefined;
    const filtro = req.query.filtro || "todas";
    jogosModel.listarJogos(filtro, ordem)
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

function avaliarJogo(req, res){
    const audio = req.body.notaAudio;
    const visual = req.body.notaVisual;
    const jogabilidade = req.body.notaJogabilidade;
    const historia = req.body.notaHistoria;
    const diversao = req.body.notaDiversao;
    const comentario = req.body.comentario;
    const idJogo = req.body.idJogo;
    const idUsuario = req.body.idUsuario;

    if(audio == undefined){
        res.status(400).send("Preencha a nota do áudio corretamente!");
    }
    else if(visual == undefined){
        res.status(400).send("Preencha a nota do visual corretamente!");
    }
    else if(jogabilidade == undefined){
        res.status(400).send("Preencha a nota da jogabilidade corretamente!");
    }
    else if(historia == undefined){
        res.status(400).send("Preencha a nota da historia corretamente!");
    }
    else if(diversao == undefined){
        res.status(400).send("Preencha a nota da diversão corretamente!");
    }
    else if(comentario == undefined){
        res.status(400).send("Preencha o comentário corretamente!");
    }
    else if(idJogo == undefined){
        res.status(400).send("ID do jogo não reconhecido!");
    }
    else if(idUsuario == undefined){
        res.status(400).send("ID do usuário não reconhecido!");
    }
    else{
        jogosModel.avaliarJogo(audio, visual, jogabilidade, historia, diversao, comentario, idJogo, idUsuario)
        .then((resultado) => {
            res.json(resultado);
        })
        .catch((erro) => {
            console.log(erro);
            console.log(`Houve um erro ao pegar as avaliações do jogo! Erro: ${erro.sqlMessage}`);
            res.status(500).json(erro.sqlMessage);
        });
    }

}

function atualizarAvaliacaoJogo(req, res){
    const audio = req.body.notaAudio;
    const visual = req.body.notaVisual;
    const jogabilidade = req.body.notaJogabilidade;
    const historia = req.body.notaHistoria;
    const diversao = req.body.notaDiversao;
    const comentario = req.body.comentario;
    const idJogo = req.body.idJogo;
    const idUsuario = req.body.idUsuario;

    if(audio == undefined){
        res.status(400).send("Preencha a nota do áudio corretamente!");
    }
    else if(visual == undefined){
        res.status(400).send("Preencha a nota do visual corretamente!");
    }
    else if(jogabilidade == undefined){
        res.status(400).send("Preencha a nota da jogabilidade corretamente!");
    }
    else if(historia == undefined){
        res.status(400).send("Preencha a nota da historia corretamente!");
    }
    else if(diversao == undefined){
        res.status(400).send("Preencha a nota da diversão corretamente!");
    }
    else if(comentario == undefined){
        res.status(400).send("Preencha o comentário corretamente!");
    }
    else if(idJogo == undefined){
        res.status(400).send("ID do jogo não reconhecido!");
    }
    else if(idUsuario == undefined){
        res.status(400).send("ID do usuário não reconhecido!");
    }
    else{
        jogosModel.atualizarAvaliacaoJogo(audio, visual, jogabilidade, historia, diversao, comentario, idJogo, idUsuario)
        .then((resultado) => {
            res.json(resultado);
        })
        .catch((erro) => {
            console.log(erro);
            console.log(`Houve um erro ao pegar as avaliações do jogo! Erro: ${erro.sqlMessage}`);
            res.status(500).json(erro.sqlMessage);
        });
    }
}

function sugerirJogos(req, res){
    const idUsuario = req.query.idUsuario;
    jogosModel.sugerirJogos(idUsuario)
    .then((resultado) => {
        if(resultado.length == 0){
            res.status(403).send("Nenhum jogo cadastrado!");
        }
        else{
            res.json(resultado);
        }
    })
    .catch((erro) =>{
        console.log(erro);
        console.log(`Houve um erro ao sugerir os jogos! Erro: ${erro.sqlMessage}`);
        res.status(500).json(erro.sqlMessage);
    });
}

function historicoAvaliacao(req, res){
    const idUsuario = req.query.idUsuario;
    jogosModel.historicoAvaliacao(idUsuario)
    .then((resultado) => {
        res.json(resultado);
    })
    .catch((erro) =>{
        console.log(erro);
        console.log(`Houve um erro ao sugerir os jogos! Erro: ${erro.sqlMessage}`);
        res.status(500).json(erro.sqlMessage);
    });
}

function pegarTop5(req, res){
    jogosModel.pegarTop5()
    .then((resultado) => {
        res.json(resultado);
    })
    .catch((erro) =>{
        console.log(erro);
        console.log(`Houve um erro ao sugerir os jogos! Erro: ${erro.sqlMessage}`);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    listarJogos,
    pegarInfoJogo,
    pegarAvaliacoesJogo,
    avaliarJogo,
    atualizarAvaliacaoJogo,
    sugerirJogos,
    historicoAvaliacao,
    pegarTop5,
}