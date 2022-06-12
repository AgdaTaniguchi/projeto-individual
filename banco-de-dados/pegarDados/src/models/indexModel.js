const database = require("../database/config");

function listarUsuario(){
    const comando = `SELECT * FROM Usuario`;

    return database.executar(comando);
}

function listarJogoSugerido(){
    const comando = `SELECT * FROM JogoSugerido`;

    return database.executar(comando);
}

function listarJogo(){
    const comando = `SELECT * FROM Jogo`;

    return database.executar(comando);
}

function listarCategoria(){
    const comando = `SELECT * FROM Categoria`;

    return database.executar(comando);
}

function listarJogoCategoria(){
    const comando = `SELECT * FROM JogoCategoria`;

    return database.executar(comando);
}

function listarAvaliacao(){
    const comando = `SELECT * FROM Avaliacao`;

    return database.executar(comando);
}

module.exports = {
    listarUsuario,
    listarJogoSugerido,
    listarJogo,
    listarCategoria,
    listarJogoCategoria,
    listarAvaliacao,
}