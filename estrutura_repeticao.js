//-----------------------CÓDIGO FORNECIDO----------------------------------------
/* let valor_produto = 500;

for ( let contador = 1; contador <= 5; contador++ ){    //ESTRUTA FOR

    let valor_parcela = valor_produto / contador;
    console.log("Nº de parcelas: " + contador + " - Valor da parcela: R$" + valor_parcela.toFixed(2));
}

// Nº de parcelas: 1 - Valor da parcela: R$500.00
// Nº de parcelas: 2 - Valor da parcela: R$250.00
// Nº de parcelas: 3 - Valor da parcela: R$166.67
// Nº de parcelas: 4 - Valor da parcela: R$125.00
// Nº de parcelas: 5 - Valor da parcela: R$100.00  */
//------------------------------------------------------------------------------


// let cont = 0;

// while (cont <= 5) {        //ESTRUTA WHILE
//     console.log(cont);
//     cont++;
// }



//-----------------------CÓDIGO FORNECIDO----------------------------------------

/* let numero = 3;
let contador = 0;

console.log("Tabuada de multiplicação - Nº " + numero);

while ( contador <= 10 ) {
    let resultado = numero * contador;
    console.log( numero + " x " + contador + " = " + resultado );
    contador++;  // + 1
}   */


//-----------------------CÓDIGO FORNECIDO----------------------------------------

/* let capital_emprestado = 3000;
let taxa_juros = 0.02;     // 2%

let contador = 1;
let parcelas_totais = 5;

while (contador <= parcelas_totais) {        //ESTRUTA WHILE

    let numero_parcela = contador;
    let juros_emprestimo = capital_emprestado * taxa_juros * numero_parcela;

    console.log("A taxa de juros no período de " + numero_parcela + " mes(es) é de R$" + juros_emprestimo + ",00");
    contador++;    // +1
}   */


//-----------------------CÓDIGO FORNECIDO  DECREMENTANDO------------------------------------

/* let contador = 10;

while ( contador > 0 ) {

    console.log( contador );
    contador--;  // -1
}  */

//----------------------------CÓDIGO FORNECIDO------------------------------------

/* let paises = ["Brasil", "Suíça", "França", "Japão"];
let contador = 0;

while ( contador < paises.length ) {     //PERCORRENDO ARRAY

    console.log(paises[contador]);
    contador++;
}  */

//----------------------------CÓDIGO FORNECIDO------------------------------------

let numeros = [10, 5, 7, 8, 9, 6, 12, 4];

let total_impares = 0;
let total_pares = 0;

let contador = 0;

while ( contador < numeros.length ) {

    if( numeros[contador] % 2 == 0 ){
        total_pares++;
    } else {
        total_impares++;
    }
    contador++;
}

console.log(" O total de números ímpares é: " + total_impares);
console.log(" O total de números pares é: " + total_pares);