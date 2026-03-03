const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o dia da semana (1-7): ', (dia) => {
    let resposta = Number(dia);

    if (resposta == 1 || resposta == 7) {
        console.log('É Fim de semana');
    } else{
        console.log('Não é Fim de semana');
    }
    rl.close();
});

