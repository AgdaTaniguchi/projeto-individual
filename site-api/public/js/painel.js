window.onload = () => {
    Chart.defaults.color = "#ddd";

    visaoGeralJogos();
    // listarJogos();
    
    visaoGeralUsuarios();

    // listarSugestoes();
    // listarUsuarios();
}

// function listarJogos(){
//     fetch(`jogos/listarJogos`)
//     .then((res) => {
//         res.json().then((resposta) => {
//             console.log(resposta);
//         });
//     })
//     .catch((erro) => {
//         console.error(`Erro na obtenção de jogos: ${erro.message}`);
//     });
// }

function visaoGeralJogos(){
    fetch(`painel/pegarKpisJogos`)
    .then((res) => {
        res.json().then((resposta) => {
            kpiQtdJogos.innerHTML = resposta.qtdJogos;
            kpiQtdCategorias.innerHTML = resposta.qtdCategorias;
            kpiQtdAvaliacoes.innerHTML = resposta.qtdAvaliacoes;
        });
    })
    .catch((erro) => {
        console.error(`Erro na obtenção das KPI's dos jogos: ${erro.message}`);
    });
    
    fetch(`painel/jogosPorCategoria`)
    .then((res) => {
        res.json().then((resposta) => {
            const dataCategorias = {
                labels: [],
                datasets: [{
                    label: 'Quantidade de jogos avaliados',
                    data: [],
                    backgroundColor: ['#ff8906', '#ff7c1f', '#ff6f2f', '#ff623c', '#ff5647', '#fc4b52', '#f6405d', '#ee3867', '#e53170'],
                }]
            };
            
            for(let index = 0; index < resposta.length; index++){
                dataCategorias.labels.push(resposta[index].nome);
                dataCategorias.datasets[0].data.push(resposta[index].qtdJogos);
            }
            
            const config = {
                type: 'bar',
                data: dataCategorias,
                options: {}
            };
            
            const grafico = new Chart(document.getElementById('graficoJogosCategorias'), config);
        });
    })
    .catch((erro) => {
        console.error(`Erro na obtenção do gráfico dos jogos: ${erro.message}`);
    });
}

function visaoGeralUsuarios(){
    fetch(`painel/pegarKpisUsuarios`)
    .then((res) => {
        res.json().then((resposta) => {
            kpiQtdUsuarios.innerHTML = resposta.qtdUsuarios;
            kpiQtdSugestoes.innerHTML = resposta.qtdSugestoes;
        });
    })
    .catch((erro) => {
        console.error(`Erro na obtenção das KPI's dos usuários: ${erro.message}`)
    });

    fetch(`painel/novosUsuarios`)
    .then((res) => {
        res.json().then((resposta) => {
            const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

            const dataUsuarios = {
                labels: [],
                datasets: [{
                    label: 'Quantidade de jogos avaliados',
                    data: [],
                    backgroundColor: ['#ff8906', '#ff7c1f', '#ff6f2f', '#ff623c', '#ff5647', '#fc4b52', '#f6405d', '#ee3867', '#e53170'],
                }]
            };
            
            for(let index = 0; index < resposta.length; index++){
                dataUsuarios.labels.push(meses[resposta[index].mes - 1]);
                dataUsuarios.datasets[0].data.push(resposta[index].qtdUsuarios);
            }
            
            const config = {
                type: 'bar',
                data: dataUsuarios,
                options: {}
            };
            
            const grafico = new Chart(document.getElementById('graficoNovosUsuarios'), config);
        });
    })
    .catch((erro) => {
        console.error(`Erro na obtenção do gráfico dos usuários: ${erro.message}`)
    });
}