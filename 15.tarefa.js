//empresa dá um prêmio aos funcionários que cumprem ou ultrapassam determinado valor de vendas de produtos

const ler = require('readline-sync');

let meta = 3.000;
let num = ler.questionFloat("Digite o valor de sua venda: ");

if (num >= meta) {
    console.log(" Você Ganhou! Parabens meu chapa!!! ");
    
} else {
    console.log("Você não ganhou! Não atingiu a meta ");
}