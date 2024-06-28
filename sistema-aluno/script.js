//Documento seletor, para quando clicar no botão ele ser direcionado para algum lugar
const button = document.querySelector("button");
const inputNota = document.querySelector("#nota");

//Criando uma função para limpar o campo
function clearForm() {
    //para limpar o campo depois que receber a mensagem(alerta)
    //se colocar um texto, ele aparecerá depois que receber a mensagem(alerta)
    inputNotaValue.value = "";
}

//Criando uma função anonima
//Escutador de evento, quando clicar no botão ouvirá um evento
//O alert é usado para aparecer alguma mensagem, quando apertar  no botão por exemplo
//previnindo qualquer bugue do browser
//.value valor que o usuario ta digitando(Aparece no console do inspecionar)
button.addEventListener("click", function(event) {
//Alert("Bem-Vindo!");

    event.preventDefault();
    const inputNotaValue = inputNota.value;
    
    //Validação de formulario
    if(inputNotaValue === '' ) {
        alert("Campo obrigatório!");
        return false;
    }

    if(inputNotaValue >= 6 ){
        alert("Você está aprovado");
    }else{
        alert("Você reprovou");
    }

    //Chamando função de limpar campo
    clearForm();

});