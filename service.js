var request = require('request');
function getClients(callback){
    request('https://spring-mvc-hotel-app.herokuapp.com/client/', {json : true}, 
        function(err, res,body){
            if(err){
                console.log('Erreur',err);
                callback(error);  
            }
            callback(body);;
        });
}
exports.getClients = getClients;

function addClient(callback){
    request.post('https://spring-mvc-hotel-app.herokuapp.com/client/', {
        json : true},
          //  nom: 'nomClient',
           // prenoms: 'prenomClient'}, 
        function(err, res,body){
            if(err){
                console.log('Erreur',err);
               return
            }
          
            console.log(`statusCode: ${res.statusCode}`);
            console.log(body)
        });
}
//exports.addClients = addClients;

function getClientByName(callback){
    request('https://spring-mvc-hotel-app.herokuapp.com/client?nom=Pierre', {json : true}, 
        function(err, res,body){
            if(err){
                console.log('Erreur',err);
                callback(error);  
            }
            callback(body);
        });
}
exports.getClientByName = getClientByName;