// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer 
// a média aritmética desses números.

const prompt = require('prompt-sync')()

let soma = 0
let count = 0
let numero

do {
  numero = Number(prompt("Digite um número decimal para a média ou '0' para encerrar:"))
  
  if (isNaN(numero)) {
    console.log("Entrada inválida. Por favor, digite um número.")
    continue // volta pro começo do loop
  }

  if (numero !== 0) {
    soma += numero
    count++
  }
} while (numero !== 0)

if (count > 0) {
  let media = soma / count;
  console.log(`A média dos números digitados é: ${media}`)
} else {
  console.log("Algum número inserido não é válido para essa média!")
}
