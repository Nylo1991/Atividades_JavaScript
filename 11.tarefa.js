//Escreva um algoritmo que leia um número e informe se ele é divisível por 10, por 5 ou por 2 ou se não é divisível

const ler = require('readline-sync');

let num = ler.questionFloat("Digite um numero: ");

if (num % 10 == 0) {
    num = num /10;
    console.log("O numero é divisivel por 10 !!!"  + num);
    
} else if (num % 5 == 0) {
    num = num /5;
    console.log("O numero é divisivel por 5 !!!"  + num);

} else if (num % 2 == 0) {
    num = num /2;
    console.log("O numero é divisivel por 2 !!!"  + num);

} else {
    console.log("Não é divisivel por 10, por 5 e por 2 !!!");
    }