//        ###  A função .push() - NÃO FORNECIDO-----------------------------
let dias_semana = ["domingo", "segunda", "terça"];

dias_semana.push("quanta"); //adicionado na ultima posição
console.log(dias_semana);
console.log("\n");
//------------------------------------------------------------------------------


//       ###   A função .splice() - NÃO FORNECIDO-----------------------------
// array.splice(índiceInicial, númeroDeElementosParaRemover, ...elementosParaAdicionar);
let array = ["domingo", "segunda", "terça"];
array.splice(2, 1,) // Removendo elemento da 3º posição (com índice 2)

array.splice(3, 0, "quanta-feira") // Adicionando elemento na posição 4 (indice 3)

array.splice(2, 0, "terça-feira") // Substituindo elemento
console.log(array);
console.log('\n');
//------------------------------------------------------------------------------


//        ###  A função .splice()  ------CÓDIGO FORNECIDO COMO EXEMPLO---------
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


//        ###  A função .forEach()  -------CÓDIGO FORNECIDO COMO EXEMPLO---------
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


//        ###  A função .map()  ------CÓDIGO FORNECIDO COMO EXEMPLO---------

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
//----------------------CONTINUAÇÃO - NÃO FORNECIDO-----------------------------


const dias = ["domingo", "segunda", "terça"];

const dias_map = dias.map(dia => dia.substring(0, 3));
console.log(dias_map); // [ 'dom', 'seg', 'ter' ]
console.log('\n');
//------------------------------------------------------------------------------


//        ###  A função .filter()  ------CÓDIGO FORNECIDO COMO EXEMPLO---------
const carros_car = [
    { marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015 },
    { marca: 'GM', modelo: 'Onix', anoFabricacao: 2018 },
    { marca: 'Ford', modelo: 'KA+', anoFabricacao: 2018 },
    { marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2020 },
];

function retornarCarroFiat(carro) {
    return (carro.marca == 'Fiat');
};

const carrosFiat = carros_car.filter( retornarCarroFiat ); // RECEBI O VALOR QUE ESTA EM PARAMENTROS DA FUNÇÃO

console.log(carrosFiat);
console.log('\n');
/*
  * vai imprimir:
[
    { marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015 },
    { marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2020 }
] */
//------------------------------------------------------------------------------


//        ###  A função .reduce()  ------CÓDIGO FORNECIDO COMO EXEMPLO---------
const itensCarrinho = [
    { id: 1, nome: 'Açucar', qnt: 2, valor: 2.00 },
    { id: 2, nome: 'Álcool 70', qnt: 3, valor: 9.95 },
    { id: 3, nome: 'Luvas descartáveis', qnt: 50, valor: 2.50 },
    { id: 4, nome: 'Papel toalha', qnt: 1, valor: 2.00 },
];

function somarValor (total, itemCarrinho) {
    const valorTotal = itemCarrinho.qnt * itemCarrinho.valor;
    return total + valorTotal;
};

const valorAPagar = itensCarrinho.reduce(somarValor, 0); // RECEBI O VALOR QUE ESTA EM PARAMENTROS DA FUNÇÃO

console.log("Valor total dos itens: " + valorAPagar);  // vai imprimir: 160.85
console.log('\n');

//-------------------------CONTINUAÇÃO---------------------------------

const itensOpcionais = [
    { nome: 'Pré som', valor: 800 },
    { nome: 'Conta-giros', valor: 500 },
    { nome: 'Desembaçador traseiro', valor: 1000 },
    { nome: 'Ar quente', valor: 1800 },
];

const valorTotal = itensOpcionais.reduce( ( total, item ) => {  // O segundo argumento vai percorrer o array
    return total + item.valor;
}, 0);  // O 0 no final é o valor inicial do acumulador (total).

console.log('R$ ' + valorTotal.toFixed(2));
//------------------------------------------------------------------------------


//          A função .sort()  ------CÓDIGO FORNECIDO COMO EXEMPLO---------
const frutas = ['Manga', 'Laranja', 'Tangerina', 'Banana'];

frutas.sort();

console.log("Array depois da ordenação:");
console.info(frutas);  // console.info() é similar ao console.log(), Mas possui significado semântico.
console.log("\n");

//-------------------------CONTINUAÇÃO---------------------------------

const numeros = [40, 1, 200, 5];

function ordenaNumeros(a, b){
    return a - b;
};

numeros.sort(ordenaNumeros);
// numeros.sort((a, b) => a - b);

console.log("Array depois da ordenação:");
console.info(numeros);
console.log("\n");