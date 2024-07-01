const numbers = ['91', '5', '30', '97', '83', '31'];
let soma = 0;

for(let i = 0; i < numbers.length; i++) {
    soma += Number(numbers[i]);
}
console.log(soma === 337);