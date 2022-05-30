window.onload = () => {
    const parametrosString = window.location.search;
    const parametros = new URLSearchParams(parametrosString);
    const idJogo = parametros.get("idJogo");
    
    obterDados(idJogo);
    obterAvaliacoes(idJogo);
};

function obterDados(idJogo){
    fetch(`jogos/pegarInfoJogo?idJogo=${idJogo}`)
    .then((function(res){
        if(res.ok){
            res.json().then(function(resposta){
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

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

function obterAvaliacoes(idJogo){
    const caminhoAvaliacoes = `jogos/pegarAvaliacoesJogo?idJogo=${idJogo}`;
    fetch(caminhoAvaliacoes)
    .then((function(res){
        if(res.ok){
            res.json().then(function(resposta){
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

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

function abrirModalAvaliar(){
    modalAvaliar.style.display = "block";
    fundoModal.style.display = "block";
}

function fecharModal(){
    modalAvaliar.style.display = "none";
    fundoModal.style.display = "none";
}

function preencherDados(resposta){
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
                <span>${moment(avaliacao.dataAvaliacao).format("DD/MM/YYYY")} às ${moment(avaliacao.dataAvaliacao).format("HH:mm:ss")}</span>
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
                    <div class="nota nota-historia">${avaliacao.notaCampanha}</div>
                    <h5>História</h5>
                    <div style="width:calc(${avaliacao.notaCampanha} / 10 * 100%);" class="nota-barra"></div>
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