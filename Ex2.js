// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
// controle if-else.

const prompt = require('prompt-sync')()

let idade = parseInt(prompt("Digita tua idade:"));

if (idade >= 0 && idade <= 12) {
  console.log("Tu és uma Criança!");
} else if (idade >= 13 && idade <= 19) {
  console.log("Tu és um Adolescente!");
} else if (idade >= 20 && idade <= 64) {
  console.log("Tu és um Adulto!");
} else if (idade >= 65) {
  console.log("Tu és um Idoso!");
} else {
  console.log("Idade inválida");
}