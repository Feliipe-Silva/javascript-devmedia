const agora = new Date();

const ano = agora.getFullYear();
const mes = agora.getMonth(); // Indexado a partir de 0
const dia = agora.getDate();
const horas = agora.getHours();
const minutos = agora.getMinutes();
const segundos = agora.getSeconds();

console.log(ano);
console.log(mes);
console.log(dia);
console.log(horas);
console.log(minutos);
console.log(segundos);

console.log(agora.getDay());  // dia espercifico  DOMINDO = 0 E SABADO = 6