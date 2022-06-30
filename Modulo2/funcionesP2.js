/*

const prompt = require('prompt-sync')();

precio = prompt("Escribe el precio del producto: ");
nombreProducto = prompt("Escribe el nombre del producto: ");

function precioTotal( precio){
    var resultado = 0;
    if( precio <= 399){
        console.log("Factura");
        console.log("Costo de envío: $100mxn")
        resultado= parseInt(precio) + 100;
        console.log("El total a pagar por: " + nombreProducto  +  " es: $" + resultado + "mxn");
    }
    else if (precio > 399){
        console.log("Factura");
        resultado = parseInt(precio);
        console.log("Costo de envío: Envío gratis.")
        console.log("El total a pagar por: " + nombreProducto + " es: $" + resultado + "mxn");
    }
}

precioTotal(precio, nombreProducto);
*/


/*
function ambitoVar(){
    const i = 1;
    if(i == 1){
        var variableVar = "Ambito de variable";
    }
    console.log( variableVar );
}
ambitoVar();
*/


//LET : FORMA MODERNA DE DECLARAR UNA VARIABLE
/*
let nombre = "Luis";
nombre = "Pablo";
console.log( nombre );
*/


/*ESTA DA ERROR PORQUE LA DECLARACIÓN DE VARIABLES CON LET SOLO SE PUEDE
ACCEDER A LA INFORMACIÓN DENTRO DE LAS LLAVES EN LAS QUE ESTÁ. 
CON VAR PODEMOS ACCEDER A LA INFORMACIÓN DENTRO DE LA FUNCIÓN*/ 
/*
function ambitoLet(){
    const i = 1;
    if( i == 1){
        let variableLet = "Ambito de variable - Let";
    }
    console.log( variableLet );
}
ambitoLet();
*/

/* AQUÍ ESCRIBE PRIMERO LA VARIABLE DE AFUERA, 
LA DE ADENTRO Y LA DE AFUERA DE NUEVO. */ 
var mensaje = "texto";
function mensajeFuncion(){
    var mensaje = "texto2";
    console.log( mensaje );
}
console.log( mensaje );
mensajeFuncion();
console.log( mensaje );

//EL RESULTADO DE ESTO ES:
//texto
//texto2
//texto

multiplicar(12);

function multiplicar(primerOperando){
    var resultado = 3 * primerOperando;
    console.log("El resultado es: " + resultado);
}


var resultado = function multiplicar( primerOperando){
    return 3 * primerOperando;
}
console.log(resultado (12));