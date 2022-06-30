 //TEMA ARREGLOS PARTE 2

 var concatena1 = ["Hola", "Buenas", "Tardes"];
 var concatena2 = ["Adiós", "Buenas", "Noches"];

 console.log("-------------------------");

 //MÉTODO CONCAT
 //Concat sirve para unir dos arreglos y convertirlos en uno mismo.
 console.log(concatena2.concat(concatena1));

 console.log("-------------------------");

 //MÉTODO SORT
 //Ordenar los arreglos y devolver el arreglo ordenado. 


var frutasN1 = ["Mandarina", "Piña", "Sandía", "Durazno"];
var frutasN2 = ["Mandarina", "Piña", "Pera", "Durazno"];
var arreglosNumeros = [5000, 10, 200, 1000, 400];

frutasN1.sort();
frutasN2.sort();
arreglosNumeros.sort();

console.log(frutasN1);
console.log(frutasN2);
console.log(arreglosNumeros);

console.log("-------------------------");

//CICLOS - FOR

console.log("Hola-forma manual");
console.log("Hola-forma manual");
console.log("Hola-forma manual");

console.log("-------------------------");

//Pasar de 10 hasta 1
for( var i = 10; i >= 1; i--){
    console.log("HOLA - Forma automática" + "i: " + i);
}

console.log("-------------------------");

//Pasar de 0 hasta 10
for( var i = 0; i <= 10; i++){
    console.log("HOLA - Forma automática" + "i: " + i);
}

console.log("-------------------------");

arreglosNumeros = [5000, 10, 200, 1000, 400];
console.log(arreglosNumeros[4]);

console.log("-------------------------");

for(var j = 0; j < arreglosNumeros.length; j++){
    console.log("El valor del arreglo en la posición " + j +" es: " + arreglosNumeros[j]);
}