// Faça um algoritmo que leia o nome, o sexo e o estado civil de uma pessoa. 
//Caso sexo seja “F” e estado civil seja “CASADA”, solicitar o tempo de casada (anos). 

const ler = require('readline-sync');

let nome = ler.question("Digite seu nome: ").toLowerCase();
let sexo = ler.question("Digite seu sexo: ").toLowerCase();
let estado = ler.question("Digite seu estado civil: ").toLowerCase();

let result;

console.log(nome);
console.log(sexo);
console.log(estado);

if (estado === 'casada' && sexo === 'feminino') {
    result = ler.questionFloat("Digite o tempo de casada: ");
}

console.log(result);