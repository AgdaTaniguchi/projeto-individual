function entrar(){
    const emailVar = email.value;
    const senhaVar = senha.value;

    if(emailVar == "" || senhaVar == ""){
        alertar("Preencha todos os campos para prosseguir!");
        return false;
    }

    if(emailVar.indexOf("@") == -1){
        alertar("Ops, e-mail inválido! Verifique e tente novamente.");
        return false;
    }

    if(senhaVar.length < 6){
        alertar("E-mail e/ou senha inválido(s)!")
        return false;
    }

    fetch("/usuario/entrar", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    })
    .then(function(resposta){
        console.log(resposta)
        if(resposta.ok){
            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.idUsuario;
                sessionStorage.NICK= json.nick;
                sessionStorage.ADMINISTRADOR = json.administrador;

                window.location = "jogos.html";
            });
        }
        else{
            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);
                alertar(texto);
            });
        }
    })
    .catch(function(erro){
        console.log(erro);
    })

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