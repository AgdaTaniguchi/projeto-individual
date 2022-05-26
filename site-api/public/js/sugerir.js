window.onload = () => {
    if(!sessionStorage.ID_USUARIO){
        window.location = "entrar.html";
    }
}

function sugerir(){
    const jogoVar = jogo.value;
    const categoriaVar = categoria.value;

    if(jogoVar == "" || categoriaVar == ""){
        alertar("Preencha todos os campos para prosseguir!");
    }

    fetch("/usuario/sugerir", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            jogoServer: jogoVar,
            categoriaServer: categoriaVar,
            idUsuarioServer: sessionStorage.ID_USUARIO
        })
    })
    .then(function(resposta){
        if(resposta.ok){
            resposta.json().then(json => {
                jogo.value = "";
                alertar("Sugestão enviada com sucesso!");
            });
        }
        else{
            console.log("Houve um erro ao tentar realizar a sugestão!");

            resposta.text().then(texto => {
                console.error(texto);
                alertar(texto);
            });
        }
    })
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