//Declaración de una función

function multiplicar(primerOperando){
    var resultado = primerOperando*2;
    console.log("El resultado es: " + resultado);
}
multiplicar( 12 );

function multiplicarN3(){
    var resultado= 2*2;
    console.log("El resultado es: " + parseInt(resultado));
}
multiplicarN3();


//Función como expresión

var resultado = function multiplicarN2( primerOperando ){
    return 2 * primerOperando;   
}
console.log(resultado( 25 ));

//Funciones Flecha

//Función que saluda a una persona
const saludaPersona = ( nombre ) => console.log( "Hola " + nombre);
saludaPersona("Luis");

const suma = (numero) => console.log(numero + 12);
suma(12);

//EJERCICIO 1
/* Escribir un programa que tenga una función a la que
se le pasa como parámetro un número y devuelve como 
resultado un texto que indica si el numero es par o impar */

const prompt = require('prompt-sync')();
numero= prompt("Ingresa un número: ")
function determinaNumero( numero ){
    if(numero % 2 == 1){
        console.log("El número es impar");
    }
    else if(numero % 2 ==0){
        console.log("El número es par");
    }
} 
determinaNumero(numero);

//EJERCICIO 2
/* Definir una función que muestre la información de un texto que 
se introduce como argumwnto y determinar si el texto contiene 
mayúsculas, minúsculas o ambas.
*/
texto= prompt("Ingresa un texto: ")
function determinaTexto(texto){
    if(texto == texto.toUpperCase()){
        console.log("El texto está en mayúsculas");
    }
   else if(texto == texto.toLowerCase()){
       console.log("El texto está en minúsculas");
   }
   else{
       console.log("El texto tiene mayúsculas y minúsculas");
   }
}
determinaTexto(texto);