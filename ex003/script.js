function checkNumber(num){
    if(num > 0) return 'positivo';
    if(num < 0) return 'negativo';
    if(num === 0) return 'zero';
}

console.log(checkNumber(0));