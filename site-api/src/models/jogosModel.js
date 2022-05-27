const database = require("../database/config");

function listar(){
    const comando = `SELECT idJogo, J.nome AS jogo, C.nome AS categoria, cor FROM Jogo J LEFT JOIN JogoCategoria ON idJogo = fkJogo LEFT JOIN Categoria C ON idCategoria = fkCategoria ORDER BY idJogo`;
    
    console.log(`Executando a instrução SQL: ${comando}`);
    return database.executar(comando);
}

function pegarInfo(idJogo){
    const comando = `SELECT j.nome AS 'jogo', descricao, desenvolvedora, c.nome AS 'categoria', cor FROM Jogo j INNER JOIN JogoCategoria ON idJogo = fkJogo INNER JOIN Categoria c ON idCategoria = fkCategoria WHERE idJogo = ${idJogo}`;

    console.log(`Executando a instrução SQL: ${comando}`);
    return database.executar(comando);
}

module.exports = {
    listar,
    pegarInfo
}