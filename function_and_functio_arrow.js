//  FUNÇÃO SEM PARÂMETRO
function sempara(){
    return 'Olá, mundo!';
};

let cons = sempara();
console.log(cons);



//  FUNÇÃO COM PARÂMETROS
function retorna_media(nota_1, nota_2) {
let media = (nota_1 + nota_2) / 2;
let status;

if (media >= 6) {
    status = 'Aprovado';
} else {
    status = 'reprovado';
};

return status
};

let aluno_1 = retorna_media(8, 5);
let aluno_2 = retorna_media(5, 5);
let aluno_3 = retorna_media(9, 1);
let aluno_4 = retorna_media(4.5, 7);

console.log('1° aluno: '+aluno_1);
console.log('2° aluno: '+aluno_2);
console.log('3° aluno: '+aluno_3);
console.log('4° aluno: '+aluno_4);
console.log('\n');



//  FUNÇÃO DE ARROW FUNCTION (ou função de seta)
const retorna_media_aluno = (nota_1, nota_2) => {
let media = (nota_1 + nota_2) / 2;
let status;

if (media >= 6) {
    status = 'Aprovado';
} else {
    status = 'reprovado';
};

return status
};

let aluno_01 = retorna_media_aluno(8, 5);
let aluno_02 = retorna_media_aluno(5, 5);

console.log('1° aluno: '+aluno_01);
console.log('2° aluno: '+aluno_02);



// FUNCTION ARROW SIMPLES 
const soma_valores = (v1, v2) => { return (v1 + v2) / 2}; 

let resultado = soma_valores(10, 5);
resultado = resultado.toString().replace('.',',');

console.log(resultado); // Saída: 7,5



// ARROW SIMPLES SEM (return declarado)
const soma = (a, b) => a + b;

console.log(soma(15, 10)); // Saída: 25

// -----------RESUMO SOBRE FUNÇÕES NA PASTA 'resumo-JS'