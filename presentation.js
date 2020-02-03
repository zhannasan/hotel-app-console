const config = require('./config');
const readline = require('readline');
const service = require('./service.js');

const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
        });



const listerClients = () =>{
    console.log(`Liste des clients :`);
   
    service.getClients()
    .then(clients=> {clients.forEach(client=> {
            console.log(`${client.nom} ${client.prenoms}`);
        });
        showMenu();
    })
    .catch(error=>console.log(error));
}
const ajouterClient = () =>{
    rl.question(`Veuillez saisir le nom du client à ajouter ... `,saisieNom=>{
            rl.question(`Veuillez saisir le prenom du client ... `,saisiePrenom=>{
                service.addClient(saisieNom.trim(),saisiePrenom.trim());
                showMenu();
            });
        });
}
const rechercherParNom = ()=>{
    rl.question(`Veuillez saisir le nom du client ...`,saisieNom=>{
        console.log(`Liste des clients avec le nom ${saisieNom}`);
        service.getClientByName(saisieNom.trim())
            .then(clients=>{
                clients.forEach(client=> {
                    console.log(`${client.nom} ${client.prenoms}`);
                })
                showMenu();   
            }).catch(error=>console.log(error));
           
    });
}

const trouverChambre = ()=>{
    rl.question(`Veuillez saisir date debut de la reservation (yyyyMMdd) ...`,saisieDateDebut=>{
        rl.question(`Veuillez saisir date fin de la reservation (yyyyMMdd) ...`,saisieDateFin=>{
            console.log(`Les chambres disponibles pour la periode choisie :`);
            service.getRoom(saisieDateDebut,saisieDateFin)
            .then(chambres=>{
                chambres.forEach(chambre=>{
                    console.log(`${chambre.numero} - ${chambre.surfaceEnM2}`);
                })
                showMenu();
        }).catch(error=>console.log(error));
            });
        });  
}

const sortir = ()=>{
    console.log(`Aurevoir!`);
    rl.close();
}
const options = {
    '1': {option: 'Lister les clients.', execFn: listerClients},
    '2': {option: 'Ajouter un client.', execFn: ajouterClient},
    '3': {option: 'Rechercher un client par nom.', execFn: rechercherParNom},
    '4': {option: `Vérifier la disponibilité d'une chambre.`, execFn: trouverChambre},
    '99': {option: 'Sortir.', execFn: sortir}
}
const showMenu=()=>{
    let menu =`\nChoisir une action : ... \n`;
    
    for(const key in options){
        menu+=key+'. '+options[key].option+'\n';
    }
    rl.question(menu, choix=> {
        options[choix].execFn();
    });
   
}

exports.showMenu = showMenu;