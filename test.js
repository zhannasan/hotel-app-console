var http = require('http');
    var options = {
    hostname: 'localhost',
    port: '8080',
    path: '../hotel'
    };
      function getResponse(response){
    var serverData='';

      response.on('data', function(chunk){
         serverData += chunk;
      });

       response.on('end', function(){
    console.log(serverData);
       });
     };

      http.request(options, function(error , response){
    if(error){
    console.log(error);//handle error here.
    }else{
      getResponse(response);
    }}).end();