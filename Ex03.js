// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como 
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require('prompt-sync')()

let nota = parseFloat(prompt("Digita a nota obtida (de 0 a 10):"))

if (nota >= 9 && nota <=10) {
    console.log("Aprovado com louvor. Parabéns!")
  } else if (nota >= 7 && nota < 9) {
    console.log("Aprovado!")
  } else if (nota >= 5 && nota < 7) {
    console.log("Atenção você está de recuperação!")
  } else if (nota < 5) {
    console.log("Reprovado!")
  } else {
    console.log("Oops, nota inválida!")
  }
