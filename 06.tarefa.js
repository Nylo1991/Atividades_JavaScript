// O IMC

const ler = require('readline-sync');

let peso = ler.questionFloat("Digite o seu peso: ");
let altura = ler.questionFloat("Digite a sua altura: ");
let imc;

imc = peso / (altura * altura);
imc = imc.toFixed(2); // para arrendondar as casas decimais

if (imc < 18.5) {
    console.log("Você está abaixo do peso. Seu IMC é " + imc);

} else if (imc >= 18.5 && imc < 25) {
    console.log("Seu peso está normal. Seu IMC é " + imc);
    
} else if (imc >= 25 && imc < 30) {
    console.log("Amigo, você exagerou no torresmo. Está acima do peso, vamos cuidar. Seu IMC é " + imc);
    
} else {
    console.log("Pode se candidatar para o Fet-Family, pois você está obeso. Seu IMC é " + imc);
}


