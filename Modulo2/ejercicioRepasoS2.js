/*Programa adivina la palabra
Palabra de 4 letras, tendrás solo 4 intentos
para adivinarla, en un inicio la palabra estará oculta,
pero cada vez que aciertes, se mostrará
la letra, si adivinas la palabra antes de que 
se te acaben los intentos ganas, sino pierdes.*/

const prompt = require( 'prompt-sync')();
var palabraOculta = [];
var palabraMostrada = ["-","-","-","-"];
var contadorAciertos = 0;
var contadorFallas = 4;

palabraOculta[0] = prompt("Ingresa la primera letra: ");
palabraOculta[1] = prompt("Ingresa la segunda letra: ");
palabraOculta[2] = prompt("Ingresa la tercera letra: ");
palabraOculta[3] = prompt("Ingresa la cuarta letra: ");
//console.log(palabraOculta);

for( var i = 0; i < (palabraOculta.length * 2); i++ ){
    var intento = prompt("Ingresa una letra: ");
    switch( intento ){
        case palabraOculta[0]:
            console.log("La primera letra es correcta");
            palabraMostrada[0] = palabraOculta[0];
            console.log(palabraMostrada);
            contadorAciertos++;
            break;
    
        case palabraOculta[1]:
            console.log("La segunda letra es correcta");
            palabraMostrada[1] = palabraOculta[1];
            console.log(palabraMostrada);
            contadorAciertos++;
            break;

        case palabraOculta[2]:
            console.log("La tercera letra es correcta");
            palabraMostrada[2] = palabraOculta[2];
            console.log(palabraMostrada);
            contadorAciertos++;
            break;

        case palabraOculta[3]:
            console.log("La cuarta letra es correcta");
            palabraMostrada[3] = palabraOculta[3];
            console.log(palabraMostrada);
            contadorAciertos++;
            break;
        
        default:
            console.log("Te equivocaste :c");
            contadorFallas--;
            console.log("Te quedan: " + contadorFallas + " intentos");
            console.log(palabraMostrada);
            break;
    }
    if(contadorAciertos == 4){
        break;
    }
    else if(contadorFallas == 0){
        break;
    }
}

if(contadorAciertos < 4){
    console.log("PERDISTE, vuelve a intentarlo");
}
else if(contadorAciertos == 4 ){
    console.log("GANASTE, adivinaste la palabra :D");
}