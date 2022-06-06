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

    historicoAvaliacao();
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

function historicoAvaliacao(){
    fetch(`jogos/historicoAvaliacao?idUsuario=${sessionStorage.ID_USUARIO}`)
    .then((function(res){
        if(res.ok){
            res.json().then(function(resposta){
                // console.log(resposta);

                if(resposta.length == 0){
                    avisoNenhumJogo.style.display = "block";
                }

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
    }))
    .catch(function(erro){
        console.error(`Erro na obtenção dos dados do jogo: ${erro.message}`);
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