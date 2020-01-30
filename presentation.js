var config = require('./config');
var readline = require('readline');
var service = require('./service.js');

var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
        });

var options = {
    '1': {option: 'Lister les clients.', execFn: listerClients},
    '2': {option: 'Ajouter un client.', execFn: ajouterClient},
    '3': {option: 'Rechercher un client par nom.', execFn: rechercherParNom},
 
    '4': {option: `Vérifier la disponibilité d'une chambre.`, execFn: listerClients},
    '99': {option: 'Sortir.', execFn: sortir}
}
function listerClients(){
    console.log(`Liste des clients :`);
   
    service.getClients(function(body){
        body.forEach(function(client) {
            console.log(client.nom+" "+client.prenoms);
        }, function(error){
            console.log(error);
        });
        showMenu();
    });
}
function ajouterClient(){
    rl.question(`Veuillez saisir le nom du client à ajouter ... `, function(saisieNom){
        var nomClient = saisieNom.trim();
            rl.question(`Veuillez saisir le prenom du client ... `,function(saisiePrenom){
            var prenomClient = saisiePrenom.trim();
            console.log(`Le client `+saisieNom+" "+saisiePrenom+` a bien été enregistré.`);
            service.addClient(nomClient,prenomClient, function(body){
                body.forEach(function(client) {
                    console.log(client.nom+" "+client.prenoms);
                 })
            }, function(error){
                    console.log(error);
                    break;
                });
                showMenu();
            });
        });
}
function rechercherParNom(){
    rl.question(`Veuillez saisir le nom du client ...`,function(saisieNom){
        var nom = saisieNom.trim();
        console.log(`Liste des clients avec le nom `+saisieNom);
        service.getClientByName(nom, function(body){
            body.forEach(function(client) {
                console.log(client.nom+" "+client.prenoms);
            }, function(error){
                console.log(error);
                break;
            });
            showMenu();
        })
    });
}

function sortir(){
    console.log(`Aurevoir!`);
    rl.close();
}

function showMenu(){

    var menu =`Choisir une action : ... \n`;
    
    for(var key in options){
        menu+=key+'. '+options[key].option+'\n';
    }
    rl.question(menu, function (choix) {
        options[choix].execFn();
    });
   
}

exports.showMenu = showMenu;