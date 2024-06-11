// Faça um algoritmo que leia dois valores inteiros A e B se os valores forem iguais deverá se somar os dois, caso contrário multiplique A

const ler = require('readline-sync');

let valorA = ler.questionFloat("Digite o valor de A: ");
let valorB = ler.questionFloat("Digite o valor de B: "); 
let valorC;

if (valorA == valorB) {
    valorC = valorA + valorB;
    console.log("A soma de A + B é: " + valorC);
    
} else {
    valorC = valorA * valorB;
    console.log("A Multiplicação de A * B é: " + valorC);
}
