const agora = new Date();

const ano = agora.getFullYear();        // ANO
const mes = agora.getMonth() + 1;       // INTERVALOS ENTRE [0] E [11]
const dia = agora.getDate();        // DIA
const horas = agora.getHours();     // HORAS
const minutos = agora.getMinutes();     // MINUTOS
const segundos = agora.getSeconds();        //SEGUNDOS
const time = agora.getTime();       // número de milissegundos desde 1 de janeiro de 1970

console.log('Ano: '+ ano);
console.log('Mês: ' + mes);
console.log('Dia: ' + dia);
console.log('Horas: ' + horas);
console.log('Minutos: ' + minutos);
console.log('Segundos: ' + segundos);
console.log('Dia espercifico: ' + agora.getDay());  // dia espercifico  DOMINGO = 0 E SABADO = 6
console.log('Milissegundos: '+ time);

//-------------------BLOCO DE NOTAS COM MAIS INFORMAÇÕES **