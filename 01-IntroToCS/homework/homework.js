'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  // let array = num.split('');
let resultado = 0;
    for (let i = 0; i < num.length; i++) {
       resultado += num[i] * (2 ** (num.length - 1 - i));
    }
    return resultado;
}

function DecimalABinario(num) {
  // tu codigo aca
// de decimales a binario
    let resultado = '';
    while (num > 0) {
        resultado = (num % 2) + resultado;
        num = Math.floor(num / 2);
    }
    return resultado;

}


BinarioADecimal('1101'); 
DecimalABinario(14);



function DecimalABinarioUnaLinea(num) {
return parseInt(num, 2);
}

function BinarioADecimalUnaLinea(num) {
return num.toString(2);
}


console.log(DecimalABinarioUnaLinea('10101'));
console.log(BinarioADecimalUnaLinea(21));



module.exports = {
  BinarioADecimal,
  DecimalABinario,
}