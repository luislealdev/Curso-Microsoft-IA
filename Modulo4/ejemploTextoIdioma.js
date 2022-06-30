const axios = require ('axios');

var body = {
    "documents" : [
        {
            "id" : "1",
            "text" : 'El día empieza con un vaso de jugo'
        },
        {
            "id" : "2",
            "text" : 'This document is in Englsih.'
        },
        {
            "id" : "3",
            "text" : 'bonjour madame comment allez vous'
        }
    ]
}

var direccion = 'https://servicioanalisistexto.cognitiveservices.azure.com/text/analytics/v3.0/languages';

axios.post( direccion, body, {
    headers : {
        "Content-Type" : "application/json",
        "Ocp-Apim-Subscription-Key" : "8b4c7829af844bc699425c01e131246a"
    } 
})
.then(resultado => {
    console.log("El idioma detectado número uno es: " + resultado.data.documents[0].detectedLanguage.name);
    console.log("El idioma detectado número dos es: " + resultado.data.documents[1].detectedLanguage.name);
    console.log("El idioma detectado número tres es: " + resultado.data.documents[2].detectedLanguage.name);
})
.catch(error => {
    console.log(error)});