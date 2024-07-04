// Obtém os botões do DOM
let btnMudarCor = document.getElementById("btnMudarCor");
let btnVoltarCor = document.getElementById("btnVoltarCor");

// Adiciona um evento de clique ao botão 'Mudar Cor de Fundo'
btnMudarCor.addEventListener("click", function() {
    document.body.style.backgroundColor = "#9370DB"; // Altera a cor de fundo
});

// Adiciona um evento de clique ao botão 'Voltar Cor Normal'
btnVoltarCor.addEventListener("click", function() {
    document.body.style.backgroundColor = ""; // Restaura a cor de fundo original
});