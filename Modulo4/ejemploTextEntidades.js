const axios = require('axios');

var body = {
    "documents" : [
        {
            "id" : "1",
            "text" : 'Ya me tiene hasta la chingada'
        },
        {
            "id" : "2",
            "text" : 'That'
        },
        {
            "id" : "3",
            "text" : 'bonjour madame comment allez vous'
        }
    ]
}

var direccion = 'https://servicioanalisistexto.cognitiveservices.azure.com/text/analytics/v3.0/sentiment';

axios.post( direccion, body, {
    headers : {
        "Content-Type" : "application/json",
        "Ocp-Apim-Subscription-Key" : "8b4c7829af844bc699425c01e131246a"
    } 
})
.then(resultado => {
   console.log(resultado.data)
})
.catch(error => {
    console.log(error)});