const nomes = ["Ana", "Marcos", "Maria", "Mauro"]

const notas = [7,4.5,8,7.5]
//booleano tru ou false 
// se o anulo for verdadeira sera incluido na lista que estamos montando (reporvados)
//associamos o nomes.filter pq era oq queriamos que retornasse para gente
const reprovados = nomes.filter((aluno,indice) => notas[indice] <5)
console.log(`reprovados : ${reprovados}`)
