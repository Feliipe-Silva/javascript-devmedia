//-------------------
import entrada from 'readline-sync';
import { fruta_selecionada, qtd_letras } from './colecao_de_frutas.js';


console.log("\n-------------JOGO DA FORCA-------------\n");
console.log("**Adivinhe o nome da fruta com " + qtd_letras + " Letras\n");

console.log("FRUTA: " + fruta_selecionada[0] + "_".repeat( qtd_letras -1 ).split(''));
let letra_digitada = entrada.question("Digite uma letra: ");