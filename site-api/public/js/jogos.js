window.onload = obterJogos();

function obterJogos(){
    fetch("jogos/listarJogos").then((function(res){
        if(res.ok){
            loading.style.display = "none";

            res.json().then(function(resposta){
                // console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                let id_jogos = [];
                const jogos_container = document.querySelector(".jogos-container");

                for(let dado = 0; dado < resposta.length; dado++){
                    // Adicionando jogo
                    if(id_jogos.indexOf(resposta[dado].idJogo) == -1){
                        id_jogos.push(resposta[dado].idJogo);
                        const nome_imagem = (((resposta[dado].jogo).split(' ')).join('')).toLowerCase();
                        jogos_container.innerHTML += `<a class="jogo" href="jogo.html?idJogo=${resposta[dado].idJogo}"><img src="images/jogos/${nome_imagem}.jpg" alt=""><h3>${resposta[dado].jogo}</h3><div class="categorias-jogo"><div class="box-categoria" style="background: #${resposta[dado].cor}">${resposta[dado].categoria}</div></div></a>`;
                    }
                    // Adicionando categoria
                    else{
                        let categorias = document.querySelectorAll(".categorias-jogo");
                        categorias[categorias.length - 1].innerHTML += `<div class="box-categoria" style="background: #${resposta[dado].cor}">${resposta[dado].categoria}</div>`;
                    }
                }
            });
        }
        else{
            console.error('Nenhum dado encontrado ou erro na API.');
        }
    })).catch(function(erro){
        console.error(`Erro na obtenção dos jogos: ${erro.message}`);
    });
}