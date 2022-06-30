//console.log(Math.round(Math.random()*10));

/*exports.numAleatorio = () => {
    return resultado = Math.round(Math.random()*10);
}
*/

//Métodos de cadena de texto
var cadenaTexto = "Hola Lucia, buenas tardes";

//Cuenta las letras, espacios y caracteres
console.log(cadenaTexto.length);

//Ubica el lugar donde inicia el texto escrito entre parentesis
console.log(cadenaTexto.indexOf("buenas"));

//Reemplazar un valor por otro en una cadena
console.log(cadenaTexto.replace("Lucia", "Luis"));

//Extrae una parte de la cadena y guardala en una variable.
var nombre = cadenaTexto.slice(5,10);
console.log(nombre);

//---------------------------------------------------

var miNombre = "Luis Rubén Rusiles Leal";

//Convertir todas las letras a mayúsculas
console.log("Mi nombre en mayúsculas es :" + miNombre.toUpperCase());

//Convertir todas las letras a minúsculas
console.log("Mi nombre en minúsculas es :" + miNombre.toLowerCase());

//Concatenar dos cadenas de texto 
var miNombreP1 = "Luis Rubén";
var miNombreP2 = " Rusiles Leal";
//Esto es la concatenación
console.log("Mi nombre concatenado : " + miNombreP1.concat(miNombreP2));
//Aquí está concatenado y pasado a mayúsculas
console.log("Mi nombre concatenado pasado a mayúsulas es: " + miNombreP1.concat(miNombreP2).toUpperCase())

