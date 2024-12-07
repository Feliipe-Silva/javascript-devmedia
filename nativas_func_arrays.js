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