// Obtém o botão do DOM
let btnToggleCor = document.getElementById("btnToggleCor");

// Variável para rastrear o estado atual da cor de fundo
let isOriginalColor = true;

// Adiciona um evento de clique ao botão
btnToggleCor.addEventListener("click", function() {
    if (isOriginalColor) {
        document.body.style.backgroundColor = "lightblue"; // Altera a cor de fundo
    } else {
        document.body.style.backgroundColor = ""; // Restaura a cor de fundo original
    }
    // Alterna o estado da cor de fundo
    isOriginalColor = !isOriginalColor;
});