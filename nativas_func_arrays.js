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
//------------------------------------------------------------------------------