// Escreva um programa em JavaScript que calcula o fatorial de um número.

function fatorial(number){
    if(number === 0 || number === 1){
        return 1;
    } else {
        return number * fatorial(number - 1);
    }
}

console.log(fatorial(5));