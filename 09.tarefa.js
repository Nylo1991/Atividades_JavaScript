//é múltiplo de 3” ou “não é múltiplo de 3”.

const ler = require('readline-sync');

let num= ler.questionFloat("Digite um numero: ");

if (num % 3 == 0) {  
    console.log("o resultado é multiplo de 3: " + num);
    
} else {
    console.log("o resultado não é multiplo de 3!!! ");
}
