window.onload = () => {
    // visaoGeralJogos();
    listarJogos();

    // listarSugestoes();

    // visaoGeralUsuarios();
    // listarUsuarios();
}

function listarJogos(){
    fetch(`jogos/listarJogos`)
    .then((res) => {
        res.json().then((resposta) => {
            console.log(resposta);
        });
    })
    .catch((erro) => {
        console.error(`Erro na obtenção de jogos: ${erro.message}`);
    });
}

const data = {
    labels: ['Aventura', 'Estratégia', 'RPG', 'Esporte', 'Corrida', 'Simulação', 'Outros gêneros', 'Multiplayer', 'Um jogador'],
    datasets: [{
        label: 'Quantidade de jogos avaliados',
        data: [],
        backgroundColor: ['#ff8906', '#ff7c1f', '#ff6f2f', '#ff623c', '#ff5647', '#fc4b52', '#f6405d', '#ee3867', '#e53170'],
    }]
};

for (let index = 0; index < 9; index++) {
    data.datasets[0].data[index] = Math.trunc(Math.random() * (500));
}

const config = {
    type: 'bar',
    data: data,
    options: {}
};

const grafico = new Chart(document.getElementById('grafico'), config);