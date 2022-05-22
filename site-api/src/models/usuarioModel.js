const database = require("../database/config");

function entrar(email, senha){
    console.log(`Acessei o usuarioModel. Function entrar(${email}, ${senha})`);
    const comando = `SELECT * FROM Usuario WHERE email = '${email}' AND senha = '${senha}'`;
    
    console.log(`Executando a instrução SQL: ${comando}`);
    return database.executar(comando);
}

module.exports = {
    entrar
}