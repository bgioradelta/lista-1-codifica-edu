// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const prompt = require('prompt-sync')()

let macas = parseInt(prompt("Quantas maçãs deseja comprar?"));

if (macas < 12) {
  console.log(`O preço total da tua compra foi de R$ ${(macas * 0.30).toFixed(2)}`);
} else if (macas >= 12) {
  console.log(`Você recebeu um desconto, o preço total será de R$ ${(macas * 0.25).toFixed(2)}`);
} else {
  console.log("Você não digitou um valor de maçãs para comprar válido!");
}
