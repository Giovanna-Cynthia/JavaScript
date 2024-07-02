//Variaveis
let anoCopa = 1930;
//É exibido tipo um alerta, mas com uma caixinha de texto
let anoLimite = prompt("Qual é o ano limite");

const mostra = function(frase) {
    document.write(frase + "<br>")
}

//enquanto 
while(anoCopa <= anoLimite){
    mostra(anoCopa + " Tem copa!");
    //anoCopa = anoCopa + 4;
    anoCopa += 4;
}

mostra("Ufa! Esses foram os anos da copa até " + anoLimite);






/*imprime na tela, o que for digitado na caixa de texto
document.write(anoLimite);*/