const apagarBtn = document.querySelector("#apagar");

apagarBtn.addEventListener("click", () => {
    //Limpa todos os valores no localStorage
    localStorage.clear();

    //Limpa  lista da interface
    listaValores.innerHTML = "";
})