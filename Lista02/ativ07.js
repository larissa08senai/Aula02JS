const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um número: ', (num01) => {
    rl.question('Digite outro numero: ', (num02) => {
        let n01 = Number(num01);
        let n02 = Number(num02);
        if (n01 > n02) {
            console.log(`O número ${n01} é maior que o número ${n02}`);
        } else if (n02 > n01) {
            console.log(`O número ${n02} é maior que o número ${n01}`);
        } else {
            console.log(`Os números são iguais`);
        }
        rl.close();
    });
});

    