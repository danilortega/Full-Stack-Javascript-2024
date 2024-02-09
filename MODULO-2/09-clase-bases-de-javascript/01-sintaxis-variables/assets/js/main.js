var pais = "Chile"; // String
var continente = "Latino América"; // String
var antiguedad = 2024; // number interger , int
var decimal = 20.5;  // number , float
// var paisContinente  = pais+' '+continente;
var paisContinente  = `${pais} ${continente}`; // template literal, comilla invertida para no concatenar
var verdadero = true; // Boolean , true o false;
// console.log( 'Salida de paisContinente--->', paisContinente );

// Usamos la función console.log para mostrar por consola la variable
// Usamos el método typeof para que tipo de dato es 
console.log( 'Salida de var antiguedad--->', typeof( antiguedad ) );
console.log( 'Salida de var pais--->', typeof( pais) );
console.log( 'Salida de var decimal-->', typeof( decimal ) );
console.log( 'Salida de var verdadero-->', typeof( verdadero ) );


// Operadores de asignacio
var numUno = 50;
var numDos = 25;
numUno = 'Hola';

console.log(numDos+numUno);
console.log(numDos-numUno);
console.log(numDos*numUno);
console.log(numDos/numUno);
console.log(numUno < numDos);

if( numUno > numDos ){
    console.log('Esto es verdadero')
}else{
    alert('Es falso')
}

var num1 = prompt('Ingres un numero 1','')
var num2 = prompt('Ingres un numero 2','')
console.log(typeof(num1))
console.log(typeof(num2))
console.log(parseInt(num1)+parseInt(num2));