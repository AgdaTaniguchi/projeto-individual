// Não está logado
if(sessionStorage.ID_USUARIO == undefined){
    menu_sugerir.style.display = "none";
    menu_perfil.style.display = "none";
    menu_entrar.style.display = "block";
    menu_cadastrar.style.display = "block";
}
// Logado
else{
    menu_nome.innerHTML += sessionStorage.NICK;

    menu_sugerir.style.display = "block";
    menu_perfil.style.display = "block";
    menu_entrar.style.display = "none";
    menu_cadastrar.style.display = "none";
}