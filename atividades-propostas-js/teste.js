import entrada from 'readline-sync';

let valor_divida = entrada.question("Informe o valor devido: ");
let vencimento = entrada.question("Quantos dias se passaram desde o vencimento do boleto: ");

console.log("\n" + "Valor original da dívida: "+valor_divida);
console.log("Dias de atraso: "+vencimento+ " dias.");
console.log("Taxa de juros: ");
console.log("Valor com juros: ");