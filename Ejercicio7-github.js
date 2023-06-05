// Variable para almacenar el número mayor ingresado
let numeroMayor = Number.MIN_SAFE_INTEGER;

// Variable para almacenar el número menor ingresado
let numeroMenor = Number.MAX_SAFE_INTEGER;

// Variable para almacenar el número actual ingresado por el usuario
let numeroActual;

// Ciclo para leer los números y encontrar el mayor y el menor
do {
  // Solicitar al usuario que ingrese un número
  numeroActual = parseInt(
    prompt("Ingresa un número entero positivo (ingresa 0 para finalizar):")
  );

  // Verificar si el número ingresado es mayor al número mayor actual
  if (numeroActual > numeroMayor) {
    numeroMayor = numeroActual;
  }

  // Verificar si el número ingresado es menor al número menor actual
  if (numeroActual < numeroMenor && numeroActual !== 0) {
    numeroMenor = numeroActual;
  }
} while (numeroActual !== 0);

// Mostrar el número mayor y el número menor en un alert
alert(
  "El número mayor ingresado es: " +
    numeroMayor +
    " y " +
    "el número menor ingresado es: " +
    numeroMenor
);
