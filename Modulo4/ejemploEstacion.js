/*Crear un programa que utilizando los servicios cognitivos de Microsofrt Azure
logrando analizar fotos en distintos horarios y nos 
diga en que momento del día hay menor número de gente*/

const axios = require('axios');

var enlaces = [];

enlaces[0] = 'https://imagenes.milenio.com/10zznD-XQNjlZA_HzoB8aXyRRgs=/936x566/https://www.milenio.com/uploads/media/2021/03/26/metro-cdmx-cerrara-estaciones-linea.jpeg';
enlaces[1] = 'https://centrourbano.com/revista/wp-content/uploads/Metro_Medidas-anti-covid-735x400.jpg';
enlaces[2] = 'https://i.pinimg.com/originals/c4/88/23/c48823ec2c8f5594f72f8b2b157029fc.jpg';
enlaces[3] = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Insurgentes_Sur_metro_station.jpg/1200px-Insurgentes_Sur_metro_station.jpg';
enlaces[4] = 'https://fastly.4sqi.net/img/general/600x600/15982566_DFtpG9ChwzeLhPEbrW8tVUIwxJLmt7UEi3bITdTqMSA.jpg';
enlaces[5] = 'https://i.pinimg.com/originals/0e/af/31/0eaf316649985512be0f28089098726b.jpg';

var direccion = "https://serviciovisionnorte.cognitiveservices.azure.com/vision/v3.0/analyze?visualFeatures=Categories,Description&details=Landmarks&language=es";

function peticion(cont, callback){
    var respuestaInfo;
    var datos = {url: enlaces[cont]}

axios.post(direccion, datos, {
    headers:{ 'Ocp-Apim-Subscription-Key': '9f8839e9bd4e446c8d1bfad49bd6db72',
    'Content-Type': 'application/json'}
}).then( respuesta => {
    respuestaInfo=respuesta.data.description.tags;
    //console.log(respuestaInfo);
    callback(respuestaInfo, cont+1)
})
  .catch(error => {console.log(error);
})
}

function imprimeDatos(datosRespuesta, numFoto){
    var j = 0;
    do{
        if( datosRespuesta[j] == 'gente'){
            console.log('Hay personas en la estación' + 'en la foto:' + numFoto);
            break;
        }
        else if( datosRespuesta[j] !== 'gente' && ( j == datosRespuesta.length)){
            console.log('No hay personas en la estación' + 'en la foto:' + numFoto);
            break;
        }
        j++;
    }while( j < datosRespuesta.length)
    console.log( datosRespuesta );
    //if(datosRespuesta[])
}

for(var i = 0; i < 6; i++){
    peticion(i, imprimeDatos );
}
