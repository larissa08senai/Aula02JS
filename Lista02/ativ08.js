const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um número: ', (num01) => {
    rl.question('Digite outro numero: ', (num02) => {
        rl.question('Qual operação deseja realizar? (1 - Soma, 2 - Subtração, 3 - Multiplicação, 4 - Divisão) ', (operacao) => {
            let n01 = Number(num01);
            let n02 = Number(num02);
            let op = Number(operacao);
            let resultado;

            if (op === 1) {
                resultado = n01 + n02;
                console.log(`O resultado da soma é: ${resultado}`);
            } else if (op === 2) {
                resultado = n01 - n02;
                console.log(`O resultado da subtração é: ${resultado}`);
            } else if (op === 3) {
                resultado = n01 * n02;
                console.log(`O resultado da multiplicação é: ${resultado}`);
            } else if (op === 4) {
                resultado = n01 / n02;
                
                console.log(`O resultado da divisão é: ${resultado}`);
                
            } else {
                console.log('Operação inválida.');
            }
            rl.close();
        });
    });
});
