// Soma A + B + C 

const ler = require('readline-sync');

let notaA = ler.questionFloat("Informe a nota A: ");
let notaB = ler.questionFloat("Informe a nota B: ");
let notaC = ler.questionFloat("Informe a nota C: ");

let soma = notaA + notaB;
 
 if (soma <= notaC) {
    console.log(" A + B é menor que C ");

} else {
    console.log(" A + B é maior que C ");
 }
