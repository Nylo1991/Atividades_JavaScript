//A prefeitura de Nova Lima abriu uma linha de crédito para os funcionários estatutários. 

const ler = require('readline-sync');

let salarioBruto = ler.questionFloat("Digite o seu Salario Bruto: ");
let Parcelas = ler.questionFloat("Digite o valor da parcela: ");
let result;

result= salarioBruto * 0.25
if (Parcelas <= result) {
    console.log("Emprestimo aprovado.");
    
} else {
    console.log("Não aprovado");
    
}

