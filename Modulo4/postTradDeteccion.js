const axios = require ('axios');

var datos = [{"Text" : "雲を突き抜け"}]

var direccion = 'https://api.cognitive.microsofttranslator.com/detect?api-version=3.0&to=es';

axios.post( direccion, datos,{
    headers: {
        'Ocp-Apim-Subscription-Key':'58f9f4075c9c46bca61a78cfc71a45b6',
        'Ocp-Apim-Subscription-Region':'southcentralus',
        'Content-Type':'application/json'
    }
})
.then( respuesta => console.log("El lenguaje es: "+respuesta.data[0].language ))
.catch( error => console.log(error.data));