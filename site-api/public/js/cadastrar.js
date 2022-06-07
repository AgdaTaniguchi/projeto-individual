function cadastrar(){
    const nomeVar = nome.value;
    const nickVar = nomeUsuario.value;
    const emailVar = email.value;
    const senhaVar = senha.value;

    if(nomeVar == "" || nickVar == "" || emailVar == "" || senhaVar == ""){
        alertar("Preencha todos os campos para prosseguir!");
        return false;
    }

    if(emailVar.indexOf("@") == -1){
        alertar("Ops, e-mail inválido! Verifique e tente novamente.");
        return false;
    }

    if(emailVar.length < 3){
        alertar("O e-mail deve possuir, no mínimo, 3 caracteres.")
        return false;
    }

    if(senhaVar.length < 4){
        alertar("A senha deve possuir, no mínimo, 4 caracteres.")
        return false;
    }

    if(nickVar.length < 3){
        alertar("O nick deve possuir, no mínimo, 3 caracteres.");
        return false;
    }

    if(nomeVar.length < 3){
        alertar("O nome deve possuir, no mínimo, 3 caracteres.");
        return false;
    }

    fetch("/usuario/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            nomeServer: nomeVar,
            nickServer: nickVar,
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    })
    .then(function(resposta){
        if(resposta.ok){
            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                window.location = "entrar.html";
            });
        }
        else{
            console.log("Houve um erro ao tentar realizar o cadastro!");

            resposta.text().then(texto => {
                console.error(texto);
                if(texto.indexOf("Duplicate entry") != -1){
                    alertar("Já existe um usuário com esse nick ou e-mail! Por favor, escolha outro.");
                }
                else{
                    alertar(texto);
                }
            });
        }
    })
    .catch(function(erro){
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