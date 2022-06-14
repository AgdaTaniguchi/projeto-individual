const database = require("../database/config");

function pegarKpisJogos(){
    const comando = `SELECT COUNT(*) AS 'qtdJogos', (SELECT COUNT(*) FROM Categoria) AS 'qtdCategorias', (SELECT COUNT(*) FROM Avaliacao) AS 'qtdAvaliacoes' FROM Jogo`;
    
    console.log(`Executando a instrução SQL: ${comando}`);
    return database.executar(comando);
}

function jogosPorCategoria(){
    const comando = `SELECT C.nome, COUNT(fkUsuario) AS 'qtdJogos' FROM Avaliacao A
        INNER JOIN Jogo ON A.fkJogo = idJogo
        INNER JOIN JogoCategoria JC ON JC.fkJogo = idJogo
        RIGHT JOIN Categoria C ON JC.fkCategoria = idCategoria
        GROUP BY C.nome
        ORDER BY idCategoria DESC`;
    
    console.log(`Executando a instrução SQL: ${comando}`);
    return database.executar(comando);
}

function pegarKpisUsuarios(){
    const comando = `SELECT COUNT(*) AS 'qtdUsuarios', (SELECT COUNT(*) FROM JogoSugerido) AS 'qtdSugestoes' FROM Usuario`;

    console.log(`Executando a instrução SQL: ${comando}`);
    return database.executar(comando);
}

function novosUsuarios(){
    const comando = `SELECT MONTH(dataCadastro) AS 'mes', COUNT(idUsuario) AS 'qtdUsuarios' FROM Usuario
        WHERE dataCadastro BETWEEN (CURRENT_DATE - INTERVAL 1 YEAR) AND CURRENT_DATE
        GROUP BY MONTH(dataCadastro)
        ORDER BY MONTH(dataCadastro)`;

    console.log(`Executando a instrução SQL: ${comando}`);
    return database.executar(comando);
}

function listarUsuarios(){
    const comando = `SELECT dataCadastro, email, nick, nome FROM Usuario ORDER BY dataCadastro DESC`;

    console.log(`Executando a instrução SQL: ${comando}`);
    return database.executar(comando);
}

function listarSugestoes(){
    const comando = `SELECT nick, email, JS.nome AS 'nome', categoria FROM JogoSugerido JS INNER JOIN Usuario ON fkUsuario = idUsuario`;

    console.log(`Executando a instrução SQL: ${comando}`);
    return database.executar(comando);
}

module.exports = {
    pegarKpisJogos,
    jogosPorCategoria,
    pegarKpisUsuarios,
    novosUsuarios,
    listarUsuarios,
    listarSugestoes,
}