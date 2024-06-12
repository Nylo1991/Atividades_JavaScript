// nome de 2 times e o número de gols marcados na partida.
const ler = require('readline-sync');

let time1 = ler.question("Digite o nome do primeiro time: ");
let golsTime1 = ler.questionFloat(`Quantos gols o ${time1} marcou? `);

let time2 = ler.question("Digite o nome do segundo time: ");
let golsTime2 = ler.questionFloat(`Quantos gols o ${time2} marcou? `);

if (golsTime1 > golsTime2) {
    console.log(`O vencedor é ${time1}`);

} else if (golsTime2 > golsTime1) {
    console.log(`O vencedor é ${time2}`);

} else {
    console.log("EMPATE");
}
