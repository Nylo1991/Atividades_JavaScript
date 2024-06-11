// Faça um algoritmo seja par ou impar

const ler = require('readline-sync');

let num = ler.questionFloat("Digite um numero: ");
let impar;
let par;

if (num % 2 == 0) { //verificar se é par 
    par = num + 8;
    console.log("A soma dos numeros para Par foi: " + par);
    
} else {
   impar = num + 10; // o resto será impar
    console.log("A soma dos numeros impares foi: " + impar);
}