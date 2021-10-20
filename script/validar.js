function validar(){

    var nome = formulario.nome;
    var email = formulario.email;
    var contato = formulario.contato;
    var comentario = formulario.comentario;

    if(nome.value == ""){
        alert("O nome não foi inserido!");
        return;
    }

    if(email.value == ""){
        alert("O email não foi inserido!");
        return;
    }

    if(contato.value == ""){
        alert("O tipo de contato não foi seleciondo!");
        return;
    }

    if(comentario.value == ""){
        alert("O campo comentário está vazio!");
        return;
    }

    alert("Os dados foram enviados com sucesso!")

}