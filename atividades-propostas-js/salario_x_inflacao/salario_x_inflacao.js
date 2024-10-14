import entrada from 'readline-sync';

console.log('\n1 - Listar os salários mínimos de 2010 à 2020.');
console.log('2 - Listar o índice IPCA de 2010 à 2020.');
console.log('3 - Comparação entre o percentual de salarial e o IPCA. \n');

let digite_input = entrada.question('Digite o número da opção acima: ');
console.log(`\nOpção escolhido: [ ${digite_input} ]`);

let salario_ano = 545;
let salario_anterior = 510;

// let inflação = 6.50;

let difereca = salario_ano - salario_anterior;
let percentual_crescimento = (difereca / salario_anterior) * 100;

let historico_salarial = [      // OBJETOS COLEÇÃO
    {Salario: 510,      ano: '2010'},
    {Salario: 545,      ano: '2011'},
    {Salario: 622,      ano: '2012'},
    {Salario: 678,      ano: '2013'},
    {Salario: 724,      ano: '2014'},
    {Salario: 788,      ano: '2015'},
    {Salario: 880,      ano: '2016'},
    {Salario: 937,      ano: '2017'},
    {Salario: 954,      ano: '2018'},
    {Salario: 998,      ano: '2019'},
    {Salario: 1045,      ano: '2020'},
];

switch (Number(digite_input)) {
    case 1: 
        
        for (let salario of historico_salarial) {
        
            let ano = salario.ano;
            let salarios = salario.Salario;
            console.log(`Ano: `.padEnd(25, '.'), `${ano}`);
            console.log(`Salário mínimo R$: `.padEnd(25, '.'), `${salarios},00\n`);
        };
    break;

    case 2:  
        console.log('opção 02');
    break;

    case 3:   
        console.log('opção 03');
    break;

    default:
        console.log("**Opção inválida!**".padStart(23, ' '));
    break;
};