var request = require('request-promise-native');
var config = require('./config');

const getClients= ()=>{
    return request(config.urlGetClients, {json : true});
}


const addClient = (nomClient,prenomClient)=>{
    const options = { method: 'POST',
                json: {
                        nom: nomClient,
                        prenoms: prenomClient
                }};
    return request(config.urlGetClients,options);
}

const getClientByName = (nom) => {
    return request(`${config.urlGetClients}?nom=${nom}`, {json : true});
}


const getRoom = (dateDebut, dateFin)=>{
    return request(`${config.urlGetRoom}?dateDebut=${dateDebut}?dateFin=${dateFin}`, {json : true});
}
module.exports={getClients, addClient, getClientByName, getRoom}