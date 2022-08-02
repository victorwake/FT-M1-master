'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
// de binario a decimales
    let numero = num.split('');
    let resultado = 0;
    let exponente = numero.length - 1;
    for (let i = 0; i < numero.length; i++) {
        resultado += numero[i] * Math.pow(2, exponente);
        exponente--;
    }
    return resultado;
}

function DecimalABinario(num) {
  // tu codigo aca
// de decimales a binario
    let numero = num;
    let resultado = '';
    while (numero > 0) {
        resultado = (numero % 2) + resultado;
        numero = Math.floor(numero / 2);
    }
    return resultado;

}

console.log(BinarioADecimal('10011')); 
console.log(DecimalABinario(19));

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}