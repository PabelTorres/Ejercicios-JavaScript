console.log("Ejercicio Jugueteria");

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
