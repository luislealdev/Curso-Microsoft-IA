//Operador + (suma)
var operandoN1 = 5000;
var operandoN2 = 10000;
var resultado = operandoN1 + operandoN2;
console.log( resultado );

//Operador * (Multiplicación)
var operandoN3 = 12;
var operandoN4 = 2;
var resultado2 = operandoN3 * operandoN4;
console.log( resultado2 );

//Operandor / (División)
var resultado3 = operandoN2 / operandoN1;
console.log( "El resultado de tu división es: "+resultado3 );

//Operador ++ (Sumar 1 a un número)
resultado3++;
console.log( "Incrementando la variable resultado3: "+resultado3 );

//Operador = (Asignar un valor a una variable)
operandoN1 = operandoN2;
console.log( operandoN1 );

//Operador += (Suma de dos variables y asignarlo a una de las variables usadas en la suma)
operandoN3 += operandoN4;
console.log( operandoN3);

//Operadores de comparación

// == (Comparar un dato, para que den verdadero no importa si es un número o texto)
var nComparacion1 = 5;
var nComparacion2 = "5";
var resultadoComparacion = ( nComparacion1 == nComparacion2 );
console.log( resultadoComparacion );

// === (Comparar un dato, para que den verdadero tienen que ser del mismo tipo)
var nComparacion1 = 5;
var nComparacion2 = "5";
var resultadoComparacion = ( nComparacion1 === nComparacion2 );
console.log( resultadoComparacion );

// !== (Comparar un dato, que nos de verdadero si son diferentes)
var nComparacion1 = 5;
var nComparacion2 = 5;
var resultadoComparacion = ( nComparacion1 !== nComparacion2 );
console.log( resultadoComparacion );

// > (Comparar un dato, que nos de verdadero si la primer variable es mayor a la segunda)
var nComparacion1 = 6;
var nComparacion2 = 5;
var resultadoComparacion = ( nComparacion1 > nComparacion2 );
console.log( resultadoComparacion );

// < (Comparar un dato, que nos de verdadero si la primer variable es mayor a la segunda)
var nComparacion1 = 6;
var nComparacion2 = 9;
var resultadoComparacion = ( nComparacion1 < nComparacion2 );
console.log( resultadoComparacion );




//Operadore && ("And" o "y") (Si las dos condiciones son verdaderas, tendremos un resultado true, sino uno false.)
var oplN1 = 5;
var oplN2 = 50;
var oplN3 = 30;

var resultadoOperadorLogico = ( oplN1 < 20 ) && ( oplN2 < oplN3);
console.log( "Resultado operador &&: " + resultadoOperadorLogico );

//Operador || ("Or" o "o") (Si alguna de las dos condiciones es verdadera, tenremos un resultado true, si ninguna es verdadera, tenremos un resultado false.)
var resultadoOperadorLO = ( oplN1 < oplN2 ) || ( oplN2 < oplN3 );
console.log ( "Resultado operador ||: " + resultadoOperadorLO);
 
//Operador de negación (!) (Va a cambiar el resultado: Si es un falso, se convertirá en un verdadero. Si es un verdadero, se convertirá en un falso.)
var resultadoOperadorLN = !resultadoOperadorLO;
console.log("Resultado operador !" + resultadoOperadorLN);