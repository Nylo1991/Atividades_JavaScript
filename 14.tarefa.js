//leia uma letra e mostre se ela é vogal ou consoante

const ler = require('readline-sync');

let letra = ler.question("Digite uma letra: ").toLowerCase();

if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    console.log("Essa letra é uma vogal: " + letra);

} else {
    console.log("Essa letra é uma consoante" + letra);
}
