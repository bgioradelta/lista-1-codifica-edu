// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

const prompt = require('prompt-sync')()

let peso = parseFloat(prompt("Digite o peso (em kg):"))
let altura = parseFloat(prompt("Digite a altura (em metros):"))

let imc = peso / (altura * altura)

console.log("Teu IMC é: " + imc.toFixed(2));

if (imc < 18.5) {
  console.log("Tu tens: 'Baixo peso'");
} else if (imc >= 18.5 && imc < 25) {
  console.log("Tu tens: 'Peso normal'");
} else if (imc >= 25 && imc < 30) {
  console.log("Tu tens: 'Sobrepeso'");
} else {
  console.log("Tu tens: 'Obesidade'");
}
