/*console.log("Ejercicio Jugueteria");

//Numero de items
numeroPayasos = 27;
numeroMunecas = 14;

//Peso de los items (gr)
pesoPayaso = 112;
pesoMunecas = 75;

//Obtener el peso del paqueta
pesoTotalPaquete = null;
// total = peso payasos + muñecas

pesoTotalPayasos = numeroPayasos * pesoPayaso;
pesoTotalMunecas = numeroMunecas * pesoMunecas;

pesoTotalDelPaquete = pesoTotalPayasos + pesoTotalMunecas;

// Imprimir resultado
console.log("El peso total del paquete es de: " +  pesoTotalDelPaquete + " gramos");
*/

//payasos y muñecas

console.log("Ejercicio 2: Jugueteria");

//número de items
var payasos = prompt("Ingresa la cantidad de payasos");
var muñecas = prompt("Ingresa la cantidad de muñecas");

//payasos = 27;
//muñecas = 14;

//peso de items
const pesoPayaso = 112;
const pesoMuñeca = 75;

//operaciones

pesoPayasoTotal = payasos * pesoPayaso;
pesoMuñecaTotal = muñecas * pesoMuñeca;

/*
pesoTotal = pesoPayasoTotal+pesoMuñecaTotal;
*/

function pesoTotal(pesoPayasoTotal, pesoMuñecaTotal) {
  operacion = pesoPayasoTotal + pesoMuñecaTotal;
  return operacion;
}

//print
const resultado = pesoTotal(pesoPayasoTotal, pesoMuñecaTotal);
console.log("El peso total del paquete es " + resultado + " gramos");
