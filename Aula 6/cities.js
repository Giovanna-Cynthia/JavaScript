const cities = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais'];
let upperCaseCities = [];

//percorrendo a array tipo string
for(let i = 0; i < cities.length; i++) {
    //para deixar o texto inteiro em maiusculo
    upperCaseCities.push(cities[i].toUpperCase());
}
console.log(upperCaseCities);
