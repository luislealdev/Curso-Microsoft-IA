var arreglosNombres = ["Luis", "Diana", "Omar", "Paola"];

console.log( arreglosNombres[2]);

//Cambiar uno de los datos del arreglo
arreglosNombres[2] = "Rosa";
console.log( arreglosNombres[2]);

//Eliminar uno de los datos del arreglo
delete arreglosNombres[2];
console.log(arreglosNombres);

//Mostrar el cuantos datos que existen en el arreglo
console.log("La cantidasd de elementos en el arreglo es: " + arreglosNombres.length);

//Ingresar un nuevo dato al final del arreglo
arreglosNombres.push("Cristina");
console.log(arreglosNombres);

//Eliminar el último dato de un arreglo
arreglosNombres.pop();
console.log(arreglosNombres);

//Agregar un dato al arreglo em la posición que queramos
//Primero: Se agrega la posición del nuevo dato
//Segundo: Se pone el número de elementos a eliminar
//Tercero: Se pone el nuevo dato a agregar
arreglosNombres.splice( 0, 0 ,"Cristina", );
console.log(arreglosNombres);

//Eliminar varios elementos de un arreglo
//Primero: Se pone la posición donde vamos a empezar a eliminar valores
//Segundo: Se pone cuantos valores vamos a eliminar
arreglosNombres.splice(1,4);
console.log(arreglosNombres);

//EJERCICIO
//Realizar un programa que lea 5 calificaciones y muestre el promedio de estas.
const prompt = require('prompt-sync')();
var calificaciones = [];
calificaciones[0] = prompt("Ingresa la primera calificación: ");
calificaciones[1] = prompt("Ingresa la segunda calificación: ");
calificaciones[2] = prompt("Ingresa la tercera calificación: ");
calificaciones[3] = prompt("Ingresa la cuarta calificación: ");
calificaciones[4] = prompt("Ingresa la quinta calificación: ");

var promedioCalificaciones = (parseInt(calificaciones[0]) + parseInt(calificaciones[1]) + parseInt(calificaciones[2]) + parseInt(calificaciones[3]) + parseInt(calificaciones[4]))/5;
console.log("El promedio de las calificaciones es: " + promedioCalificaciones);

var concatenaN1 = ["Hola", "Buenas", "Tardes"];
var concatenaN2 = ["Adiós", "Buenas", "Noches"];
console.log(concatenaN1.concat (concatenaN2));