import entradaDados from 'readline-sync';

let x = entradaDados.question("Digite: ");
let y = entradaDados.question("Digite: ");

let soma = Number(x) + Number(y);
console.log("A soma dos valores de "+ x +" + "+ y + " = "+ soma);

//----------------------DADOS FORNECIDOS-------------------------------------

/* import entradaDados from 'readline-sync';

console.log("Conversor de Celsius para Kelvin: \n");

let C = entradaDados.question("Informe o valor em Celsius: ");
let K = Number(C) + 273.15;

console.log(C+"ºC equivale a "+K+"K");  */



//----------------------DADOS FORNECIDOS-------------------------------------

/* import entradaDados from 'readline-sync';

console.log("Área do triângulo: \n");

let base = entradaDados.question("Informe a base: ");
let altura = entradaDados.question("Informe a altura: ");
let area = (base * altura) / 2;

console.log("A área do triângulo é: "+area); */