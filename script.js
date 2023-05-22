// alert ("Hello World!");

/* 

Variables

Elemento cuyo valor puede cambiar o variar dependiendo la circunstancia. 
Esta variable ocupa un espacio de memoria y dependiendo de su valor o elemento 
que este en su interior es el tipo de variable.


Variable = recipiente donde pondremos el valor
Valor = la informacion con la que llenamos el recipente

Declarar = Ponerle nombre a nuestro recipiente
Inicializar = Llenar ese recipiente


*/

recipiente = "agua"
recipiente = "café"
recipiente = "Lapices y colores"

/* Tipos de datos primitivos y no primitivos

- String
- Number
- Boolean
- Undefined
- Null
- Symbol
- Objetct (no es primitivo)

*/

apodoDeFelipe = "El 'amante numero uno' de los chilaquiles verdes";
console.log(apodoDeFelipe);

/*Uso de Camel Case como buena practica
 
 Utilizar nombres significativos para las variables

*/

// -Number: Sirve para agregar valores de tamaño numerico (para poder utilizarlos en operaciones aritmeticas). Estos valores no usan comillas. //

//Boolean: Valores true or false, yes or no, on and off//

esAdministrador = true;
cuentaPremium = false;
contraseñaCorrecta = true;





edadDeFelipe = 31;
costoDeUnGansito = 18.50;
cuentaDeFelipe = -136.50;

console.log(edadDeFelipe);
console.log(costoDeUnGansito);
console.log(cuentaDeFelipe);

//Ejemplos de valores boolean//

console.log();
console.log();
console.log();


//Undefined: Valores no definidos de variables //

/*respuestaDeMiCrush;
precioDeBoletoDeEstacionamiento;

console.log(respuestaDeMiCrush);*/

//Null: sirve para definir que un valor es nulo//

respuestaDeMiCrush = null;
console.log(respuestaDeMiCrush);

/*- NaN (Not at Number): Sirve para representar un valor que no es un numero. 
Lo obtenemos si hacemos una operacion con una variable que no es un numero o con una operacion que no es posible.*/

//Ejemplos con valores NaN

operacionMatematica = 0/0
console.log(operacionMatematica);

/* TypeOf 

Es una expresion que nos ayuda a saber que tipo de dato es el que estamos evaluando

typeof(elDatoAvaluar);

Todos los resultados que arroja son cadenas con el tipo de dato que estamos evaluando.

*/


console.log(typeof(esAdministrador));
console.log(typeof(edadDeFelipe));
console.log(typeof(respuestaDeMiCrush));
console.log(typeof(apodoDeFelipe));


