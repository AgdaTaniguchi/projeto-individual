window.onload = () => {
    obterDados();
};

function obterDados(){
    const parametrosString = window.location.search;
    const parametros = new URLSearchParams(parametrosString);
    const idJogo = parametros.get("idJogo");

    fetch(`jogos/pegarInfo?idJogo=${idJogo}`)
    .then((function(res){
        if(res.ok){
            res.json().then(function(resposta){
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
            });
        }
        else{
            console.error('Nenhum dado encontrado ou erro na API.');
        }
    }))
    .catch(function(erro){
        console.error(`Erro na obtenção dos dados do jogo: ${erro.message}`);
    });
}

function abrirModalAvaliar(){
    modalAvaliar.style.display = "block";
    fundoModal.style.display = "block";
}

function fecharModal(){
    modalAvaliar.style.display = "none";
    fundoModal.style.display = "none";
}