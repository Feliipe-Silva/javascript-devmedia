
// ------------------RESUMO SOBRE FUNÇÕES NA PASTA 'resumo-JS'-----------------------------

//----FUNÇÃO SEM PARÂMETRO
function sempara(){
    return 'Olá, mundo!';
};

let mens = sempara();
console.log(mens);
console.log('\n');



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
console.log('\n');


//----FUNCTION ARROW SIMPLES 
const soma_valores = (v1, v2) => { return (v1 + v2) / 2}; 

let resultado = soma_valores(10, 5);
resultado = resultado.toString().replace('.',',');

console.log(resultado); // Saída: 7,5
console.log('\n');


//----ARROW SIMPLES SEM (return declarado)
const soma = (a, b) => a + b;

console.log(soma(15, 10)); // Saída: 25
console.log('\n');


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

const verifica_data = (data, data_inicio, data_fim, tipo_comparacao) => {
    
    if (tipo_comparacao == "and") {
        
        return (data >= data_inicio && data <= data_fim)    // OUTRA MANEIRA DE ACESSA COLEÇÃO DE OBJETOS 
        
    } else if (tipo_comparacao == "or") {
        
        return (data >= data_inicio || data <= data_fim)    // OUTRA MANEIRA DE ACESSA COLEÇÃO DE OBJETOS 
    };
};

const retorna_signos = (array_signos, data) => {      // FUNC. ARROW
    
    let ano = data.getFullYear();
    
    for (let signo of array_signos) {     // LOOP (leitura dos objetos -> array_signos) PELO FOR, OF
    
        let data_inicio = new Date(ano + "-" + signo["DataInicio"] + " 00:00:00");
        let data_fim = new Date(ano + "-" + signo["DataFim"] + " 23:59:50");
        
        let tipo_comparacao = signo["DataInicio"] == "12-22" ? "or" : "and";
        
        if(verifica_data(data, data_inicio, data_fim, tipo_comparacao)) {
            return signo["Nome"];
        };
    };
};

let data = new Date();

const nome_signo = retorna_signos(array_signos, data);   // PASSANDO VALORES DE ARRAY PARA A => FUN. ARROW

console.log("O signo de hoje é: " + nome_signo);
console.log('\n');
// ----------------------------------------------------------------


//--------------------- FUNÇÃO ANÔNIMA ----------------------------

(function() {
    console.log("Executado imediatamente!");
})();   