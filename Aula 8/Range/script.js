// Obtém o controle de faixa e o elemento de exibição do valor do DOM
let range = document.querySelector("#range");
let rangeValue = document.querySelector("#rangeValue");

// Adiciona um evento de input ao controle de faixa
range.addEventListener("input", function() {
    // Atualiza o valor exibido na tela com o valor atual do controle de faixa
    rangeValue.textContent = range.value;
});