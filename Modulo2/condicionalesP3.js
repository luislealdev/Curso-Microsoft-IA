/*EJERCICIO LEER DATO
//var nombre = prompt("Ingresa tu nombre:");
//console.log("¡Hola " + nombre + "!");

//-----------------------------------------------
*/

//Ejercicio 1
//Cada vez que una persona ingrese una hora del día
//se mostrará un mensaje que diga el deporte que se 
//está realizando en la cancha


const prompt = require( 'prompt-sync' )();
/*
var horaDia = prompt ("Dame la hora: ");
console.log("La hora ingresada es: " + horaDia);

if( horaDia <= 3){
    console.log("Está el equipo de Fútbol entrenando.");
}
else if( ( horaDia >3 ) && (horaDia <= 6 ) ) {
    console.log("Está el equipo de Fútbol Americano entrenando");
}
else if(( horaDia > 6) && (horaDia <= 9)){
    console.log("Está el equipo de Atletismo entrenando")
}
else{
    console.log("Ingresa una hora dentro del programa");
}

switch(horaDia <= 3){
    case true:
        console.log("Está el equipo de Fútbol entrenando.");
        break;
    case false:
        console.log("Está otro equipo entrenando.");
        break;
}


var deporte = prompt ("Por favor, dime el nombre del deporte: ");

switch(deporte){

    case "Futbol":
        console.log("Horario: 1 a 3 PM");
        break;
    case "Atletismo":
        console.log("Horario: 3 a 6 PM");
        break;
    case "Americano":
        console.log("Horario: 6 a 9 PM");
        break;
}


//Pedir datos desde pantalla
// npm install prompt-sync
//const prompt = requiere('prompt-sync')();
//console.log("Hola" + nombre);

//PARA INSTALAR EL LECTOR DE VARIABLES:
//const prompt = require('prompt-sync')();

*/

var arregloNumerico = [ 1, 2, 3, 4, 5];
console.log( arregloNumerico);
var arregloNombres = ["Luis", "Diana", "Omar", "Paola"];
console.log( arregloNombres);
var arregloMixto = [ 20, 16, "Luis", , "Paola", true, false];
console.log(arregloMixto);

console.log( arregloNombres[0]);