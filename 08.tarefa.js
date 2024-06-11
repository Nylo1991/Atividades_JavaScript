// Construir um algoritmo que leia dois números e efetue a adição.

const ler = require('readline-sync');

let num1= ler.questionFloat("Digite um numero: ");
let num2= ler.questionFloat("Digite outro numero: ");

soma = num1 + num2;

if (soma > 20) {  
    soma = soma + 8;
    console.log("o resultado foi: " + soma);
    
} else if (soma < 20){
   soma = soma - 5 ; 
    console.log("o resultado é: " + soma);
}

