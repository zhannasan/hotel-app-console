var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Vous allez bien? : ', function(saisie){
    console.log(`Vous avez saisi : ${saisie}`);
    rl.close();
})