const inputNumber = document.querySelector('#inputNumber');
const btn = document.querySelector('#btnTabuada');
const tabuada = document.querySelector('#tabuada');

function calcularTabuada(){
    let number = inputNumber.value;
    let produto, multiplicador;
    let arm = [];

    for (multiplicador = 1; multiplicador <= 10; multiplicador++){
        produto = number * multiplicador;
        arm.push(`${number} x ${multiplicador} = ${produto}`);
    }

    return arm;
}

btn.addEventListener('click', function (){
    if (inputNumber.value === ''){
        alert('insira um número');
    } else {
        tabuada.innerHTML = '';
        calcularTabuada().forEach(element => addOption(element));
    }
})

function addOption(valor){
    let option = new Option(valor, valor);
    tabuada.appendChild(option);
}