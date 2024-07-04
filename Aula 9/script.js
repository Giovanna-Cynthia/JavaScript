//Obtendo os elementos do DOM
let valor1 = document.getElementById("valor1");
let valor2 = document.getElementById("valor2");

//Botão para obter o resultado
const btnSomar = document.getElementById("btnSomar");
const btnSub = document.getElementById("btnSub");
const btnDiv = document.getElementById("btnDiv");
const btnMult = document.getElementById("btnMult");


//Botão resultado
const resultado = document.getElementById("resultado");

//Criando Função, evento de click no botão
btnSomar.addEventListener("click", function(){
    //Converter os valores dos inputs para numeros e somar
    let soma = Number(valor1.value) + Number(valor2.value);
    
    //Exibindo o resultado na tela
    resultado.textContent = soma;

    valor1.value = "";
    valor2.value = "";

    setTimeout(function(){
        resultado.innerHTML = 0;
    }, 3000);
});



