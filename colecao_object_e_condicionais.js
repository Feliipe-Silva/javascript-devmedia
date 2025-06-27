/* console.log(1 == '1' || "a" == "a");    // true
console.log(35 === '35' && 1 == 10);    // false
console.log( !( 'a' == 1) );  */    // true

//----------------------CRIAÇÃO DE OBJETOS-------------------------------------


/*  var nome = null;
console.log(nome);

const n1 = 20 % 2 == 0;
console.log(n1);   */


  var produt01 = {        // OBJECT
    id: 9,
    nome: "Cafeteira",
    preco: 19.99
};
produt01.categoria = "Bazar"

console.log(Object.keys(produt01).length);
console.log(produt01.categoria);


const livro = {};       // OBJECT FORNECIDO
livro.titulo = "JavaScript Básico";
livro.autor = "Desconhecido";

console.log(livro);


const pessoa = {
    nome: "João",
    idade: 30,
    saudacao: function() {
        return `Olá, meu nome é ${this.nome}`;
    }
};

console.log(pessoa.saudacao());


function Carro(marca, modelo, cor) {
    this.marca = marca;
    this.modelo = modelo;
    this.cor = cor;
}

const meuCarro = new Carro("Toyota", "Corolla", "preto");

console.log(meuCarro); 

//-------------------------OBJETOS FORNECIDO------------------------------------


 /* var usuario = {
    id: 2,
    nome: "Rafael Nogueira Lemos",
    idade: 17
};

var atendeAClassificacaoEtaria = usuario.idade >= 18

if(atendeAClassificacaoEtaria === true) {
    console.log("O usuário ainda pode assistir o conteúdo");
} else {
    console.log("O usuário ainda não pode assistir o conteúdo");
} */

/*var colecao = [
    {id: 1, nome: "Felipe",     idade: 28+" anos"},  // índice 0
    {id: 2, nome: "Quezia",     idade: 32+" anos"},  // índice 1
    {id: 3, nome: "Isis",       idade: 7+" anos"},   // índice 2
    {id: 4, nome: "Mateus",     idade: 11+" anos"},  // índice 3
];

var novo = {
    id: 5, 
    nome: "Sofia", 
    idade: 16+" anos"
};
colecao.push(novo);

var quantidade = colecao.length;  
var aleatorio = (Math.floor(Math.random() * quantidade));   // Função que gera um numero aleatorio.
var indice_colecao = colecao[aleatorio];
console.log(indice_colecao.nome + ", " + indice_colecao.idade);  */


// console.log(colecao[4].id);
// console.log(colecao[4].nome);
// console.log(colecao[4].idade);

// var data_atual = new Date();  // FUNÇÃO QUE PEGA DATA E HORA ATUAL DO SERVIDOR.

// console.log(data_atual.getDay());  //Função que pega somente a data do dia .

//--------------------------COLEÇÃO DE OBJETOS FORNECIDO-----------------------------

 /* var colecao_series_programacao = [
    {nome: "Breaking Bad",           horario: "21h",     sinopse: "Um professor de química se transforma quando descobre ter um câncer terminal. Daí ele usa suas habilidades a favor do crime"},
    {nome: "Fargo",                  horario: "22h",     sinopse: "Uma sequência de crimes saem errado e são investigados por uma detetive."},
    {nome: "Lost",                   horario: "20h",     sinopse: "Um avião cai em uma ilha deserta e logo um grupo de passageiros precisa lutar para sobreviver." },
    {nome: "Prison Break",           horario: "23h",     sinopse: "Um homem cria um plano para tirar o irmão sentenciado à morte por um suposto assassinato do vice-presidente dos EUA"},
    {nome: "Black Mirror",           horario: "23h",     sinopse: "Contos de ficção científica que refletem o lado negro da tecnologia, mostrando que nem toda novidade traz só benefícios." },
    {nome: "Pessoa de interesse ",   horario: "20h",     sinopse: "Um ex-agente da CIA, dado como morto pelo governo dos EUA, é recrutado por um milionário, para um projeto ultrassecreto."},
    {nome: "Dark",                   horario: "22h",     sinopse: "O desaparecimento de crianças na cidade alemã de Winden remete a acontecimentos idênticos ocorridos há 33 anos e 66 anos."}
];

var data_atual = new Date();   // Função que pega data e hora
var dia_semana = data_atual.getDay();   // Função que extrai da função anterior o dia da semana.

var serie_do_dia = colecao_series_programacao[dia_semana];

var nome_serie = serie_do_dia.nome;     // pega o array/object e índice e propriedade(nome). 
var horario_serie = serie_do_dia.horario;   // pega o índice e propriedade(horario).
var sinopse_serie = serie_do_dia.sinopse;   // pega o índice e propriedade(sinopse).

console.log("Hoje é dia de (" + nome_serie + ") às (" + horario_serie +")" );
console.log("A seguir uma visão geral da série: " + sinopse_serie);   */

//--------------------------ESTRUTURA CONDICIONAIS FORNECIDO-----------------------------

// let ddd = 11;

// switch (ddd) {
//     case 11:
//         console.log("São Paulo");
//         break;
//     case 21:
//         console.log("Rio de Janeiro")
//         break;
// }

// let mes = 8;

// var preco_promo = (mes == 11 || mes == 12) ? "Promoção" : "Preço normal";   // OPERADOR TERNÁRIO->  ? :
// console.log(preco_promo);

// var aprovado = true;
// aprovado && console.log("Parabéns");




// var produto = "Smartphone";

// switch(produto) {
//     case "Smartphone":
//     case "Celular":
//     case "Telefone":
//         console.log("Produto: Smartphone");
//         break;
//     case "TV":
//         console.log("Produto: TV");
//         break;
//     default:
//         console.log("Produto inválido");
//         break;
// }
