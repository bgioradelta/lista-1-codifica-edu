// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require('prompt-sync')()

let direcao = prompt("Escolha uma direção para seguir, digite: DIR (direita), ESQ (esquerda) ou FRE (ir em frente):")
direcao = direcao.toUpperCase()

switch (direcao) {
  case "DIR":
    console.log("Você escolheu virar À DIREITA!");
    break;
  case "ESQ":
    console.log("Você escolheu virar À ESQUERDA!");
    break;
  case "FRE":
    console.log("Você escolheu seguir EM FRENTE!");
    break;
  default:
    console.log("Direção inexistente! Digite 'DIR', 'ESQ' ou 'FRE'");
    break;
}
