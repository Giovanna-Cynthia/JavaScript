//Documento seletor, para quando clicar no botão ele ser direcionado para algum lugar
const button = document.querySelector("button");
const inputNota = document.querySelector("#nota");

//Criando uma função
//Escutador de evento, quando clicar no botão ouvirá um evento
//O alert é usado para aparecer alguma mensagem, quando apertar  no botão por exemplo
//previnindo qualquer bugue do browser
//.value valor que o usuario ta digitando(Aparece no console do inspecionar)
button.addEventListener("click", function(event) {
//alert("Bem-Vindo!");
    event.preventDefault();
    console.log(inputNota.value);

    if(inputNota.value >= 6 ){
        console.log("Você está aprovado");
    }else{
        alert("Você reprovou");
    }
});