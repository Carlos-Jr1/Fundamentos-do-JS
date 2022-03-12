const numeros = [43, 50, 65, 12]
// O método reduce() está trabalhando com dois parâmetros. O primeiro é a função callback obrigatória para retornar o cálculo e o segundo parâmetro é um número que representa o valor inicial - no caso, 0.
const soma = numeros.reduce((acum, atual) => atual + acum, 0)
//A função callback foi escrita diretamente dentro do reduce(), e esta função também está recebendo dois parâmetros, ambos obrigatórios: O valor acumulado e o valor atual
console.log(soma) //170