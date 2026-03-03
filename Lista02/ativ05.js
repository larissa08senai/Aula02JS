const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Qual é sua idade? ', (idade) => {
    let resposta = Number(idade);

    if (resposta >= 18) {
        console.log('Você é maior de idade');
    } else{
        console.log('Você é menor de idade');
    }
    rl.close();
});