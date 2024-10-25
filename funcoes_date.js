const agora = new Date();

const ano = agora.getFullYear();        // ANO
const mes = agora.getMonth() + 1;       // O VALOR RETORNADO SERÁ ENTRE [0] E [11]. JAN = 0 / DEZ = 11
const dia = agora.getDate();        // DIA
const horas = agora.getHours();     // HORAS
const minutos = agora.getMinutes();     // MINUTOS
const segundos = agora.getSeconds();        //SEGUNDOS
const dia_semana = agora.getDay();      // O VALOR RETORNADO SERÁ ENTRE [0] E [6]. DOM = 0 / SAB = 6
const time = agora.getTime();       // fornece o tempo total em milissegundos desde 1 de janeiro de 1970.
const milli = agora.getMilliseconds();   // retorna apenas a parte de milissegundos (de 0 a 999) do tempo atual.

console.log('Ano: '+ ano);
console.log('Mês: ' + mes);
console.log('Dia: ' + dia);
console.log('Horas: ' + horas);
console.log('Minutos: ' + minutos);
console.log('Segundos: ' + segundos);
console.log('Dia espercifico: ' + dia_semana);  // dia específico entre dias da semana.
console.log('Millisegundos, desde de 1970: '+ time);
console.log('Millisegundos, (de 0 a 999) do tempo atual: ' + milli);
console.log('\n');

//-------------------BLOCO DE NOTAS COM MAIS INFORMAÇÕES **
//-------------------NA PASTA (resumo-JS) **

const dataAtual = new Date();
// console.log( dataAtual.getUTCFullYear() );
// console.log( dataAtual.getTime() );
// console.log( dataAtual.getTimezoneOffset() );
// console.log( dataAtual.valueOf() );



// console.log( dataAtual.getUTCFullYear() );
// console.log( dataAtual.getUTCMonth() );
// console.log( dataAtual.getUTCDate() );
// console.log( dataAtual.getUTCHours() );
// console.log( dataAtual.getUTCMinutes() );
// console.log( dataAtual.getUTCSeconds() );
// console.log( dataAtual.getUTCMilliseconds() );
// console.log( dataAtual.getUTCDay() );

console.log('toString..........'+ dataAtual.toString());
console.log('DateString..........'+ dataAtual.toDateString());
console.log('TimeString..........'+ dataAtual.toTimeString());
console.log('ISOString..........'+ dataAtual.toISOString()) // 2024-10-24T17:51:13.174Z

console.log('\n')
console.log('LocaleString..........'+ dataAtual.toLocaleString());  // 24/10/2024, 15:25:04
console.log('LocaleDateString..........'+ dataAtual.toLocaleDateString());  // 24/10/2024
console.log('LocaleTimeString..........'+ dataAtual.toLocaleTimeString());  // 15:25:04


console.log('\n')
const personalizandoData =  {
    weekday: 'long', // segunda-feira
    // weekday: 'short', // seg.
    // weekday: 'narrow', // S

    // month: "numeric", // 2
    // month: "2-digit", // 02
    month: "long", // Março
    // month: "short", // Mar
    // month: "narrow", // M

    year: 'numeric', // 2020
    // year: '2-digit', // 20

    // day: 'numeric', // 1
    day: '2-digit', // 01
};
console.log(dataAtual.toLocaleDateString('pt-BR', personalizandoData));

//--------------------------------
const personalizandoTempo = {
    // hour: 'numeric', // 1
    hour: '2-digit', // 01,

    // minute: 'numeric', // 1
    minute: '2-digit', // 01,

    // second: 'numeric', // 1
    second: '2-digit', // 01,
}

console.log( dataAtual.toLocaleTimeString('pt-BR', personalizandoTempo) );

//----------------------------------------------------------------
const personalizandoDataTempo = {
    // dateStyle: "full", // segunda-feira, 9 de novembro de 2020
    // dateStyle: "long", // 9 de novembro de 2020
    dateStyle: "medium", // 9 de nov. de 2020
    // dateStyle: "short", // 09/11/2020

    timeStyle: "full", // 01:05:09 Horário Padrão de Brasília
    // timeStyle: "long", // 01:05:09 BRT
    // timeStyle: "medium", // 01:05:09
    // timeStyle: "short", // 01:05
}

console.log( dataAtual.toLocaleString('pt-BR', personalizandoDataTempo) );