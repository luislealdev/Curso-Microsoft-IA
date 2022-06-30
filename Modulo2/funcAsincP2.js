/*console.log("Hola");
setTimeout( function timeout(){
    console.log("Mundo");
}, 4 * 1000);
console.log("Hola a los participantes");
*/

function primero (callback){
    setTimeout( function(){
        return callback("Primero");
    }, 5*1000);
}
function segundo(callback){
    return callback("Segundo");
}
primero(function (resultado1) {
    console.log(resultado1); 
    segundo( function(resultado2){
        console.log(resultado2);
    })
})
