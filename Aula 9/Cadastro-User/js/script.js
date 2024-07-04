let form = document.querySelector("#cadastroForm");
let cadastroList = document.querySelector("#cadastroList");

//Obtem os valores dos campos de entrada
let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let cidade = document.querySelector("#cidade");

//Adiciona um evento de formulário
//Submit
form.addEventListener("submit", function(event) {
    //Previne o comportamento padrão
    event.preventDefault();

    console.log(nome.value);
    console.log(email.value);
    console.log(cidade.value);

    //Cria um novo item com os valores
    let listItem = document.createElement("li");
    listItem.innerHTML = `<strong>Nome: </strong>${nome.value}<br><strong>Email: </strong>${email.value}<br><strong>Cidade: </strong>${cidade.value}`;
    
    //Adicionando um novo item na lista
    cadastroList.appendChild(listItem);

    //Limpa os campos de entrada:
    form.reset();

});