// const local = "console";
const local = "html";

const lista_jogos = [
    {
        nome: "minecraft",
        descricao: "Minecraft é um jogo de construção e sobrevivência em mundo aberto, na qual os jogadores interajem com vários tipos de blocos num ambiente tridimensional. Neste ambiente, jogadores constroem estruturas criativas em vários modos de jogo.",
        desenvolvedora: "Mojang Studios",
        categorias : [
            {
                categoria: "Simulação"
            },
            {
                categoria: "Um jogador"
            },
            {
                categoria: "Multijogador"
            },
        ],
    },
    {
        nome: "valorant",
        descricao: "Um jogo de tiro tático 5v5 gratuito da Riot Games.",
        desenvolvedora: "Riot Games",
        categorias : [
            {
                categoria: "FPS"
            },
            {
                categoria: "Multijogador"
            },
        ],
    },
    {
        nome: "overcooked 2",
        descricao: "Uma nova ameaça surgiu e chegou a hora de voltar para a cozinha para matar a fome dos Pães Zumbis! Com a ajuda de 5 novos chefs apimentados, você cortará, fritará e servirá com toda a grandeza da culinária! Volte para o Reino da Cebola e monte sua equipe de chefs em um jogo cooperativo local ou on-line para até quatro jogadores.",
        desenvolvedora: "Team17",
        categorias : [
            {
                categoria: "Simulação"
            },
            {
                categoria: "Um jogador"
            },
            {
                categoria: "Multijogador"
            },
        ],
    },
    {
        nome: "portal 2",
        descricao: "Portal 2 marca o retorno de Chell e GLados em uma experiência que apresenta o mesmo princípio apresentado no título original. Os chamados tractor beams, cilindros formados por anéis azuis oscilantes. Combinando-os com portais, o jogador consegue transportar Chell a áreas previamente inacessíveis. Além disso, pontes projetadas também podem ser levadas através dos portais e cubos refletores podem ser manuseados para que raios laser sejam desviados.",
        desenvolvedora: "Valve Corporation",
        categorias : [
            {
                categoria: "Puzzle"
            },
            {
                categoria: "Um jogador"
            },
            {
                categoria: "Multijogador"
            }
        ],
    },
    {
        nome: "league of legends",
        descricao: "League of Legends (LoL) é um jogo do gênero multiplayer online battle arena desenvolvido pela Riot Games para PC. League of Legends foi bem recebido desde o seu lançamento e sua popularidade cresceu ao decorrer dos anos. Em julho de 2012, League of Legends foi o jogo mais jogado para computador na América do Norte e Europa. Até janeiro de 2014, mais de 67 milhões de pessoas jogavam League of Legends por mês, 27 milhões por dia e mais de 7,5 milhões durante o horário de pico. League of Legends tem um cenário competitivo grande e ativo.",
        desenvolvedora: "Riot Games",
        categorias : [
            {
                categoria: "Estratégia"
            },
            {
                categoria: "Multijogador"
            },
        ],
    },
    {
        nome: "need for speed heat",
        descricao: "Trabalhe de dia e arrisque tudo à noite no Need for Speed Heat, um jogo de corrida emocionante que coloca você lado a lado contra a polícia corrupta da cidade, competindo nos eventos de elite das corridas de rua.",
        desenvolvedora: "Eletronic Arts",
        categorias : [
            {
                categoria: "Corrida"
            },
            {
                categoria: "Multijogador"
            },
        ],
    },
    {
        nome: "counter-strike: global offensive",
        descricao: "Counter-Strike: Global Offensive é um jogo online desenvolvido pela Valve Corporation e pela Hidden Path Entertainment, sendo uma sequência de Counter-Strike: Source. É o quarto título principal da franquia.",
        desenvolvedora: "Valve Corporation",
        categorias : [
            {
                categoria: "FPS"
            },
            {
                categoria: "Multijogador"
            },
        ],
    },
    {
        nome: "fifa 21",
        descricao: "FIFA 21 é um videogame de simulação de esportes desenvolvido e publicado pela Electronic Arts, tendo como estrela da capa o jogador Kylian Mbappé. O jogo foi anunciado em 19 de junho de 2020, sendo, no mesmo ano, oficialmente publicado no dia 9 de outubro.",
        desenvolvedora: "Eletronic Arts",
        categorias : [
            {
                categoria: "Esporte"
            },
            {
                categoria: "Um jogador"
            },
            {
                categoria: "Multijogador"
            },
        ],
    },
    {
        nome: "pummel party",
        descricao: "Pummel Party é um jogo casual para 4 jogadores online e local. Use uma grande variedade de itens absurdos no modo board e compita para destruir amizades numa coleção única de minijogos.",
        desenvolvedora: "Rebuilt Games",
        categorias : [
            {
                categoria: "Outros gêneros"
            },
            {
                categoria: "Multijogador"
            },
        ],
    },
    {
        nome: "the sims 4",
        descricao: "The Sims 4 é o quarto título da série de simulação. Assim como nos demais jogos da série, você pode ter uma vida virtual - construindo sua casa, estabelecendo uma nova carreira profissional, fazendo novos amigos, constituindo uma família e muito mais.",
        desenvolvedora: "Eletronic Arts",
        categorias : [
            {
                categoria: "Simulação"
            },
            {
                categoria: "Um jogador"
            },
        ],
    },
    {
        nome: "dead by daylight",
        descricao: "Multiplayer onde quatro jogadores desempenham o papel de vítima, enquanto uma pessoa toma o controle de um serial killer com sede de sangue.",
        desenvolvedora: "Behaviour Interactive",
        categorias : [
            {
                categoria: "Outros gêneros"
            },
            {
                categoria: "Multijogador"
            },
        ],
    },
    {
        nome: "stardew valley",
        descricao: "Você acaba de herdar a antiga fazenda de seu avô em Stardew Valley. Contando apenas com algumas ferramentas velhas e poucas moedas você dará o pontapé inicial na sua nova vida. Conseguirá viver da terra e transformar os vastos campos em seu lar de sucesso?",
        desenvolvedora: "Eric Barone",
        categorias : [
            {
                categoria: "RPG"
            },
            {
                categoria: "Um jogador"
            },
            {
                categoria: "Multijogador"
            },
        ],
    },
    {
        nome: "tibia",
        descricao: "Tibia é um jogo multiplayer de MMORPG, desenvolvido pela CipSoft. Criado em 1997, é um dos jogos mais antigos do gênero. Nele, os jogadores podem desenvolver as habilidades de seus avatares, buscar tesouros, resolver enigmas e explorar áreas como cidades, masmorras, florestas, desertos, ilhas, praias e minas. Os personagens podem disputar lutas entre si ou com criaturas, tais como monstros, dragões, demônios e orcs, utilizando armas e magias.",
        desenvolvedora: "CipSoft",
        categorias : [
            {
                categoria: "RPG"
            },
        ],
    },
    {
        nome: "osu!",
        descricao: "osu! é um jogo de ritmo gratuito desenvolvido e publicado por Dean Herbert em 2007 originalmente para o Microsoft Windows, sendo posteriormente portado para OS X, iOS e Windows Phone.",
        desenvolvedora: "Dean Herbert",
        categorias : [
            {
                categoria: "Outros gêneros"
            },
        ],
    },
    {
        nome: "roblox",
        descricao: "Roblox é uma plataforma de jogos MMOSG e Sandbox baseados normalmente em mundo aberto, multiplataforma e simulação que permite criar do zero seu próprio mundo virtual chamado de experiência ou place onde os milhares de jogadores da plataforma podem interagir sobre.",
        desenvolvedora: "Roblox Coporation",
        categorias : [
            {
                categoria: "Outros gêneros"
            },
        ],
    },
    {
        nome: "raft",
        descricao: "Sozinho ou com amigos, sua missão é sobreviver a uma aventura oceânica épica num mar perigoso! Reúna detritos para sobreviver, expanda sua jangada e tenha cuidado com os perigos do oceano! Presos em uma pequena balsa com nada além de um gancho feito de plástico velho, os jogadores acordam em um vasto oceano azul totalmente sozinho e sem terra à vista! Com a garganta seca e o estômago vazio, a sobrevivência não será fácil!",
        desenvolvedora: "Redbeet Interactive",
        categorias : [
            {
                categoria: "Simulação"
            },
            {
                categoria: "Um jogador"
            },
            {
                categoria: "Multijogador"
            },
        ],
    },
];

const coresCategorias = {
    'Aventura' : "0ee34a",
    'FPS' : "1a9c34",
    'Estratégia' : "e3950e",
    'RPG' : "e30e5f",
    'Esporte' : "d8e30e",
    'Corrida' : "e30e0e",
    'Simulação' : "710ee3",
    'Puzzle' : "9c0880",
    'Outros gêneros' : "413f4a",
    'Multijogador' : "15ab7e",
    'Um jogador' : "06878a"
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
        if(local == "console"){
            console.log(`INSERT INTO Categoria (nome, cor) VALUES ('${categorias[contador]}', '${coresCategorias[categorias[contador]]}');`);
        }
        else{
            insertsJogos.innerHTML += `INSERT INTO Categoria (nome, cor) VALUES ('${categorias[contador]}', '${coresCategorias[categorias[contador]]}');<br>`;
        }
    }
}

function imprimeJogos(){
    for(let contador = 0; contador < lista_jogos.length; contador++){
        if(local == "console"){
            console.log(`INSERT INTO Jogo (nome, descricao, desenvolvedora) VALUES ('${lista_jogos[contador].nome}', '${lista_jogos[contador].descricao}', '${lista_jogos[contador].desenvolvedora}');`);
        }
        else{
            insertsJogos.innerHTML += `INSERT INTO Jogo (nome, descricao, desenvolvedora) VALUES ('${lista_jogos[contador].nome}', '${lista_jogos[contador].descricao}', '${lista_jogos[contador].desenvolvedora}');<br>`;
        }
    }
}

function imprimeJogosCategorias(){
    for(let jogo = 0; jogo < lista_jogos.length; jogo++){
        for(let cont_cat = 0; cont_cat < lista_jogos[jogo].categorias.length; cont_cat++){
            if(local == "console"){
                console.log(`INSERT INTO JogoCategoria (fkJogo, fkCategoria) VALUES (${jogo + 1}, (SELECT idCategoria FROM categoria WHERE nome = '${lista_jogos[jogo].categorias[cont_cat].categoria}'));`);
            }
            else{
                insertsJogos.innerHTML += `INSERT INTO JogoCategoria (fkJogo, fkCategoria) VALUES (${jogo + 1}, (SELECT idCategoria FROM categoria WHERE nome = '${lista_jogos[jogo].categorias[cont_cat].categoria}'));<br>`;
            }
        }
    }
}


function gerarDadosJogos(){
    imprimeCategorias();
    imprimeJogos();
    imprimeJogosCategorias();
}

function copiarDados(campo){
    navigator.clipboard.writeText(campo.innerText);
}

function limparDados(campo){
    campo.innerHTML = "";
}

function pegarDadosBanco(){
    insertsTudo.innerHTML = "";
    pegarUsuarios();
    pegarJogosSugeridos();
    pegarJogos();
    pegarCategorias();
    pegarJogosCategorias();
    pegarAvaliacoes();
}

function pegarUsuarios(){
    fetch('/listarUsuario')
    .then((res) => {
        res.json().then((resposta) => {
            insertsTudo.innerHTML += `<br>-- Usuários<br>`;
            for(let index = 0; index < resposta.length; index++){
                let dado = resposta[index];
                insertsTudo.innerHTML += `INSERT INTO Usuario VALUES (NULL, '${dado.nome}', '${dado.nick}', MD5('12345'), '${dado.email}', '${moment(dado.dataCadastro).format('YYYY-MM-DD')}', ${dado.administrador});<br>`;
            }
        });
    })
    .catch((error) => {
        console.error(error.message);
    });
}

function pegarJogosSugeridos(){
    fetch('/listarJogoSugerido')
    .then((res) => {
        res.json().then((resposta) => {
            insertsTudo.innerHTML += `<br>-- Jogos sugeridos<br>`;
            for(let index = 0; index < resposta.length; index++){
                let dado = resposta[index];
                insertsTudo.innerHTML += `INSERT INTO JogoSugerido VALUES (NULL, '${dado.nome}', '${dado.categoria}', ${dado.fkUsuario});<br>`;
            }
        });
    })
    .catch((error) => {
        console.error(error.message);
    });
}

function pegarJogos(){
    fetch('/listarJogo')
    .then((res) => {
        res.json().then((resposta) => {
            insertsTudo.innerHTML += `<br>-- Jogos<br>`;
            for(let index = 0; index < resposta.length; index++){
                let dado = resposta[index];
                insertsTudo.innerHTML += `INSERT INTO Jogo VALUES (NULL, '${dado.nome}', '${dado.descricao}', '${dado.desenvolvedora}');<br>`;
            }
        });
    })
    .catch((error) => {
        console.error(error.message);
    });
}

function pegarCategorias(){
    fetch('/listarCategoria')
    .then((res) => {
        res.json().then((resposta) => {
            insertsTudo.innerHTML += `<br>-- Categorias<br>`;
            for(let index = 0; index < resposta.length; index++){
                let dado = resposta[index];
                insertsTudo.innerHTML += `INSERT INTO Categoria VALUES (NULL, '${dado.nome}', '${dado.cor}');<br>`;
            }
        });
    })
    .catch((error) => {
        console.error(error.message);
    });
}

function pegarJogosCategorias(){
    fetch('/listarJogoCategoria')
    .then((res) => {
        res.json().then((resposta) => {
            insertsTudo.innerHTML += `<br>-- Jogos Categorias<br>`;
            for(let index = 0; index < resposta.length; index++){
                let dado = resposta[index];
                insertsTudo.innerHTML += `INSERT INTO JogoCategoria VALUES (${dado.fkJogo}, ${dado.fkCategoria});<br>`;
            }
        });
    })
    .catch((error) => {
        console.error(error.message);
    });
}

function pegarAvaliacoes(){
    fetch('/listarAvaliacao')
    .then((res) => {
        res.json().then((resposta) => {
            insertsTudo.innerHTML += `<br>-- Avaliações<br>`;
            for(let index = 0; index < resposta.length; index++){
                let dado = resposta[index];
                insertsTudo.innerHTML += `INSERT INTO Avaliacao VALUES (${dado.fkJogo}, ${dado.fkUsuario}, '${moment(dado.dataAvaliacao).format("YYYY-MM-DD HH:mm:ss")}', '${dado.comentario}', ${dado.notaAudio}, ${dado.notaVisual}, ${dado.notaJogabilidade}, ${dado.notaHistoria}, ${dado.notaDiversao});<br>`;
            }
        });
    })
    .catch((error) => {
        console.error(error.message);
    });
}