const database = require("../database/config");

function entrar(email, senha){
    const comando = `SELECT * FROM Usuario WHERE email = '${email}' AND senha = MD5('${senha}')`;
    
    console.log(`Executando a instrução SQL: ${comando}`);
    return database.executar(comando);
}

function cadastrar(nome, nick, email, senha){
    const comando = `INSERT INTO Usuario (nome, nick, email, senha, dataCadastro) VALUES ('${nome}', '${nick}', '${email}', MD5('${senha}'), NOW())`;
    
    console.log(`Executando a instrução SQL: ${comando}`);
    return database.executar(comando);
}

function atualizar(nome, nick, email, idUsuario){
    const comando = `UPDATE Usuario SET nome = '${nome}', nick = '${nick}', email = '${email}' WHERE idUsuario = ${idUsuario}`;
    
    console.log(`Executando a instrução SQL: ${comando}`);
    return database.executar(comando);
}

function sugerir(jogo, categoria, idUsuario){
    const comando = `INSERT INTO JogoSugerido (nome, categoria, fkUsuario) VALUES ('${jogo}', '${categoria}', ${idUsuario})`;
    
    console.log(`Executando a instrução SQL: ${comando}`);
    return database.executar(comando);
}

module.exports = {
    entrar,
    cadastrar,
    atualizar,
    sugerir
}