var lista_jogos = [
    {
        nome: "minecraft",
        descricao: "Joguinho legal",
        desenvolvedora: "Mojang",
        categorias : [
            {
                categoria: "Simulação"
            },
            {
                categoria: "Ação"
            },
        ],
    },
    {
        nome: "valorant",
        descricao: "FPS tático",
        desenvolvedora: "Riot",
        categorias : [
            {
                categoria: "FPS"
            },
        ],
    },
    {
        nome: "overwatch",
        descricao: "fps",
        desenvolvedora: "Blizzard",
        categorias : [
            {
                categoria: "FPS"
            },
            {
                categoria: "Simulação"
            },
        ],
    },

];

for(let contador = 0; contador < lista_jogos.length; contador++){
    console.log(`INSERT INTO Jogo (nome, descricao, desenvolvedora) VALUES ('${lista_jogos[contador].nome}', '${lista_jogos[contador].descricao}', '${lista_jogos[contador].desenvolvedora}');`);
}

for(let jogo = 0; jogo < lista_jogos.length; jogo++){
    for(let cont_cat = 0; cont_cat < lista_jogos[jogo].categorias.length; cont_cat++){
        console.log(`INSERT INTO JogoCategoria (fkJogo, fkCategoria) VALUES (${jogo + 1}, (SELECT idCategoria FROM categoria WHERE nome = '${lista_jogos[jogo].categorias[cont_cat].categoria}'));`);
    }
}