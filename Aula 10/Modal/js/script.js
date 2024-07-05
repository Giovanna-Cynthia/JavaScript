const button = document.querySelector("button");
const popup = document.querySelector(".popup-wrapper");

//exemplo de includes
const classListArray = ["teste", "oi"];
console.log(classListArray.includes("teste"));

button.addEventListener("click", function(){
    //Como ja esta sendo chamada de classLista, não precisa do ponto
    popup.classList.add("d-block");
});

popup.addEventListener("click", function(event){
    //Aparece no console, os lugares onde esta sendo efetuado o click(em qualquer lugar da tela )
    const classListClick = event.target.classList[0];

    const classNameArray = ["popup-close", "popup-link", "popup-wrapper"];

    const isClassList = classNameArray.includes(classListClick);

    if (classNameArray.includes(classListClick)) {
        popup.classList.remove('d-block')
    }
});

