/* operadores

Los operadores no permiten ralizar una operación en uno o varios operandos
(variables o datos)

- Operadores de asignación
- Operadores de cadena
- Operadores logicos
- Operadores de comparación
- Operadores aritmeticos



Operadores de asignación (=)
Los operadores de asignación (=) se utilizan para asignarle un valor a una variable.
Signa un valor al operando
Todo lo que este despues de un signo de igual es una asignación de la izquierda basado en el valor del operador 
de la derecha.
*/

//Ejemplo//
/*
let edadFelipe = 31;
var recipiente = "café";

/*

Operadores de comparacion (>, <, >=, <=, ==, ===, !=, !==)

Los operadores de comparacion nos ayudan a comparar dos expresiones o valores y nos devuelven un valor boolean que representa la relacion de sus valores.



*/
/*
let numero1 = 13;
let numero2 = 25;
let numero3 = "25";

// operador menor que
console.log(
  "El valor del 13 es menor que el valor del 25? " + (numero1 < numero2)
);

//operador mayor que
console.log(
  "El valor del 13 es menor que el valor del 25? " + (numero1 > numero2)
);

//operador mayor o menor que
console.log(
  "El valor del 13 es mayor que el valor del 25? " + (numero2 >= numero3)
);

//operador de igualdad
console.log(
  "El valor del 13 es igual que el valor del 25? " + (numero2 == numero3)
);

// operador de igualdad estricta (evalua el valor y que el tipo de dato sea el mismo)
console.log(
  "El valor del 13 es igual que el valor del 25? " + (numero2 === numero3)
);

// Operador de desigualdad (!=)

console.log(
  "El valor del 13 no es igual que el valor del 25? " + (numero1 != numero3)
);

// Operador de desigualdad estricta (!==)

console.log(
  "El valor del 13 no es igual que el valor del 25? " + (numero2 !== numero3)
);
*/
/*
Operadores logicos (&& (and), || (or), ! (not))

Los operadores logicos nos devuelven un resultado a partir de que se cumpla (o no) una condicion. El resultado sera un valor boolean y sus operadores son logicos o asimilables entre ellos (los podemos combinar, y ,los podemos poner en un orden especifico).


AND (&&)

Sirve para determinar si dos expresiones son verdaderas. 

    - Si ambas expresiones son verdaderas, el resultado es verdadero. 
    - Si una de las dos expresiones es falsa, todo el resultado es falso.




OR (||)

Sirve para determinar si dos expresiones son falsas.

    - Si cualquiera de esas afirmaciones es verdadera, todo es verdadero.
    - Si las dos afirmaciones son falsas, todo es falso.



NOT (!)

Sirve para mostrar lo contrario a lo que estamos devolviendo


*/

//Ejemplo con AND (&&)

/*
var num1 = 12;
var num2 = 24;

afirmacion1 = num1 > num2; //false
afirmacion2 = num1 != num2; //verdadero

console.log(afirmacion1 && afirmacion2); //Imprime true porque ambas afirmaciones son verdaderas

//Ejemplo con OR (||)
afirmacion3 = num1 < num2; //verdadero
afirmacion4 = num1 !== num2; //verdadero

console.log(afirmacion3 || afirmacion4);

//Ejemplo con NOT (!)
console.log(!afirmacion3); //falso
console.log(!afirmacion4); //falso
*/

//!Combinando operaciones2

/*
num1 = 12;
num2 = 24;
num3 = 25;
num4 = 92;
num5 = 91;

op2 = (num5 > num2 && num4 < num3) || !(num1 === num2) || num3 != num3;
/*        true           false               true            false
                 
                  false                               true
                                 
                                   true



console.log(op2); // true

*/

/*

Operadores aritmeticos (+, -, *, /, %, **, ++, --)


 + (suma): suma dos o mas valores numericos
 - (resta): resta dos o mas valores numericos
 * (multiplicacion): multiplica dos o mas valores numericos
 / (division): divide dos o mas valores numericos
 % (modulo o residuo) : retorna el residuo de una division
 ** (exponenciacion) : retorna el resultado de una potencia. Se escribe la base antes de los asteriscos, y el exponente despues de los asteriscos
 ++ (incremento) : incrementa un valor de uno en uno
 -- (decremento) : decrementa un valor de uno en uno

*/

/*
let valor1 = 55;
let valor2 = 17;

console.log("Suma: ", valor1 + valor2);
console.log("Resta: ", valor1 - valor2);
console.log("Multiplicacion: ", valor1 * 17);
console.log("Divison: ", valor1 / valor2);
console.log("Residuo: ", valor1 % valor2);
console.log("Exponente: ", valor1 ** valor2);
console.log("Incremento: ", ++valor1);
console.log("Decremento: ", --valor2);

console.log(valor1);
*/

//Ejercicio IMC

console.log("Calcular IMC");

///////////////////////////Variables

let peso = prompt("Ingresa tu peso en libras");
let altura = prompt("Ingresa tu altura en cm");

///////////////////////////Pedir Funcion

const resultado = resultadoIMC(peso, altura);

///////////////////////////If
if (resultado < 16) {
  estadoImc = "Criterio de ingreso";
}
if (resultado > 16 && resultado < 16.9) {
  estadoImc = "esta en infrapeso";
} else if (resultado > 17 && resultado < 18.4) {
  estadoImc = "esta en bajo peso";
} else if (resultado > 18.5 && resultado < 24.9) {
  estadoImc = "esta en peso normal";
} else if (resultado > 25 && resultado < 29.9) {
  estadoImc = "esta en sobrepeso";
} else if (resultado > 30 && resultado < 34.9) {
  estadoImc = "esta en obesidad premorbida";
} else if (resultado > 40 && resultado < 45) {
  estadoImc = "esta en obesidad morbida";
} else if (45 < resultado) {
  estadoImc = "esta en obesidad hipermorbida";
}

console.log("Su IMC es de ", resultado, estadoImc);

///////////////////////////Function
function resultadoIMC(peso, altura) {
  //    console.log(peso);
  //    console.log(altura);
  peso = peso * 0.453592;
  //    console.log(peso);
  altura = altura / 100;
  //    console.log(altura);
  operacion = peso / (altura * altura);
  //    console.log(operacion);
  return operacion;
}
