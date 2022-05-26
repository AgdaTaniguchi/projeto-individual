const database = require("../database/config");

function listar(){
    const comando = `SELECT idJogo, J.nome AS jogo, C.nome AS categoria, cor FROM Jogo J LEFT JOIN JogoCategoria ON idJogo = fkJogo LEFT JOIN Categoria C ON idCategoria = fkCategoria ORDER BY idJogo`;
    
    console.log(`Executando a instrução SQL: ${comando}`);
    return database.executar(comando);
}

module.exports = {
    listar
}