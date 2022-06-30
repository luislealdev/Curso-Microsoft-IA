const axios = require('axios');
var informacion;

axios.get('https://api.openweathermap.org/data/2.5/weather?q=New+York&appid=e9353cd74437d40e7c736295fd978d67&units=metric')
.then( respuesta => {
    informacion=respuesta;
    console.log(informacion.data);
}).catch( error => {
    console.log( error )
    });
