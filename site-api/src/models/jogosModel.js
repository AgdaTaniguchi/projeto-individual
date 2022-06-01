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
    const comando = `SELECT idUsuario, nick, dataAvaliacao, comentario, notaAudio, notaVisual, notaJogabilidade, notaHistoria, notaDiversao FROM Avaliacao INNER JOIN usuario ON idUsuario = fkUsuario WHERE fkJogo = ${idJogo} ORDER BY dataAvaliacao DESC`;

    console.log(`Executando a instrução SQL: ${comando}`);
    return database.executar(comando);
}

function avaliarJogo(audio, visual, jogabilidade, historia, diversao, comentario, idJogo, idUsuario){
    const comando = `INSERT INTO avaliacao (fkJogo, fkUsuario, dataAvaliacao, comentario, notaAudio, notaVisual, notaJogabilidade, notaHistoria, notaDiversao) VALUES (${idJogo}, ${idUsuario}, NOW(), '${comentario}', ${audio}, ${visual}, ${jogabilidade}, ${historia}, ${diversao})`;

    console.log(`Executando a instrução SQL: ${comando}`);
    return database.executar(comando);
}

function atualizarAvaliacaoJogo(audio, visual, jogabilidade, historia, diversao, comentario, idJogo, idUsuario){
    const comando = `UPDATE avaliacao SET notaAudio = ${audio}, notaVisual = ${visual}, notaJogabilidade = ${jogabilidade}, notaHistoria = ${historia}, notaDiversao = ${diversao}, comentario = '${comentario}', dataAvaliacao = NOW() WHERE fkJogo = ${idJogo} AND fkUsuario = ${idUsuario}`;

    console.log(`Executando a instrução SQL: ${comando}`);
    return database.executar(comando);
}

module.exports = {
    listarJogos,
    listarCategorias,
    pegarInfoJogo,
    pegarCategoriasJogo,
    pegarAvaliacoesJogo,
    avaliarJogo,
    atualizarAvaliacaoJogo,
}