const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Menu:');
console.log('1 - Pizza');
console.log('2 - Hambúrguer');
console.log('3 - Salada');

rl.question('Digite um número: ', (num01) => {
    let numero = Number(num01);

    switch (numero) {
        case 1:
            console.log('Você escolheu Pizza');
            break;
        case 2:
            console.log('Você escolheu Hambúrguer');
            break;
        case 3:
            console.log('Você escolheu Salada');
            break;
        default:
            console.log('Valor inválido. Por favor, digite um número de 1 a 3.');
    }
    rl.close();
});