/*
LA DESCOMPOSICIÓN:
Sirve para que cuando tengamos varios datos de un objeto, podamos 
agarrar solo uno, el que queramos.

La estructura es:

var/let/const { aquí lo que queremos sacar, otra cosa que queramos sacar si queremos} = nombre del objeto
*/
/*
//Con descomposición
let persona = { 
    nombre: "Omar", 
    apellido: "Guerrero",
    edad: 20
}
let { nombre, apellido } = persona; 
console.log( "El nombre del participante es: " + nombre + " " + apellido );

//Sin descomposición ( no imprimo el resultado)
var nombreN2 = persona.nombre;
var apellidoN2 = persona.apellido;

//Ejemplo #2
let celular = { 
    color: "Rojo",
    numCamaras: 4
}
let {numCamaras} = celular;
console.log( "El número de cámaras es: " + numCamaras );

let {color} = celular;
console.log("El color del celular es: " + color);

//DESCOMPOSICIÓN FORMA 2

//Ejemplo #3
var paquete = {
    numeroEnvio: 639475,
    direccion: "Calle Rio de Plata",
    peso: "3kg"
}

var numeroEnvio, peso;
({ numeroEnvio, peso} = paquete);
console.log("El número de envío es: " + numeroEnvio);
console.log("El peso del paquet es: " + peso);

//Ejemplo de valor por defecto
var {nombre, apellido: N3 = "López"} = persona;
console.log("El nombre es: " + nombre + " " + apellidoN3);
*/

//Descomposición de objetos
//Valores por defecto
let persona2 = {nombreN2: "Omar", edad:20}
var { nombreN2, apellido: apellidoN3 = "López"} = persona2;
console.log("El nombre es: " + nombreN2 + " " + apellidoN3);

//Descomposición de funciones
let envio = {
    numEnvio: "337",
    producto: "Videojuego"
}

function datosEnvio( {numEnvio, producto}){
console.log("Numero de envio: " + numEnvio);
console.log("Producto: " + producto);
}

datosEnvio( envio );

var saludo = "Hola, buenas tardes";