const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('de um valor de 1 à 7 ', (dia) => {
  let resposta = Number(dia);

  if (resposta == 1) {
    console.log('Domingo');
  } else if (resposta == 2) {
    console.log('Segunda-feira');
  } else if (resposta == 3) {
    console.log('Terça-feira');
  } else if (resposta == 4) {
    console.log('Quarta-feira');
  } else if (resposta == 5) {
    console.log('Quinta-feira');
  } else if (resposta == 6) {
    console.log('Sexta-feira');
  } else if (resposta == 7) {
    console.log('Sábado');
  } else {
    console.log('Valor inválido! Por favor, digite um número de 1 à 7.');
  }

  rl.close();
});
