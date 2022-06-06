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