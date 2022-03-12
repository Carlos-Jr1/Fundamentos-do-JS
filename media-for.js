// Para este desafio temos que calcular a média entre as seguintes notas, lembrando que são notas de alunos da nossa escola usando o for.

const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0 

for (let i = 0 ; i < notas.length; i++){
    somaDasNotas  += notas[i];
}

let media = somaDasNotas/notas.length

console.log(media)