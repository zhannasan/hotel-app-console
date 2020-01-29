var request = require('request');
function getClients(callback,callbackErr){
    request('https://spring-mvc-hotel-app.herokuapp.com/client', {json : true}, 
        function(error, res,body){
            if(error){
                callbackErr(error);  
            }
            callback(body);;
        });
}
exports.getClients = getClients;

function addClient(nomClient,prenomClient,callback){
    request('https://spring-mvc-hotel-app.herokuapp.com/client', {
       // json : true,
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
          
            console.log(`statusCode: ${res.statusCode}`);
            console.log(body)
        });
}

exports.addClient = addClient;

function getClientByName(nom,callback, callbackErr){
    request('https://spring-mvc-hotel-app.herokuapp.com/client?nom='+nom, {json : true}, 
        function(error, res, body){
            if(error){
                callbackErr(error);  
            }
            
            callback(body);
        });
}
exports.getClientByName = getClientByName;

function getAvRoom(nom,callbackCh, callbackRes, callbackErr){
    request('https://spring-mvc-hotel-app.herokuapp.com/chambre', {json : true}, 
        function(error, res, body){
            if(error){
                callbackErr(error);  
            }
            
            callbackCh(bodyCh);
        });
    request('https://spring-mvc-hotel-app.herokuapp.com/reservation', {json : true}, 
        function(error, res, body){
            if(error){
                callbackErr(error);  
            }
            
            callbackRes(bodyRes);
        });
}
exports.getAvRoom = getAvRoom;