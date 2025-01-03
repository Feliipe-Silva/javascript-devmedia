import entrada from 'readline-sync';

let valor_divida = entrada.question("Informe o valor devido: ");
let vencimento = entrada.question("Quantos dias se passaram desde o vencimento do boleto: ");

let juros = '';
let juros_console = "";
if(Number(vencimento) >= 10){
    juros = 0.10;
    juros_console = '10%';
    
} else {
    juros = 0.05;
    juros_console = '05%';
}

let mult = valor_divida * juros;
let resultado = Number(mult) + Number(valor_divida);

console.log("\n" + "Valor original da dívida: "+valor_divida);
console.log("Dias de atraso: "+vencimento+ " dias.");
console.log("Taxa de juros: "+juros_console);
console.log("Valor total com juros: "+ resultado);