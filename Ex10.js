// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require('prompt-sync')()

let numero = Number(prompt("Digite um número inteiro:"));

switch (numero) {
  case numero:
    for (let i = 0; i < 10; i++) {
        console.log(numero
        );
      }
      break;

  default:
    console.log("Você não digitou um número válido, tente outra vez!");
}
