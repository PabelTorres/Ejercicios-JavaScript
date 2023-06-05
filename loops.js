/*

Bucles e iteracion

En JS un bucle es una estructura de control que permite repetir un bloque de instrucciones, o lo que es lo mismo, repetir una tarea tantas veces queramos. Gracias a esto vamos a poder automatizar tareas repetitivas.



- While (mientras)
 - Do While (hacer mientras)
 - For (para)



While (mientras)

Este bucle nos sirve para realizar una tarea repetitiva, mientras una condicion sea VERDADERA. A diferencia del if, que pregunta una vez y despues ejecuta el bloque de codigo, el while pregunta continuamente la condicion y ejecuta el bloque de codigo hasta que la condicion devuelva FALSE.

*/
/*
let rolDeUsuario = "registrado"; //esto ya esta definido

while (!"registrado") {
  //la evaluacion es sobre el rol

  function registrarUsuario() {
    console.log("Usuario Registrado");
  }
}

dejaloComprar();
*/
//Codigo de sopita de verduritas

//Declaro e inicializo un array con mis ingredientes

var ingredientes = [
  "zanahorias",
  "cebollas",
  "apio",
  "papa",
  "espinaca",
  "pollito",
];

//Declaramos una variable llamada ingredientesAgragadosALaOlla inicializado en 0, para usar como un contador

var ingredientesAgragadosALaOlla = 0;

//Mientras los ingredientes agregados a la olla sean menos que los ingrediemntes que me quedan disponibles...

while (ingredientesAgragadosALaOlla < ingredientes.length) {
  //Iremos agregando ingredientes a la olla...

  console.log(
    "Agregando " + ingredientes[ingredientesAgragadosALaOlla] + " a la olla"
  );

  //... y voy aumentando el contador para saber cuando parar

  ingredientesAgragadosALaOlla++;
}

console.log("La sopita ya esta lista, yummy yummy");

/*

while (condición) {
    // Código a ejecutar si la condición es verdadera
}

En el diagrama anterior, la condición se evalúa antes de ejecutar el bloque de código. Si la condición es verdadera, el bloque de código se ejecuta. Si la condición es falsa, el programa salta fuera del bucle y continúa con la ejecución del código que sigue al bucle while.


do {
    // Código a ejecutar al menos una vez
} while (condición);


En el diagrama anterior, el bloque de código se ejecuta al menos una vez, sin importar si la condición es verdadera o falsa. Después de ejecutar el bloque de código, se evalúa la condición. Si la condición es verdadera, el programa vuelve al inicio del bucle y ejecuta el bloque de código nuevamente. Si la condición es falsa, el programa sale del bucle y continúa con la ejecución del código que sigue al bucle do-while.

En resumen, la principal diferencia entre while y do-while es que while primero verifica la condición y luego ejecuta el bloque de código, mientras que do-while ejecuta el bloque de código al menos una vez y luego verifica la condición.

*/

console.log("Ejemplo de Galletitas con Do-While");

//variable tiempo de coccion que servira como contador
var tiempoTranscurridoDeCoccion = 0;

//usamos el ciclo do-while

do {
  console.log("Horneando las galletas...");
  tiempoTranscurridoDeCoccion += 5;

  //Todo el bloque de codigo se va evaluar mientras el tiempo de coccion sea menor a 30 minutos. Esto es porque las galletas se puden cocinar en 5, 10, 15, 20 o 25 minutos, teniendo un maximo de 30. Si pasamos de ese tiempo, puede que las galletas se quemen.

  //Esto es como si revisaramos el horno cada 5 minutos
} while (tiempoTranscurridoDeCoccion < 30);

console.log("Las galletas estan listas");

/*For (para)

Se utiliza cuandos se conoce el numero exacto de iteraciones que se realizaran. Consiste en tres partes: inicializacion, condicion y expresion final.
El bloque de codigo se ejecuta mientras la condicion sea verdadera, y despues de cada iteracion se ejecuta la expresion final.


for (inicializacion; condicion ; expresion de iteracion){
    //Bloque de codigo a ejecutar
}


 - inicializacion: se ejecuta antes de que el bucle comience, y se utiliza para establecer una variable de control (contador)

 - condicion: se verificar antes de cada iteracion, y si se evalua como verdadera, el bucle se ejcuta. 

 - expresion de iteracion: se ejecuta al final de cada iteracion, y se utiliza para actualizar o modificar la variable de control.


*/

//Ejemplo loop for aplicado a cuenta regresiva de cohete (i siendo igual al tiempo de despegue)

for (let i = 10; i > 0; i--) {
  console.log("Faltan " + i + " segundos para el despegue");
}
