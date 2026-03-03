const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('digite um valor de 1 à 12: ', (num) => {
    let numero = Number(num);

    switch (numero) {
        case 1:
            console.log('Estação: Verão');
            break;
        case 2:
            console.log('Estação: Verão');
            break;
        case 3:
            console.log('Estação: Outono');
            break;
        case 4:
            console.log('Estação: Outono');
            break;
        case 5:
            console.log('Estação: Outono');
            break;
        case 6:
            console.log('Estação: Inverno');
            break;
        case 7:
            console.log('Estação: Inverno');
            break;
        case 8:
            console.log('Estação: Inverno');
            break;
        case 9:
            console.log('Estação: Primavera');
            break;
        case 10:
            console.log('Estação: Primavera');
            break;
        case 11:
            console.log('Estação: Primavera');
            break;
        case 12:
            console.log('Estação: Verão');
            break;
        default:
            console.log('valor não corresponde ao calendário Gregoriano. Por favor, digite um número de 1 a 12.');
    }
    rl.close();
});