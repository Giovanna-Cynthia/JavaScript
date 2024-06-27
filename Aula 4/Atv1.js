let hours = 18;
let isBomDia = hours >= 6 && hours <= 11;
let isBoaTarde = hours >= 12 && hours <= 17;

if (isBomDia) {
    console.log("Bom Dia!");
} else if (isBoaTarde) {
    console.log("Boa Tarde!");
} else {
    console.log("Boa Noite!");
}