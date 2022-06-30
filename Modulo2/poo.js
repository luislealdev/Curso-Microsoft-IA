//Programación Orientada a Objetos

//Creación de un objeto
/*var celular = {
    color: "Azul",
    peso: "80g",
    numCamaras: 1,
    sistema: "IOS",
    duracionBateria: 10
}
console.log(celular);
console.log(celular.color);
console.log(celular["numCamaras"]);
*/

class galleta{
    constructor( tamaño, forma, sabor ){
        this.tamaño = tamaño;
        this.forma = forma;
        this.sabor = sabor;
        this.hornea = function(){return "horneando..."}
    }
}

let galletaChocolate = new galleta( "5x5 cm", "Cuadrado", "Chocolate" );
var galletaVainilla = new galleta( "3 cm", "Circulo", "Vainilla" );

//console.log(galletaVainilla.hornea());

/*
console.log( galletaChocolate );
console.log( galletaVainilla );
console.log( galletaChocolate.sabor);
console.log( galletaVainilla["sabor"]);
*/


//----------------------------------

//Caso N1
var frutaN1 = {nombre: "manzana"}
var frutaN2 = {nombre: "manzana"}
var resultado = ( frutaN1 == frutaN2 );
console.log( resultado);

//Caso N2
var frutaN3 = frutaN1;
var resultadoN2 = ( frutaN3 == frutaN1);
console.log(resultadoN2);