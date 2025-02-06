function atualizar_palavra_oculta(palavra_oculta, letra_digitada, fruta_selecionada) {
    let palavra_oculta_array = palavra_oculta.split('');
    
    for (let i = 0; i < fruta_selecionada.length; i++) {
        if (letra_digitada === fruta_selecionada[i]) {
            palavra_oculta_array[i] = letra_digitada;
        }
    }
    
    return palavra_oculta_array.join('');
}

function validar_letra_digitada(letra_digitada) {
    return letra_digitada.length === 1 && letra_digitada.match(/[a-z]/);
}

export { atualizar_palavra_oculta, validar_letra_digitada };