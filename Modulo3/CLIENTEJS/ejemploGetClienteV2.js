const axios = require('axios');
var informacion;

axios.get('http://localhost:8080')
.then(respuesta => {
    informacion = respuesta.data;
    console.log(informacion);
})
.catch( error => {
    console.log(error);
});

var informacion= {
    num1: 5, 
    num2:10
};
axios.post('https://localhost:8080', informacion)
.then( respuesta=> console.log(respuesta.data));