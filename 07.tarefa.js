// valor do produto a ser pago 

const ler = require('readline-sync');

let pag = ler.question("Digite a forma de pagamento: ").toLowerCase();
let prod = 100.00;

if (pag === "dinheiro" || pag === "cheque") {
    prod -= prod * 0.10; // desconto para dinheiro ou cheque
    console.log("Seu desconto pagando em dinheiro ou em cheque é: " +prod);

} else if(pag === "credito") {
    prod -= prod * 0.15; // desconto para crédito
    console.log("Seu desconto pagando no Crédito é: " +prod);
    
} else if (pag === "em duas vezes") {
    prod += prod * 0.10; // juros para duas vezes
    console.log("você terá um juros pagando de duas vezes é: " +prod);

} else {
    console.log(" informação inválida!!! ");
}
