'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
let resultado = 0;
    for (let i = 0; i < num.length; i++) {
       resultado += num[i] * (2 ** (num.length - 1 - i));
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

console.log(BinarioADecimal('1101')); 
console.log(DecimalABinario());

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}