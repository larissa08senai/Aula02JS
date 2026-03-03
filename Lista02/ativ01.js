const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});    

rl.question('Qual é o sua saldo? ', (saldo) => {
    let resposta = Number(saldo);

    if (resposta >= 0 ) {
        console.log(`Seu saldo é positivo!`);
    } else {
        console.log('Saldo negativo!');
    }
  rl.close();
});