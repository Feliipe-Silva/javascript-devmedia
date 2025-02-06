import entrada from 'readline-sync';
import { fruta_selecionada, qtd_letras } from './colecao_de_frutas.js';
import { atualizar_palavra_oculta, validar_letra_digitada } from './atualizar_palavra.js';

console.log("\n-------------JOGO DA FORCA-------------\n");
console.log(`**Adivinhe o nome da fruta com ${qtd_letras} Letras\n`);

let status_erros = 4;
let palavra_oculta = fruta_selecionada[0] + "_".repeat(qtd_letras - 1);

while (palavra_oculta !== fruta_selecionada && status_erros > 0) {
    console.log("\nFRUTA: " + palavra_oculta);

    let letra_digitada = entrada.question("Digite uma letra: ").toLowerCase();

    if (!validar_letra_digitada(letra_digitada)) {
        console.log("\nEntrada inválida. Por favor, digite apenas uma letra.");
        continue;
    }

    if (!fruta_selecionada.includes(letra_digitada)) {
        status_erros--;
        console.log(`Letra incorreta! Você ainda tem ${status_erros} tentativas.`);
    } else {
        palavra_oculta = atualizar_palavra_oculta(palavra_oculta, letra_digitada, fruta_selecionada);
    }
}

if (palavra_oculta === fruta_selecionada) {
    console.log(`\nParabéns! Você acertou a palavra: ${fruta_selecionada.toUpperCase()}! 🎉`);
} else {
    console.log(`\nQue pena! Você perdeu. A palavra correta era: ${fruta_selecionada.toUpperCase()}.`);
}