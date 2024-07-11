const campo = document.querySelector("#campo");
const salvarBtn = document.querySelector("#salvar");

//Criando um elemento P
const pMensagem = document.createElement('p');

//Adicionar evento de clique no botão salvar
salvarBtn.addEventListener("click", function() {
    //Fazer validação para ver se a função esta sendo chamada =  console.log(campo.value);
   const valor = campo.value;

   //Validação para campo vazio ou com espaço
   //.trim() = para validar quando usar o espaço 
   if(valor.trim() === ''){
    pMensagem.textContent = "Campo Obrigatório";
    //afterend deixa abaixo do elemento
    //insertAdjacentElement (DOM) = utilizado para mensagens de validação
    campo.insertAdjacentElement("afterend", pMensagem);
    //Chamando a variavel que esta a mensagem
    //Esta atribuindo a uma classe chamada erro
    pMensagem.setAttribute("class", "error");
    return;
   }

   //Salvar no LocalStrorage
   const chave = `valorSalvo_${Date.now()}`;
   localStorage.setItem(chave, valor);

   //Limpar campo apos salvar
   campo.value = "";

   //Exibir os valores salvos
   carregarValoresSalvos();
});