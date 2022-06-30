const http = require('http');
const direccion = 'localhost';
const puerto = 8080;

//Servicio web
const servicioMensaje = function(peticion, respuesta){
    respuesta.setHeader("Content-Type", "aplication/json");

    switch( peticion.url ){
        case "/mensajeNavidad":
            respuesta.writeHead(200);
            respuesta.end(JSON.stringify({mensaje: "Feliz Navidad"}));
            break;
        case "/saludo":
            respuesta.writeHead(200);
            respuesta.end(JSON.stringify({mensaje: "¡Hola! ¿Cómo estás?"}));
            break;
        default:
            respuesta.writeHead(400);
            respuesta.end(JSON.stringify({mensaje : "Te equivocaste"}));
            break;
    }
    
}

//Creación de servidor web
const servidor = http.createServer( servicioMensaje );

servidor.listen( puerto, direccion, () => {
    console.log("El servidor está prendido y a la escucha");
    console. log("en: http://" + direccion +":" + puerto);
});