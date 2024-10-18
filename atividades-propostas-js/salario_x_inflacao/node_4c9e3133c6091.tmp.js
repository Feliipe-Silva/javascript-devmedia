import entrada from 'readline-sync';

console.log('\n1 - Listar os salários mínimos de 2010 à 2020.');
console.log('2 - Listar o índice IPCA de 2010 à 2020.');
console.log('3 - Comparação entre o percentual de salarial e o IPCA. \n');

let digite_input = entrada.question('Digite o número da opção acima: ');
console.log(`\nOpção escolhido: [ ${digite_input} ]`);
console.log('\n');

let salario_ano = 545;
let salario_anterior = 510;

// let inflação = 6.50;

let difereca = salario_ano - salario_anterior;
let percentual_crescimento = (difereca / salario_anterior) * 100;

let historico_salarial = [      // ARRAYS COLEÇÃO DE OBJETOS
    {salario: 510,      ano: '2010'},
    {salario: 545,      ano: '2011'},
    {salario: 622,      ano: '2012'},
    {salario: 678,      ano: '2013'},
    {salario: 724,      ano: '2014'},
    {salario: 788,      ano: '2015'},
    {salario: 880,      ano: '2016'},
    {salario: 937,      ano: '2017'},
    {salario: 954,      ano: '2018'},
    {salario: 998,      ano: '2019'},
    {salario: 1045,      ano: '2020'},
];
//-------------------------------------

let inflacoes_arrays = [        // ARRAYS COLEÇÃO DE OBJETOS
    {ipca: 5.91,        ano: '2010'},
    {ipca: 6.50,        ano: '2011'},
    {ipca: 5.84,        ano: '2012'},
    {ipca: 5.91,        ano: '2013'},
    {ipca: 6.41,        ano: '2014'},
    {ipca: 10.67,       ano: '2015'},
    {ipca: 6.29,        ano: '2016'},
    {ipca: 2.95,        ano: '2017'},
    {ipca: 3.75,        ano: '2018'},
    {ipca: 4.31,        ano: '2019'},
    {ipca: 4.52,        ano: '2020'}
];

switch (Number(digite_input)) {
    case 1: 
        for (let salario_indices of historico_salarial) {
        
            let ano = salario_indices.ano;
            let salarios = salario_indices.salario;
            
            console.log(`Ano: `.padEnd(30, '.'), `${ano}`);
            console.log(`Salário mínimo `.padEnd(30, '.'), `R$: ${salarios},00\n`);
        };
    break;

    case 2:
        for (let i = 0; i < inflacoes_arrays.length; i++) {

            let inflacao_ipca = inflacoes_arrays[i].ipca;
            let ano_inflacao = inflacoes_arrays[i].ano;
            let inflacao_formatado = inflacao_ipca.toFixed(2).replace('.', ',');
            
            console.log(`Ano: `.padEnd(30, '.'), `${ano_inflacao}`);
            console.log(`Inflação IPCA: `.padEnd(30, '.'), `${inflacao_formatado}%\n`);
        };
    break;

    case 3:   
        for (let contador of historico_salarial) {

            for (let inflacao of inflacoes_arrays) {
        
                let inflacao_ipca = inflacao.ipca;
                inflacao_ipca = inflacao_ipca.toFixed(2).replace(".", ",");
                let ano_salario_inflacao = contador.ano;
                let salario_indices = contador.salario;
        
                console.log(`Ano: `.padEnd(30, "."), `${ano_salario_inflacao}`);
                console.log(`Salário mínimo R$:`.padEnd(30, "."), `${salario_indices},00`);
                console.log(`Crescimento Salarial: -`);
                console.log(`Inflação IPCA: `.padEnd(30, "."), `${inflacao_ipca}%`);
                console.log('\n');
                break;
            };
        };
    break;

    default:
        console.log("**Opção inválida!**".padStart(23, ' '));
    break;
};