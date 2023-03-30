// Escreva um programa em JavaScript que calcula a soma dos números em uma matriz.

function soma(array){
    let soma = 0;
    for(let numero of array){
        soma += numero;
    }
    return soma;
}

let numeros = [2, 3, 5, 7];
console.log(soma(numeros));