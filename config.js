var URL_BASE = 'https://spring-mvc-hotel-app.herokuapp.com/'

module.exports={
    urlGetClients: URL_BASE+'/client',
    urlGetClientByName: URL_BASE+'/client?nom=',
    urlGetRoom: URL_BASE +'/chambre',
    urlGetReservation: URL_BASE +'/reservation'
}