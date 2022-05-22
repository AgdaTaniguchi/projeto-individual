const mysql = require("mysql2");

const mySqlConfig = {
    host: 'localhost',
    user: 'root',
    database: 'AvaliaOGame',
    password: '1234',
    port: 3307
}

function executar(comando){
    return new Promise(function (resolve, reject){
        const conexao = mysql.createConnection(mySqlConfig);
        conexao.connect();
        conexao.query(comando, function(erro, resultados){
            conexao.end();
            if(erro){
                reject(erro);
            }
            console.log(resultados);
            resolve(resultados);
        });
        conexao.on('error', function(erro){
            return ("Erro no MySQL (local): ", erro.sqlMessage);
        });
    });
}

module.exports = {
    executar
}