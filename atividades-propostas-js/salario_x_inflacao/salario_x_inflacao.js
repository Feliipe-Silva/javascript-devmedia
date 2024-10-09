import entrada from 'readline-sync';

console.log('\n1 - Listar os salários mínimos de 2010 à 2020.');
console.log('2 - Listar o índice IPCA de 2010 à 2020.');
console.log('3 - Comparação entre o percentual de salarial e o IPCA. \n');

let digite_input = entrada.question('Digite o número da opção acima: ');

let salario_ano = 545;
let salario_anterior = 510;

switch (Number(digite_input)) {
    case 1: 
        console.log('opção 01');
        break;

    case 2:  
        console.log('opção 02');
        break;

    case 3:   
        console.log('opção 03');
        break;

    default:
        console.log("Opção inválida!");
        break;
}

