// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

const prompt = require('prompt-sync')();

let num = Number(prompt("Digite um número:"));

if (num % 2 === 0) {
    console.log("Número PAR!");
} else {
    console.log("Número ÍMPAR!");
}
