const drinkType = 'Refrigerante';

switch(drinkType) {
    case "Água":
        console.log("Substância química cujas moléculas sõa formadas po dois átomos de hidrogênio e um de oxigênio.");
        break;
    case "Refrigerante":
        console.log("Bebida não alcoólica e não fermentada, fabricada industrialmente, à base de água mineral e açúcar.");
        break;
    case "Suco":
        console.log("Bebida produzida do líquido e extraído de frutos.");
        break;
    default:
        console.log("Bebida desconhecida");
        break;
}
console.log(drinkType);