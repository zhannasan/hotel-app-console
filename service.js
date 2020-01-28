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
    request.post('https://spring-mvc-hotel-app.herokuapp.com/client', {
        json : true,
        body: JSON.stringify({
            client: {
                nom: nomClient,
                prenom: prenomClient
            }
        })
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