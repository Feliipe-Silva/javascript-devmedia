const lista_de_frutas = [
    'Pera', 'Banana', 'Laranja', 'Abacaxi',
    'Manga', 'Uva', 'Abacate', 'Jaca', 'Caju',
    'Melancia', 'Carambola', 'Kiwi', 'Goiaba',
    'Cereja', 'Morango', 'Maracuja', 'Pessego',
    'Pequi', 'Pitanga', 'Tangerina', 'Tamarindo',
    'Caju', 'Manga', 'Jambo', 'Jabuticaba',
    'Groselha', 'Figo', 'Framboesa', 'Caqui', 'Cacau'
];

function frutaAleatoria() {
    let comprimento_array = lista_de_frutas.length;
    let num_aleatorio = Math.floor(Math.random() * comprimento_array);
    return lista_de_frutas[num_aleatorio].trim().toLowerCase();
}

const fruta_selecionada = frutaAleatoria();
const qtd_letras = fruta_selecionada.length;

export { fruta_selecionada, qtd_letras };