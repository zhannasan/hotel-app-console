function start(){
    var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log('1. Lister les clients\n99. Sortir');
rl.question('Choisir une action : ...', function(saisie){
    if(saisie==='1'){
    console.log(`Liste des clients :`);
    var clientModule = require('./service.js');
    var listeClients = clientModule.getClients();

}else if (saisie==='99') {
    console.log(`Aurevoir!`);
} else {
    console.log(`Veuiilez choisir`)
}
    rl.close();
})
    
}
exports.start = start;

