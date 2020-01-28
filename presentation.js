function start(){
    var readline = require('readline');
    var service = require('./service.js');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showMenu(){
    console.log(`
    1. Lister les clients.
    2. Ajouter un client.
    3. Rechercher un client par nom.
    99. Sortir
    `);
}
showMenu(); 
rl.question('Choisir une action : ... ', function(saisie){
    switch(saisie){
    case '1':
        console.log(`Liste des clients :`);
   
        service.getClients(function(body){
            body.forEach(function(client) {
                console.log(client.nom+" "+client.prenoms);
            });
            showMenu();
        })
        break;
    case '2':
       rl.question(`Veuillez saisir le nom du client à ajouter :`, function(){

        });
        break;
    case '3':  
        /*rl.question(`Veuillez saisir le nom du client...`,function(choix3){

        });*/
        service.getClients(function(body){
            body.forEach(function(client) {
                console.log(client.nom+" "+client.prenoms);
            });
            showMenu();
        })
        break;
    case '4':  
    break;
    case '99':
        console.log(`Aurevoir!`);
        rl.close();
        break;
    default:
        break;
    }
})
}
exports.start = start;