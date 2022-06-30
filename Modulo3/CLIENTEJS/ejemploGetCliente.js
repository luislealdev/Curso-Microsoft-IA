const https = require('https');

https.get('https://api.openweathermap.org/data/2.5/weather?q=México&appid=e9353cd74437d40e7c736295fd978d67&units=metric', (respuesta) => {
    let informacion = '';
    
    respuesta.on('data', (chunk) => {
        informacion += chunk;
    });

    respuesta.on('end', () => {
        var datosJSON = JSON.parse(informacion)['weather'];
        console.log( datosJSON[0]['main']);
    });
}).on('error', (error) => {
    console.log("Error: " + error);
    });