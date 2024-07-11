const listaValores = document.querySelector("#listaValores");

carregarValoresSalvos();

//Função para carregar valores ba lista
function carregarValoresSalvos(){
    listaValores.innerHTML = ""; // Limpa lista antes de adicionar valores

    for (let i = 0; i < localStorage.length; i++) {
        const chave = localStorage.key(i);

    if (chave.startsWith('valorSalvo')) { //filtra as chaves
        const valor = localStorage.getItem(chave);
        const listItem = document.createElement("li");
        listItem.textContent = valor;
        listaValores.appendChild(listItem);
    }
    }
};