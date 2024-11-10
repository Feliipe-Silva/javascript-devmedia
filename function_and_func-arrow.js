
// ------------------RESUMO SOBRE FUNÇÕES NA PASTA 'resumo-JS'-----------------------------

//----FUNÇÃO SEM PARÂMETRO
function sempara(){
    return 'Olá, mundo!';
};

let mens = sempara();
console.log(mens);



//----FUNÇÃO COM PARÂMETROS
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



//----FUNÇÃO DE ARROW FUNCTION (ou função de seta)
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



//----FUNCTION ARROW SIMPLES 
const soma_valores = (v1, v2) => { return (v1 + v2) / 2}; 

let resultado = soma_valores(10, 5);
resultado = resultado.toString().replace('.',',');

console.log(resultado); // Saída: 7,5



//----ARROW SIMPLES SEM (return declarado)
const soma = (a, b) => a + b;

console.log(soma(15, 10)); // Saída: 25



//--------------EXERCITANDO UMA APLICAÇÃO SIGNOS HOJE. -------------------

let array_signos = [
    {"Nome": "Aquário",     "DataInicio": "01-20",      "DataFim":"02-18"},
    {"Nome": "Peixes",      "DataInicio": "02-19",      "DataFim":"03-20"},
    {"Nome": "Áries",       "DataInicio": "03-21",      "DataFim":"04-19"},
    {"Nome": "Touro",       "DataInicio": "04-20",      "DataFim":"05-20"},
    {"Nome": "Gêmeos",      "DataInicio": "05-21",      "DataFim":"06-21"},
    {"Nome": "Câncer",      "DataInicio": "06-22",      "DataFim":"07-23"},
    {"Nome": "Leão",        "DataInicio": "07-24",      "DataFim":"08-22"},
    {"Nome": "Virgem",      "DataInicio": "08-23",      "DataFim":"09-22"},
    {"Nome": "Libra",       "DataInicio": "09-23",      "DataFim":"10-22"},
    {"Nome": "Escorpião",   "DataInicio": "10-23",      "DataFim":"11-21"},
    {"Nome": "Sagitário",   "DataInicio": "11-22",      "DataFim":"12-21"},
    {"Nome": "Capricórnio", "DataInicio": "12-22",      "DataFim":"01-19"}
];

const retorna_signo = (signos) => {

    let data = new Date("2020-02-07 00:00:00");

    let ano = data.getFullYear();

    let data_inicio_signo = new Date(ano + "-" + signos[0]["DataInicio"] + " 00:00:00");
    let data_fim_signo = new Date(ano + "-" + signos[0]["DataFim"] + " 23:59:59");

    if( data >= data_inicio_signo && data <= data_fim_signo ){
        return signos[0]["Nome"];
    };

};

const nome_signo = retorna_signo(array_signos);

console.log("O signo de hoje é: " + nome_signo);