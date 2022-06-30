//INSTRUCCIONES
//Dado un número, separarlo en centenas, docenas y unidades.
//Intercambiar la posicion entre las centenas y las unidades
//Imprimir el número final


//Dado un número, separarlo en centenas, docenas y unidades.
var numeroCompleto = 738
if( numeroCompleto <= 999 && numeroCompleto >99){
    var centenas = parseInt(numeroCompleto / 100);
    console.log("Las centenas son: " + centenas*100);
    var decenas = parseInt ( (numeroCompleto %100) / 10);
    console.log("Las decenas son: " + decenas * 10);
    var unidades = parseInt ( (numeroCompleto %100) - decenas*10 );
    console.log("Las unidades son: " + unidades);

//Intercambiar la posicion entre las centenas y las unidades
console.log("El número al revés es: " + unidades + decenas + centenas); 

}
else{
    console.log("Ingresa un número de tres cifras");
}

var conSwitch = "Luis";
var edad = 18;

switch (conSwitch){
    case 2:
        console.log("El valor ingresado es: 2");
        break;
    case 6:
        console.log("El valor ingresado es: 6");
        break;
    case "Luis":
        console.log("¡Hola Luis!");
        if(edad == 18){
            console.log("Felicidades, eres mayor de edad");
        }
        break;
    default:
        console.log("El valor ingresado es distinto");
        break;
}




