const lista_jogos = [
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
            {
                categoria: "Um jogador"
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
    {
        nome: "portal 2",
        descricao: "Jogo top demais, nossa senhora, que jogo bom",
        desenvolvedora: "Blizzard",
        categorias : [
            {
                categoria: "Um jogador"
            },
            {
                categoria: "Multijogador"
            },
            {
                categoria: "Simulação"
            },
        ],
    },
    {
        nome: "league of legends",
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

const coresCategorias = {
    "Simulação" : "3c13d1",
    "FPS" : "d1133c",
    "Ação" : "128a16",
    "RPG" : "a5ad07",
    "Um jogador" : "23489e",
    "Multijogador" : "0dbd9f"
}

function imprimeCategorias(){
    let categorias = [];
    for(let ctdJogo = 0; ctdJogo < lista_jogos.length; ctdJogo++){
        for(let ctdCategoria = 0; ctdCategoria < lista_jogos[ctdJogo].categorias.length; ctdCategoria++){
            if(categorias.indexOf(lista_jogos[ctdJogo].categorias[ctdCategoria].categoria) == -1){
                categorias.push(lista_jogos[ctdJogo].categorias[ctdCategoria].categoria);
            }
        }
    }

    for(let contador = 0; contador < categorias.length; contador++){
        console.log(`INSERT INTO Categoria (nome, cor) VALUES ('${categorias[contador]}', '${coresCategorias[categorias[contador]]}');`);
    }
}

function imprimeJogos(){
    for(let contador = 0; contador < lista_jogos.length; contador++){
        console.log(`INSERT INTO Jogo (nome, descricao, desenvolvedora) VALUES ('${lista_jogos[contador].nome}', '${lista_jogos[contador].descricao}', '${lista_jogos[contador].desenvolvedora}');`);
    }
}

function imprimeJogosCategorias(){
    for(let jogo = 0; jogo < lista_jogos.length; jogo++){
        for(let cont_cat = 0; cont_cat < lista_jogos[jogo].categorias.length; cont_cat++){
            console.log(`INSERT INTO JogoCategoria (fkJogo, fkCategoria) VALUES (${jogo + 1}, (SELECT idCategoria FROM categoria WHERE nome = '${lista_jogos[jogo].categorias[cont_cat].categoria}'));`);
        }
    }
}

function imprimeTudo(){
    imprimeCategorias();
    console.log();
    imprimeJogos();
    console.log();
    imprimeJogosCategorias();
}

imprimeTudo();