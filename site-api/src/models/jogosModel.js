const database = require("../database/config");

function listarJogos(filtrar, ordenar = "idJogo"){
    let comando = `SELECT idJogo, J.nome AS jogo, C.nome AS categoria, cor FROM Jogo J LEFT JOIN JogoCategoria ON idJogo = fkJogo LEFT JOIN Categoria C ON idCategoria = fkCategoria `;
    
    if(filtrar){
        comando += `WHERE C.nome = '${filtrar}' `;
    }

    if(ordenar){
        comando += `ORDER BY ${ordenar} `;
    }
    
    console.log(`Executando a instrução SQL: ${comando}`);
    return database.executar(comando);
}

function listarCategorias(){
    const comando = `SELECT nome, cor FROM categoria`;

    console.log(`Executando a instrução SQL: ${comando}`);
    return database.executar(comando);
}

function pegarInfoJogo(idJogo){
    const comando = `SELECT nome, descricao, desenvolvedora FROM Jogo WHERE idJogo = ${idJogo}`;

    console.log(`Executando a instrução SQL: ${comando}`);
    return database.executar(comando);
}

function pegarCategoriasJogo(idJogo){
    const comando = `SELECT nome, cor FROM Categoria JOIN jogoCategoria ON fkCategoria = idCategoria AND fkJogo = ${idJogo}`;

    console.log(`Executando a instrução SQL: ${comando}`);
    return database.executar(comando);
}

function pegarAvaliacoesJogo(idJogo){
    let comando = `SELECT nick, dataAvaliacao, comentario, notaAudio, notaVisual, notaJogabilidade, notaCampanha, notaDiversao FROM Avaliacao INNER JOIN usuario ON idUsuario = fkUsuario WHERE fkJogo = ${idJogo} ORDER BY dataAvaliacao DESC`;

    console.log(`Executando a instrução SQL: ${comando}`);
    return database.executar(comando);
}

module.exports = {
    listarJogos,
    listarCategorias,
    pegarInfoJogo,
    pegarCategoriasJogo,
    pegarAvaliacoesJogo
}