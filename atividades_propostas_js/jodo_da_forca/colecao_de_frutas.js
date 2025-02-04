// --------------------------
const listaDeFrutas = [
    'Pera', 'Banana', 'Laranja', 'Abacaxi',
    'Manga', 'Uva', 'Abacate', 'Jaca', 'Caju',
    'Melancia', 'Carambola', 'Kiwi', 'Goiaba',
    'Cereja', 'Morango', 'Maracuja', 'Pessego',
    'Pequi', 'Pitanga', 'Tangerina', 'Tamarindo',
    'Caju', 'Manga', 'Jambo', 'Jabuticaba',
    'Groselha', 'Figo', 'Framboesa', 'Caqui', 'Cacau'
];

function fruta_aleatoria( ) {

    let comprimento_array = listaDeFrutas.length;
    let num_aleatorio = Math.floor( Math.random(0, 1) * comprimento_array );

    return listaDeFrutas[num_aleatorio].trim();
};

let fruta_selecionada = fruta_aleatoria();
let qtd_letras = fruta_selecionada.length;


export { fruta_selecionada, qtd_letras };