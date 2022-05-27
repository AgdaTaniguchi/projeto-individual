window.onload = () => {
    if(!sessionStorage.ID_USUARIO){
        window.location = "entrar.html";
    }

    if(sessionStorage.ADMINISTRADOR == 1){
        admMenu.style.display = "block";
    }

    nome.value = sessionStorage.NOME_USUARIO;
    nomeUsuario.value = sessionStorage.NICK;
    email.value = sessionStorage.EMAIL_USUARIO;
}

function sair(){
    sessionStorage.clear();
}

function atualizar(){
    const nomeVar = nome.value;
    const nickVar = nomeUsuario.value;
    const emailVar = email.value;

    if(nomeVar == "" || nickVar == "" || emailVar == ""){
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

    if(nickVar.length < 3){
        alertar("O nick deve possuir, no mínimo, 3 caracteres.");
        return false;
    }

    if(nomeVar.length < 3){
        alertar("O nome deve possuir, no mínimo, 3 caracteres.");
        return false;
    }

    fetch("/usuario/atualizar", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            nomeServer: nomeVar,
            nickServer: nickVar,
            emailServer: emailVar,
            idUsuarioServer: sessionStorage.ID_USUARIO
        })
    })
    .then(function(resposta){
        if(resposta.ok){
            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                sessionStorage.EMAIL_USUARIO = emailVar;
                sessionStorage.NOME_USUARIO = nomeVar;
                sessionStorage.NICK = nickVar;

                menu_nome.innerHTML = nickVar;

                alertar("Dados atualizados com sucesso!");
            });
        }
        else{
            console.log("Houve um erro ao tentar realizar a alteração do usuário!");

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
    .catch((erro) => {
        console.error(`Erro na obtenção dos dados do usuário: ${erro.message}`);
    });
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