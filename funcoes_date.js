const agora = new Date();

const ano = agora.getFullYear();        // ANO
const mes = agora.getMonth() + 1;       // O VALOR RETORNADO SERÁ ENTRE [0] E [11]. JAN = 0 / DEZ = 11
const dia = agora.getDate();        // DIA
const horas = agora.getHours();     // HORAS
const minutos = agora.getMinutes();     // MINUTOS
const segundos = agora.getSeconds();        //SEGUNDOS
const dia_semana = agora.getDay();      // O VALOR RETORNADO SERÁ ENTRE [0] E [6]. DOM = 0 / SAB = 6
const time = agora.getTime();       // fornece o tempo total em milissegundos desde 1 de janeiro de 1970.
const mili = agora.getMilliseconds();   // retorna apenas a parte de milissegundos (de 0 a 999) do tempo atual.

console.log('Ano: '+ ano);
console.log('Mês: ' + mes);
console.log('Dia: ' + dia);
console.log('Horas: ' + horas);
console.log('Minutos: ' + minutos);
console.log('Segundos: ' + segundos);
console.log('Dia espercifico: ' + dia_semana);  // dia específico entre dias da semana.
console.log('Millisegundos, desde de 1970: '+ time);
console.log('Millisegundos, (de 0 a 999) do tempo atual: ' + mili);

//-------------------BLOCO DE NOTAS COM MAIS INFORMAÇÕES **
//-------------------NA PASTA (resumo-JS) **