const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('digite um valor de 1 à 7: ', (num) => {
    let numero = Number(num);

    switch (numero) {
        case 1:
            console.log('Domingo');
            break;
        case 2:
            console.log('Segunda-feira');
            break;
        case 3:
            console.log('Terça-feira');
            break;
        case 4:
            console.log('Quarta-feira');
            break;
        case 5:
            console.log('Quinta-feira');
            break;
        case 6:
            console.log('Sexta-feira');
            break;
        case 7:
            console.log('Sábado');
            break;
        default:
            console.log('Valor inválido. Por favor, digite um número de 1 a 7.');
    }
    rl.close();
});