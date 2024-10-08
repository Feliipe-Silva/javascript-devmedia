//--------------------------CÓDIGO FORNECIDO---------------------------
//--------------------------COMANDO BREAK---------------------------
/* let funcionarios = [
    {id: 1, nome: "César",      habilitado: false},
    {id: 2, nome: "Jéssica",    habilitado: false},
    {id: 3, nome: "Renan",      habilitado: true },
    {id: 4, nome: "Marlon",     habilitado: false},
    {id: 5, nome: "Ana",        habilitado: false}
];

let contador = 0;
let encontrouHabilitado = false;

while( contador < funcionarios.length ) {
    let funcionario = funcionarios[contador];

    if( funcionario.habilitado == true ){
        console.log("Funcionário habilitado encontrado: " + funcionario.nome);
        encontrouHabilitado = true;
        break;   // PARAR 
    }
    contador++;
}  */



//--------------------------CÓDIGO FORNECIDO---------------------------
//--------------------------COMANDO CONTINUE---------------------------

/* let alunos = [
    {id: 1, nome: "Bruna", media: 8},
    {id: 2, nome: "Laura", media: 7},
    {id: 3, nome: "José", media: 5},
    {id: 4, nome: "Guilherme", media: 4},
    {id: 5, nome: "Rafael", media: 10},
];

let contador = 0;

while( contador < alunos.length ) {
    let aluno = alunos[contador];

    contador++;
    if( aluno.media < 6 ) {
        continue;
    }
    console.log("Id: " + aluno.id);
    console.log("Nome: " + aluno.nome);
    console.log("Média: " + aluno.media);
    console.log("\n");
}

if(!encontrouHabilitado) {
    console.log("Nenhum funcionário habilitado encontrado");
}   */


//--------------------------CÓDIGO FORNECIDO---------------------------
//--------------------------COMANDO break e do...while---------------------------

/* let funcionarios = [
    {id: 1, nome: "César", habilitado: false},
    {id: 2, nome: "Jéssica", habilitado: false},
    {id: 3, nome: "Renan", habilitado: true},
    {id: 4, nome: "Marlon", habilitado: false},
    {id: 5, nome: "Ana", habilitado: false},
];

let contador = 0;
let encontrouHabilitado = false;

do {
    let funcionario = funcionarios[contador];

    if( funcionario.habilitado == true ){
        console.log("Funcionário habilitado encontrado: " + funcionario.nome);
        encontrouHabilitado = true;
        break;
    }
    contador++;

} while ( contador < funcionarios.length );

if (!encontrouHabilitado) {
    console.log("Nenhum funcionário habilitado encontrado");
}  */


//--------------------------CÓDIGO FORNECIDO---------------------------
//--------------------------COMANDO continue e do...while--------------------

let alunos = [
    {id: 1, nome: "Bruna", media: 8},
    {id: 2, nome: "Laura", media: 7},
    {id: 3, nome: "José", media: 5},
    {id: 4, nome: "Guilherme", media: 4},
    {id: 5, nome: "Rafael", media: 10},
];

let contador = 0;

do {
    let aluno = alunos[contador];
    contador++;

    if( aluno.media < 6 ) {
        continue;
    }
    console.log("Id: " + aluno.id);
    console.log("Nome: " + aluno.nome);
    console.log("Média: " + aluno.media);
    console.log("\n");

} while( contador < alunos.length );