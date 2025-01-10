//

import array_signos from './colecao_signos.js';

import retorna_signos from './retorna_signo.js';

let data = new Date();

const nome_signo = retorna_signos(array_signos, data);   // PASSANDO VALORES DE ARRAY PARA A => FUN. ARROW

console.log("O signo de hoje é: " + nome_signo);
console.log('\n');