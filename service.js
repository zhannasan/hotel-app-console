function getClients(){
    var request = require('request');
    request('https://spring-mvc-hotel-app.herokuapp.com/client/', {json : true}, 
        function(err, res,body){
            if(err){
                return console.log('Erreur',err);
            }
            console.log('Ok', body);
        });
}
exports.getClients = getClients;
