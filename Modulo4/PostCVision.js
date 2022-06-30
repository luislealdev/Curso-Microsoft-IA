const axios = require('axios');

//Data 
//Aquí pondremos el enlace de la imagen que quieremos analizar.
var datos = {url: "https://elbocon.pe/resizer/U8vFHS7I86c26uCfvZphfq4kuJ4=/980x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/LJQ7ARVRXBA3BAGW6DQLMZIWFU.jpg"};

//Aquí ponemos el enlace del servicio
var direccion = "https://serviciovisionnorte.cognitiveservices.azure.com/vision/v3.0/analyze?visualFeatures=Categories,Description,Color&details=Celebrities&language=es";

//Petición POST
axios.post( direccion, datos, {
    headers:
     {'Ocp-Apim-Subscription-Key': '9f8839e9bd4e446c8d1bfad49bd6db72',
      'Content-Type': 'application/json'
        }

    }).then( respuesta => console.log(respuesta.data.categories[1].detail))
    .catch(error => {console.log(error)});