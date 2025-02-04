// --------------------------
import entrada from 'readline-sync';
import { fruta_selecionada, qtd_letras } from './colecao_de_frutas.js';
import {  atualizar_palavra_oculta, palavra_oculta, validar_letra_digitada } from './atualizar_palavra.js';


console.log("\n-------------JOGO DA FORCA-------------\n");
console.log("**Adivinhe o nome da fruta com " + qtd_letras + " Letras\n");

console.log("FRUTA: " + palavra_oculta);
let letra_digitada = entrada.question("Digite uma letra: ").toLowerCase();

let palavra_atualizada = atualizar_palavra_oculta( palavra_oculta, letra_digitada, fruta_selecionada );
let statusJogo = 0;

while (statusJogo <= qtd_letras) {

    console.log(`\nFruta: ${ palavra_atualizada }`);

    letra_digitada = entrada.question("Digite uma letra: ").toLowerCase();
    atualizar_palavra_oculta( palavra_oculta, letra_digitada, fruta_selecionada );

    /* A lógica do jogo entrará aqui */
    if (validar_letra_digitada( letra_digitada )) {
        continue;

        function atualizar_palavra_oculta( palavra_oculta, letra_digitada, fruta_selecionada ) {
            let palavra_oculta_array = palavra_oculta.split('');
        
            for (let i = 0; i < fruta_selecionada.length; i++) {
        
                if (letra_digitada === fruta_selecionada[i]) {
                    palavra_oculta_array[i] = letra_digitada;
                };
            };
        
            return palavra_oculta_array.join('');
        };
        
        
        
        
        function validar_letra_digitada( letra_digitada ) {
        
            if( letra_digitada.length === 1 && letra_digitada.match(/[a-z]/) ){
                return true
            } else {
                return false
            }
        };

    } else {
        console.log("\nPor favor, digite uma letra válida.");
    }
};


// console.log(atualizar_palavra_oculta( palavra_oculta, letra_digitada, fruta_selecionada ));

export { letra_digitada };