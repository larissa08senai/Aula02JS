const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});    

rl.question('Qual é a temperatura atual? ', (temperatura) => {

     console.log(`A temperatura atual é: ${temperatura}°C`);

    let resposta = Number(temperatura);

    if (resposta <= 15) {
        console.log(`Esta frio!`);
    } else if (resposta >= 30) {
         console.log('Esta quente!');
    }else {
        console.log('Esta agradável!');
    }
 
  rl.close();
});