// Escreva um programa em JavaScript que encontra o maior elemento em uma matriz.

function theBiggest(array){
    let biggest = array[0];
    for(let number of array){
        if(number > biggest){
            biggest = number;
        }
    }
    return biggest;
}

let numbers = [2, 5, 6, 1, 150, 230, 1200, 7, 16];
console.log(theBiggest(numbers));