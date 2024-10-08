//-------------------------CÓDIGO FORNECIDO------------------------------
/* let emails_alunos = [
    "danilo@email.com",
    "jessica@email.com",
    "luana@email.com",
    "gustavo@email.com"
];

for ( let email of emails_alunos ) {

    console.log("Email: " + email);
}  */



//-------------------------CÓDIGO FORNECIDO------------------------------
/* let clientes_array = [
    {id: 1, nome: "Mônica", telefone: "99999-6565"},
    {id: 2, nome: "Tânia", telefone: "99999-0778"},
    {id: 3, nome: "Carlos", telefone: "99999-0551"}
];

for ( let cliente of clientes_array ) {

    let nome = cliente.nome;
    let telefone = cliente.telefone;

    console.log("Nome: " + nome + " - Telefone: " + telefone);
}  */



//-------------------------CÓDIGO FORNECIDO------------------------------
/* let produtos_array = [
    { id: 1, nome: "mouse", preco: 50 },
    { id: 2, nome: "teclado", preco: 90 },
    { id: 3, nome: "monitor", preco: 350 },
    { id: 4, nome: "nobreak", preco: 600 },
];

let percentual_desconto = 10;

for ( let produto of produtos_array ) {

    let nome = produto.nome;
    let preco = produto.preco;

    let valor_desconto = (preco * percentual_desconto) / 100;
    let novo_preco = preco - valor_desconto;

    console.log("Novo valor do produto " + nome + ": R$" + novo_preco + ",00");
}  */



//-------------------------CÓDIGO FORNECIDO------------------------------

/* let notas_bimestre = [8, 7, 4, 9];

let quantidade_notas = notas_bimestre.length
let soma_notas = 0;

for(let notas of notas_bimestre) {

    soma_notas = soma_notas + notas;   //ATRIBUIÇÃO E SOMA SUCESSIVAMENTE!
}

let media = soma_notas / quantidade_notas
console.log('Média: '+media)

if(media >= 7) {
    console.log('Aprovado!');

} else if(media >= 6) {
    console.log('Recuperação!');

} else {
    console.log('Reprovado!');
}  */




const produtos = [
    { descricao: 'Resma Ofício', valor: 11.50, quantidade: 10 },
    { descricao: 'Lápis preto', valor: 0.50, quantidade: 3 },
    { descricao: 'Transferidor plástico', valor: 1.20, quantidade: 4 }
];

const indice = 0; // Suponha que queremos o primeiro produto
const { valor, quantidade } = produtos[0];

console.log(valor);     // 11.50
console.log(quantidade);    // 10