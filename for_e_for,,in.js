//---------------------------CÓDIGO FORNECIDO----------------------------------
/* let multiplicador = 8;

console.log("Tabuada de multiplicação do Nº " + multiplicador);

for ( let contador = 0; contador <= 10; contador++ ) {

    let resultado = multiplicador * contador;
    console.log( multiplicador + " x " + contador + " = " + resultado );
} */


//---------------------------CÓDIGO FORNECIDO----------------------------------

/* let meses = [
    "Janeiro", "Fevereiro", "Março", 
    "Abril", "Maio", "Junho", 
    "Julho", "Agosto", "Setembro", 
    "Outubro", "Novembro", "Dezembro"
];

for( let contador = 0; contador < meses.length; contador++ ) {

    console.log(meses[contador]);
};  */


//---------------------------CÓDIGO FORNECIDO----------------------------------
//---------------------------COMANDO BREAK;
/* let funcionarios = [
    {id: 1, nome: "César", habilitado: false},
    {id: 2, nome: "Jéssica", habilitado: false},
    {id: 3, nome: "Renan", habilitado: true},
    {id: 4, nome: "Marlon", habilitado: false},
    {id: 5, nome: "Ana", habilitado: false},
];

let encontrouHabilitado = false;

for ( let contador = 0; contador < funcionarios.length; contador++ ) {

    let funcionario = funcionarios[contador];

    if( funcionario.habilitado == true ){
        console.log("Funcionário habilitado encontrado: " + funcionario.nome);
        encontrouHabilitado = true;
        break;  //PARAR
    }
}

if (!encontrouHabilitado) {
    console.log("Nenhum funcionário habilitado encontrado");
}  */



//---------------------------CÓDIGO FORNECIDO----------------------------------
//---------------------------COMANDO CONTINUE;

/* let alunos = [
    {id: 1, nome: "Bruna", media: 8},
    {id: 2, nome: "Laura", media: 7},
    {id: 3, nome: "José", media: 5},
    {id: 4, nome: "Guilherme", media: 4},
    {id: 5, nome: "Rafael", media: 10},
];

for ( let contador = 0; contador < alunos.length; contador++ ) {
 
    let aluno = alunos[contador];
 
    if ( aluno.media < 6 ) {
        continue;  // COMTINUE;
    }
    console.log("Id: " + aluno.id);
    console.log("Nome: " + aluno.nome);
    console.log("Média: " + aluno.media);
    console.log("\n");

}   */



//---------------------------CÓDIGO FORNECIDO----------------------------------

/* let notas_trimestrais = [7, 8, 6, 5];

let soma_notas = 0;
const quantidade_notas = 4;

for ( let contador = 0; contador < quantidade_notas; contador++ ) {
    soma_notas = soma_notas + notas_trimestrais[contador];
}

let media = soma_notas / quantidade_notas; //PODERIA SER > notas_trimestrais.length

if ( media >= 6 ) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}  */




//---------------------------CÓDIGO FORNECIDO---------------------------------
//---------------------------FOR IN;

/* let aluno = { nome: "Marcos", email: "marcos@email.com", idade: 25 };

for ( let dados in aluno ) {   // DADOS, LER PROPRIEDADE E A VALOR;
    console.log(aluno[dados]);
}  */



//---------------------------CÓDIGO FORNECIDO---------------------------------
//---------------------------FOR IN;
/* let carro = { nome: "Argo", marca: "Fiat", preco: 50000, ano: 2020 };

let percentual_desconto = 5;

for ( let propriedade in carro ) {

    if ( propriedade == "preco" ) {

        let preco = propriedade;
        let desconto = ( carro[preco] * percentual_desconto ) / 100;
        let novo_preco = carro[preco] - desconto;
        console.log("novo preço: R$" + novo_preco + ",00");
    } else {

        console.log(propriedade + ": " + carro[propriedade]);
    }
}  */


//---------------------------CÓDIGO FORNECIDO---------------------------------
//---------------------------FOR IN;

let produtos = [
    { id: 1, nome: "pizza", preco: 50 },
    { id: 2, nome: "macarronada", preco: 25 },
    { id: 3, nome: "lasanha", preco: 45 },
    { id: 4, nome: "nhoque", preco: 30 }
];

let desconto = 5;

for ( let contador = 0; contador < produtos.length; contador++ ){

    let produto = produtos[contador];

    for ( let propriedade in produto ){

        if ( propriedade == "preco" ) {

            let preco = propriedade;

            let novo_preco = produto[preco] - desconto;

            console.log("preço atualizado: R$" + novo_preco + ",00");

        } else {

            console.log(propriedade + ": " + produto[propriedade]);
        }
    }
    console.log("---------------------------");
}



/* A estrutura de repetição for .. in permite que todas as propriedades de um objeto sejam percorridas. 

Quando for necessário percorrer as propriedades de um objeto, 
utilize a estrutura de repetição for .. in para resolver esse problema */