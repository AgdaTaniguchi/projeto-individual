var avaliacoesNotas = [0, 0, 0, 0, 0];
var qtdAvaliacoes = 0;
var idJogo;

window.onload = () => {
    const parametrosString = window.location.search;
    const parametros = new URLSearchParams(parametrosString);
    idJogo = parametros.get("idJogo");

    obterDados();
    obterAvaliacoes();
};

function obterDados(){
    fetch(`jogos/pegarInfoJogo?idJogo=${idJogo}`)
    .then((function(res){
        if(res.ok){
            res.json().then(function(resposta){
                // console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                preencherDados(resposta);
            });
        }
        else{
            console.error('Nenhum dado encontrado ou erro na API.');
        }
    }))
    .catch(function(erro){
        console.error(`Erro na obtenção dos dados do jogo: ${erro.message}`);
    });
    
    return false;
}

function obterAvaliacoes(){
    fetch(`jogos/pegarAvaliacoesJogo?idJogo=${idJogo}`)
    .then((function(res){
        if(res.ok){
            res.json().then(function(resposta){
                // console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                for(let contAvaliacao = 0; contAvaliacao < resposta.length; contAvaliacao++){
                    avaliacoesNotas[0] += Number(resposta[contAvaliacao].notaAudio);
                    avaliacoesNotas[1] += Number(resposta[contAvaliacao].notaVisual);
                    avaliacoesNotas[2] += Number(resposta[contAvaliacao].notaJogabilidade);
                    avaliacoesNotas[3] += Number(resposta[contAvaliacao].notaHistoria);
                    avaliacoesNotas[4] += Number(resposta[contAvaliacao].notaDiversao);

                    qtdAvaliacoes++;
                
                    if(resposta[contAvaliacao].idUsuario == sessionStorage.ID_USUARIO){
                        btnAbrirModal.innerHTML = "Atualizar avaliação";
                        
                        preencherAvaliacaoUsuario(resposta[contAvaliacao]);
                    }
                }

                inserirNotas();

                inserirAvaliacoes(resposta);
            });
        }
        else if(res.status == 404){
            console.log("Opa, nenhuma avaliação encontrada!");
        }
        else{
            console.error('Nenhum dado encontrado ou erro na API.');
        }
    }))
    .catch(function(erro){
        console.error(`Erro na obtenção dos dados do jogo: ${erro.message}`);
    });

    return false;
}

function preencherAvaliacaoUsuario(dados){
    comentarioAvaliacao.value = dados.comentario;

    audioAvaliacao.value = Number(dados.notaAudio);
    visualAvaliacao.value = Number(dados.notaVisual);
    jogabilidadeAvaliacao.value = Number(dados.notaJogabilidade);
    historiaAvaliacao.value = Number(dados.notaHistoria);
    diversaoAvaliacao.value = Number(dados.notaDiversao);

    btnAvaliar.innerHTML = "Atualizar avaliação";
    btnAvaliar.onclick = atualizarAvaliacaoJogo;
}

function abrirModalAvaliar(){
    if(sessionStorage.ID_USUARIO == undefined){
        window.location = "cadastrar.html";
        return false;
    }

    modalAvaliar.style.display = "block";
    fundoModal.style.display = "block";
}

function fecharModal(){
    modalAvaliar.style.display = "none";
    fundoModal.style.display = "none";
}

function preencherDados(resposta){
    const nome_imagem = (((resposta[0].nome).replace(':', '').split(' ')).join('')).toLowerCase();
    imagemJogo.src = `images/jogos/${nome_imagem}.jpg`;

    nomeJogo.innerHTML = resposta[0].nome;
    nomeJogoModal.innerHTML = resposta[0].nome;
    descricaoJogo.innerHTML = resposta[0].descricao;
    desenvolvedoraJogo.innerHTML = resposta[0].desenvolvedora;

    for(let contador = 0; contador < resposta[1].length; contador++){
        const categoria = resposta[1][contador];
        document.querySelector(".categorias-jogo").innerHTML += `<div style="background: #${categoria.cor}" class="box-categoria">${categoria.nome}</div>`;
    }
}

function inserirAvaliacoes(resposta){ 
    for(let contador = 0; contador < resposta.length; contador++){
        let avaliacao = resposta[contador];
        avaliacoes.innerHTML += `
        <div class="avaliacao">
            <div class="header">
                <h3>${avaliacao.nick}</h3>
                <span>${moment(avaliacao.dataAvaliacao).format("DD/MM/YYYY")} às ${moment(avaliacao.dataAvaliacao).format("HH:mm")}</span>
            </div>
            <p>${avaliacao.comentario}</p>
            <div class="container-avaliacoes">
                <div class="box-avaliacao">
                    <div class="nota nota-audio">${avaliacao.notaAudio}</div>
                    <h5>Audio</h5>
                    <div style="width:calc(${avaliacao.notaAudio} / 10 * 100%);" class="nota-barra"></div>
                </div>
                <div class="box-avaliacao">
                    <div class="nota nota-visual">${avaliacao.notaVisual}</div>
                    <h5>Visual</h5>
                    <div style="width:calc(${avaliacao.notaVisual} / 10 * 100%);" class="nota-barra"></div>
                </div>
                <div class="box-avaliacao">
                    <div class="nota nota-jogabilidade">${avaliacao.notaJogabilidade}</div>
                    <h5>Jogabilidade</h5>
                    <div style="width:calc(${avaliacao.notaJogabilidade} / 10 * 100%);" class="nota-barra"></div>
                </div>
                <div class="box-avaliacao">
                    <div class="nota nota-historia">${avaliacao.notaHistoria}</div>
                    <h5>História</h5>
                    <div style="width:calc(${avaliacao.notaHistoria} / 10 * 100%);" class="nota-barra"></div>
                </div>
                <div class="box-avaliacao">
                    <div class="nota nota-diversao">${avaliacao.notaDiversao}</div>
                    <h5>Diversão</h5>
                    <div style="width:calc(${avaliacao.notaDiversao} / 10 * 100%);" class="nota-barra"></div>
                </div>
            </div>
        </div>`;
    }
}

function inserirNotas(){
    for(let index = 0; index < avaliacoesNotas.length; index++){
        avaliacoesNotas[index] /= qtdAvaliacoes;
    }

    headerNotaAudio.innerHTML = avaliacoesNotas[0].toFixed(2);
    headerNotaVisual.innerHTML = avaliacoesNotas[1].toFixed(2);
    headerNotaJogabilidade.innerHTML = avaliacoesNotas[2].toFixed(2);
    headerNotaHistoria.innerHTML = avaliacoesNotas[3].toFixed(2);
    headerNotaDiversao.innerHTML = avaliacoesNotas[4].toFixed(2);

    barraAudio.style.width = `calc(${avaliacoesNotas[0]} / 10 * 100%)`;
    barraVisual.style.width = `calc(${avaliacoesNotas[1]} / 10 * 100%)`;
    barraJogabilidade.style.width = `calc(${avaliacoesNotas[2]} / 10 * 100%)`;
    barraHistoria.style.width = `calc(${avaliacoesNotas[3]} / 10 * 100%)`;
    barraDiversao.style.width = `calc(${avaliacoesNotas[4]} / 10 * 100%)`;

    spanQtdAvaliacoes.innerHTML = qtdAvaliacoes;
}

function avaliarJogo(){
    var notaAudio = audioAvaliacao.value;
    var notaVisual = visualAvaliacao.value;
    var notaJogabilidade = jogabilidadeAvaliacao.value;
    var notaHistoria = historiaAvaliacao.value;
    var notaDiversao = diversaoAvaliacao.value;
    var comentario = comentarioAvaliacao.value;

    if(notaAudio == "" || notaVisual == "" || notaJogabilidade == "" || notaHistoria == "" || notaDiversao == "" || comentario == ""){
        alertar("Preencha todos os campos para avaliar!");
        return false;
    }

    if(notaAudio < 0 || notaAudio > 10 || notaVisual < 0 || notaVisual > 10 || notaJogabilidade < 0 || notaJogabilidade > 10 || notaHistoria < 0 || notaHistoria > 10 || notaDiversao < 0 || notaDiversao > 10){
        alertar("As notas devem ser entre 0 e 10!");
        return false;
    }

    if(comentario.length > 256){
        alertar(`O comentário está muito grande! (${comentario.length}/256)`);
        return false;
    }

    if(sessionStorage.ID_USUARIO == undefined){
        window.location = "cadastrar.html";
        return false;
    }

    fetch("/jogos/avaliarJogo", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            notaAudio: notaAudio,
            notaVisual: notaVisual,
            notaJogabilidade : notaJogabilidade,
            notaHistoria : notaHistoria,
            notaDiversao : notaDiversao,
            comentario: comentario,
            idJogo: idJogo,
            idUsuario: sessionStorage.ID_USUARIO
        })
    })
    .then(function (resposta){
        if(resposta.ok){
            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                window.location = `jogo.html?idJogo=${idJogo}`;
            });
        }
        else{
            console.log("Houve um erro ao tentar realizar a avaliação!");

            resposta.text().then((texto) => {
                console.error(texto);
                alertar(texto);
            });
        }
    })
    .catch(function (erro){
        console.log(erro);
    });

    return false;
}

function atualizarAvaliacaoJogo(){
    var notaAudio = audioAvaliacao.value;
    var notaVisual = visualAvaliacao.value;
    var notaJogabilidade = jogabilidadeAvaliacao.value;
    var notaHistoria = historiaAvaliacao.value;
    var notaDiversao = diversaoAvaliacao.value;
    var comentario = comentarioAvaliacao.value;

    if(notaAudio == "" || notaVisual == "" || notaJogabilidade == "" || notaHistoria == "" || notaDiversao == "" || comentario == ""){
        alertar("Preencha todos os campos para avaliar!");
        return false;
    }

    if(notaAudio < 0 || notaAudio > 10 || notaVisual < 0 || notaVisual > 10 || notaJogabilidade < 0 || notaJogabilidade > 10 || notaHistoria < 0 || notaHistoria > 10 || notaDiversao < 0 || notaDiversao > 10){
        alertar("As notas devem ser entre 0 e 10!");
        return false;
    }

    if(comentario.length > 256){
        alertar(`O comentário está muito grande! (${comentario.length}/256)`);
        return false;
    }

    if(sessionStorage.ID_USUARIO == undefined){
        window.location = "cadastrar.html";
        return false;
    }

    fetch("/jogos/atualizarAvaliacaoJogo", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            notaAudio: notaAudio,
            notaVisual: notaVisual,
            notaJogabilidade : notaJogabilidade,
            notaHistoria : notaHistoria,
            notaDiversao : notaDiversao,
            comentario: comentario,
            idJogo: idJogo,
            idUsuario: sessionStorage.ID_USUARIO
        })
    })
    .then(function (resposta){
        if(resposta.ok){
            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                window.location = `jogo.html?idJogo=${idJogo}`;
            });
        }
        else{
            console.log("Houve um erro ao tentar realizar a avaliação!");

            resposta.text().then((texto) => {
                console.error(texto);
                alertar(texto);
            });
        }
    })
    .catch(function (erro){
        console.log(erro);
    });

    return false;
}

var intervalo;
function alertar(msg){
    clearTimeout(intervalo);

    alerta.innerHTML = msg;
    alerta.style.display = "block";
    
    intervalo = setTimeout(() => {
        alerta.style.display = "none";
    }, 4000);
}