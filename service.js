var request = require('request');
var config = require('./config');

function getClients(callback,callbackErr){
    request(config.urlGetClients, {json : true}, 
        function(error, res,body){
            if(error){
                callbackErr(error);  
            }
            callback(body);;
        });
}
exports.getClients = getClients;

function addClient(nomClient,prenomClient,callback){
    request(config.urlGetClients, {
        method: 'POST',
        json: {
                nom: nomClient,
                prenoms: prenomClient
        }
    }, 
        function(err, res,body){
            if(err){
                console.log('Erreur',err);
               return
            }
        });
}

exports.addClient = addClient;

function getClientByName(nom,callback, callbackErr){
    console.log(config.urlGetClientByName+nom);
    request(config.urlGetClientByName+nom, {json : true}, 
        function(error, res, body){
            if(error){
                callbackErr(error);  
            }
            callback(body);
        });
}
exports.getClientByName = getClientByName;

function getRoom(callbackCh, callbackRes, callbackErr){
    request(config.urlGetRoom, {json : true}, 
        function(error, res, body){
            if(error){
                callbackErr(error);  
            }  
            callbackCh(bodyCh);
        });
    request(config.urlGetReservation, {json : true}, 
        function(error, res, body){
            if(error){
                callbackErr(error);  
            }
            
            callbackRes(bodyRes);
        });
}
exports.getRoom = getRoom;