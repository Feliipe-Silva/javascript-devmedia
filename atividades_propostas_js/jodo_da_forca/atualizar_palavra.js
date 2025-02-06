// --------------------------
import { fruta_selecionada, qtd_letras } from './colecao_de_frutas.js';
import { letra_digitada } from './main_jogo.js';

let primeira_letra = fruta_selecionada[0];
let underline = "_".repeat(qtd_letras - 1);
let palavra_oculta = primeira_letra + underline;


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


export { atualizar_palavra_oculta, palavra_oculta, validar_letra_digitada };