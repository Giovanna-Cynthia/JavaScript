const fruits = ["morango", "banana", "mamão", "pera"];

 
if (fruits.includes("abacaxi")) {
    console.log('A string "abacaxi" existe no array fruits');
} else if (fruits.includes("pera") ){
    console.log('A string "pera" exixte na array fruits.');
} else {
    console.log('Nem pera e nem abacaxi existem no array "fruits".');
}