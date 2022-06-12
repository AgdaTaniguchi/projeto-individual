const database = require("../database/config");

function listarJogos(filtrar, ordenar = "idJogo"){
    let comando;

    if(ordenar == "maisAvaliados"){
        comando = `SELECT idJogo, J.nome AS jogo, C.nome AS categoria, cor FROM (
            SELECT idJogo, J.nome, COUNT(A.fkJogo) AS 'quantidade' FROM Jogo J
            LEFT JOIN Avaliacao A ON A.fkJogo = idJogo
            GROUP BY idJogo
        ) AS J
        LEFT JOIN JogoCategoria ON idJogo = fkJogo
        LEFT JOIN Categoria C ON idCategoria = fkCategoria `;

        if(filtrar != 'undefined' && filtrar != 'todas'){
            comando += `WHERE C.nome = '${filtrar}' `;
        }

        comando += 'ORDER BY quantidade DESC';
    }
    else if(ordenar == "menosAvaliados"){
        comando = `SELECT idJogo, J.nome AS jogo, C.nome AS categoria, cor FROM (
            SELECT idJogo, J.nome, COUNT(A.fkJogo) AS 'quantidade' FROM Jogo J
            LEFT JOIN Avaliacao A ON A.fkJogo = idJogo
            GROUP BY idJogo
            ORDER BY COUNT(A.fkJogo)
        ) AS J
        LEFT JOIN JogoCategoria ON idJogo = fkJogo
        LEFT JOIN Categoria C ON idCategoria = fkCategoria `;

        if(filtrar != 'undefined' && filtrar != 'todas'){
            comando += `WHERE C.nome = '${filtrar}' `;
        }

        comando += 'ORDER BY quantidade';
    }
    else{
        comando = `SELECT idJogo, J.nome AS jogo, C.nome AS categoria, cor FROM Jogo J LEFT JOIN JogoCategoria ON idJogo = fkJogo LEFT JOIN Categoria C ON idCategoria = fkCategoria `;
        
        if(filtrar != 'undefined' && filtrar != 'todas'){
            comando += `WHERE C.nome = '${filtrar}' `;
        }
    
        if(ordenar){
            comando += `ORDER BY ${ordenar} `;
        }
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

function sugerirJogos(idUsuario){
    const comando = `
        SELECT idJogo, J.nome AS jogo, C.nome AS categoria, cor FROM Jogo J
        INNER JOIN JogoCategoria ON fkJogo = idJogo
        INNER JOIN Categoria C ON fkCategoria = idCategoria
        WHERE C.nome = (
            SELECT nome FROM (
                SELECT C.nome, COUNT(*) AS quantidade FROM Avaliacao A
                INNER JOIN Jogo J ON idJogo = A.fkjogo
                INNER JOIN JogoCategoria JC ON JC.fkJogo = idJogo
                INNER JOIN Categoria C ON C.idCategoria = JC.fkCategoria
                WHERE fkUsuario = ${idUsuario}
                GROUP BY C.nome
                ORDER BY quantidade DESC
            ) AS categorias LIMIT 1
        )
        LIMIT 6
    `;

    console.log(`Executando a instrução SQL: ${comando}`);
    return database.executar(comando);
}

function historicoAvaliacao(idUsuario){
    const comando = `SELECT idJogo, J.nome AS jogo, C.nome AS categoria, cor FROM Avaliacao A
    INNER JOIN Jogo J ON idJogo = A.fkjogo
    INNER JOIN JogoCategoria JC ON JC.fkJogo = idJogo
    INNER JOIN Categoria C ON C.idCategoria = JC.fkCategoria
    WHERE fkUsuario = ${idUsuario}
    ORDER BY dataAvaliacao DESC`;

    console.log(`Executando a instrução SQL: ${comando}`);
    return database.executar(comando);
}

function pegarTop5(){
    const comando = `SELECT idJogo, COUNT(A.fkJogo) AS 'quantidade', J.nome FROM Avaliacao A
    INNER JOIN Jogo J ON A.fkJogo = idJogo
    WHERE DATE(dataAvaliacao) BETWEEN (CURRENT_DATE - INTERVAL 7 DAY) AND CURRENT_DATE
    GROUP BY A.fkJogo
    ORDER BY quantidade DESC
    LIMIT 5`;

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
    sugerirJogos,
    historicoAvaliacao,
    pegarTop5,
}