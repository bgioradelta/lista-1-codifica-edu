// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

let n1 = 0, n2 = 1;

console.log("Sequência de Fibonacci (primeiros 10 números):");
console.log(n1); // Imprime o primeiro número (0)
console.log(n2); // Imprime o segundo número (1)

for (let i = 3; i <= 10; i++) {
  let proximo = n1 + n2;
  console.log(proximo); // Imprime o próximo número da sequência
  n1 = n2; // Atualiza n1
  n2 = proximo; // Atualiza n2
}
