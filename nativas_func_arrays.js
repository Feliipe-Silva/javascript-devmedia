//          A função .push()
let dias_semana = ["domingo", "segunda", "terça"];

dias_semana.push("quanta"); //adicionado na ultima posição
console.log(dias_semana);
console.log("\n");


//          A função .splice()
// array.splice(índiceInicial, númeroDeElementosParaRemover, ...elementosParaAdicionar);
let array = ["domingo", "segunda", "terça"];
array.splice(2, 1,) // Removendo elemento da 3º posição (com índice 2)

array.splice(3, 0, "quanta-feira") // Adicionando elemento na posição 4 (indice 3)

array.splice(2, 0, "terça-feira") // Substituindo elemento
console.log(array);
console.log('\n');


//          A função .splice()  ------CÓDIGO FORNECIDO COMO EXEMPLO---------
const produto = {
    nome: 'New Super Mario Bros.', qnt: 1, valor: 250
};

const carrinho = [
    {  nome: 'The Legend of Zelda', qnt: 1, valor: 250 },
    {  nome: 'Super Mario Kart 8', qnt: 1, valor: 300 },
];

// Insere o produto no carrinho
carrinho.push(produto);

// Remove o item "Super Mario Kart 8"
carrinho.splice(1,1);

// Remove todos os elementos do carrinho
const totalElementos = carrinho.length;
carrinho.splice(0,totalElementos);
console.log(carrinho);      // ARRAY SEM VALORES
console.log('\n');
//------------------------------------------------------------------------------


//          A função .forEach()  -------CÓDIGO FORNECIDO COMO EXEMPLO---------
const produtos = [
    { id: 1, nome: 'Açucar', estoque: 100, valor: 2.00 },
    { id: 2, nome: 'Álcool 70', estoque: 50, valor: 9.95 },
    { id: 3, nome: 'Luvas descartáveis', estoque: 1000, valor: 2.50 },
];

function imprimirProduto (produto, index) {
    console.log( index + ' - ' + produto.nome );
};

produtos.forEach(imprimirProduto);
console.log('\n');

//-------------------------CONTINUAÇÃO---------------------------------


const carrinho0 = [
    {  nome: 'The Legend of Zelda', qnt: 1, valor: 250 },
    {  nome: 'Super Mario Kart 8', qnt: 1, valor: 300 },
    {  nome: 'New Super Mario Bros.', qnt: 1, valor: 250 }
];

function imprimirItem( produto, index ) {
    let texto = index + ' - ';
    texto += produto.qnt + ' UN - ';
    texto += produto.nome + ' - ';
    texto += 'R$ ' + produto.valor + ' - ';
    texto += 'R$ ' + produto.qnt * produto.valor;

    console.log( texto );
};

carrinho0.forEach(imprimirItem);
console.log('\n');
//------------------------------------------------------------------------------


//          A função .map()  ------CÓDIGO FORNECIDO COMO EXEMPLO---------

const carros = [
    { marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015 },
    { marca: 'GM', modelo: 'Onix', anoFabricacao: 2018 },
    { marca: 'Ford', modelo: 'KA+', anoFabricacao: 2018 },
    { marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2020 },
];

function retornaCarro(carro) { 
    return carro.marca + ' ' + carro.modelo + ' ano: ' + carro.anoFabricacao;
};

const novosCarros = carros.map(retornaCarro); // map() RECEBI O VALOR QUE ESTA EM PARAMENTROS DA FUNÇÃO

console.log(novosCarros);
console.log('\n');
/* *vai imprimir:
    'Fiat Uno ano: 2015'
    'GM Onix ano: 2018'
    'Ford KA+ ano: 2018'
    'Fiat Cronos ano: 2020'
*/

//-------------------------CONTINUAÇÃO---------------------------------

const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril",
    "Maio", "Junho", "Julho", "Agosto",
    "Setembro", "Outubro", "Novembro", "Dezembro"
];

function abreviar(mes) {
    return mes.substr(0,3);
};

const mesesAbreviados = meses.map(abreviar);

console.log(mesesAbreviados);
console.log('\n');
/* * Vai imprimir
[
    'Jan', 'Fev', 'Mar',
    'Abr', 'Mai', 'Jun',
    'Jul', 'Ago', 'Set',
    'Out', 'Nov', 'Dez'
] */
//----------------------CONTINUAÇÃO - NÃO FORNRCIDO-----------------------------


const dias = ["domingo", "segunda", "terça"];
const dias_map = dias.map(dia => dia.substring(0, 3));
console.log(dias_map); // [ 'dom', 'seg', 'ter' ]
//------------------------------------------------------------------------------