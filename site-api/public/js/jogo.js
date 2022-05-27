window.onload = obterDados();

function obterDados(){
    const parametrosString = window.location.search;
    const parametros = new URLSearchParams(parametrosString);
    const idJogo = parametros.get("idJogo");

    fetch(`jogos/pegarInfo?idJogo=${idJogo}`)
    .then((function(res){
        if(res.ok){
            res.json().then(function(resposta){
                console.log(`Dados ercebidos: ${JSON.stringify(resposta)}`);
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