/*

Programacion Orientada a Objetos en Javascript

Paradigma de programacion que nos permite crear soluciones a problemas que se nos presentan, tomando como ejemplo los objetos del mundo real. 

Otras formas de programar:

- Programacion funcional
- Programacion imperativa
- Programacion declarativa


*/

//Array Casa

var casaArreglo = [3, 2, 1, 4, "rojo"];

// VS

//Creacion de un objeto casa

const casa = {
  numHabitaciones: 3,
  numPisos: 2,
  numBanios: 1,
  color: "rojo",
};

//No se usa el index coo en los array

//Para imprimir la informacion de un objeto se utiliza la referencia del objeto, despues un punto, y por ultimo el nombre de la propiedad o metodo que quiero mostrar

//Se usan llaves y valores
console.log(casa.color);

//Plantilla para repetir la misma casa 50 veces//Clase para generar una plantilla, esta plantilla va a tener predefinidas las llaves (keys) de nuestras propiedades, y cada que instancie o cree un nuevo objeto, esa informacion se va a ir personalizando.

//Creando plantilla con valores sin inicializar o valores en 0

class casaPlantilla {
  //1.- Definir mis propiedades como variable, para posteriormente agregarle valores (este valor se lo vamos a instancear el objeto y no al crear la plantilla)

  numHabitaciones = 0;
  numeroBanios = 0;
  numPisos = 0;
  color = "";

  //(Ir al paso 2 y luego regresa a este) 3.- Definir una funcion constructora. Esta funcion es una funcion especial que se dedica unicamente a tomar los datos que definimos como variables, para usarlos como parametros de construccion y asi poder instanciar nuestro objeto.

  //Los parametros se pasa en el orden que fueron declarados, para que cada valor que se use, se asigne a la variable correspondiente.

  constructor(numHabitaciones, numBanios, numPisos, color) {
    this.numHabitaciones = numHabitaciones;
    this.numBanios = numBanios;
    this.numPisos = numPisos;
    this.color = color;
  }

  //2.- Definimos los metodos como funciones, porque estas funciones nos dicen que es lo que puede hacer mi objeto. Aqui, dentro de la clase u objeto ya no se una la palabra function para iniciar dichas funciones.

  encenderLuces() {
    console.log("Click, luces encendidas");
  }

  abrirVentanas() {
    console.log("Swiiift, ventanas abiertas");
  }

  cerrarPuertas() {
    console.log("Que agusticidad");
  }
}

/*Instanciar objetos

Para instanciar objets, usamos la siguiente sintaxis:


variable con nombre = palabraReservadaNew referenciaDeLaClase (parametros de construccion);

let objeto = new ClaseObjeto (parametros);

*/

//Tnego una variable llamada casa Pabel que es un nuevo objeto de la clase casa plantilla y que tiene los parametros

// ("numHabitaciones" = 6 "numBanios" = 3 "numPisos" = 3 "Color" = Azul )

let casaDePabel = new casaPlantilla(6, 3, 3, "Azul");

console.log(casaDePabel);
casaDePabel.encenderLuces();
casaDePabel.cerrarPuertas();
casaDePabel.abrirVentanas();

//Hacer copias de esta plantilla

//Ejemplo de POO con gatitos

class gatitos {
  //1.- Propiedades
  nombre = "";
  edad = 0;
  tamaño = "";
  caracter = "";
  numeroVidas = 0;
  color = "";
  raza = "";
  vacunas = false;

  //3.- Constructor
  constructor(
    nombre, edad, tamaño, caracter, numeroVidas, color, raza, vacunas) 
    {this.nombre = nombre;
    this.edad = edad;
    this.tamaño = tamaño;
    this.caracter = caracter;
    this.numeroVidas = numeroVidas;
    this.color = color;
    this.raza = raza;
    this.vacunas = vacunas;
  }

  //2.- Metodos
  imprimirInfo() {
    console.log("El nombre de mi gato es: ", this.nombre);
    console.log("La edad de mi gato es: ", this.edad);
    console.log("El tamaño de mi gato es: ", this.tamaño);
    console.log("El numero de vidas de mi gato es: ", this.numeroVidas);
    console.log("La raza de mi gato es: ", this.raza);
  }

  maullar() {
    console.log("Meowww");
  }

  rasguñar() {
    console.log("El gato ha rasguñado tu cara");
  }

  ronronear() {
    console.log("prrrrrr");
  }

  cuidarGato() {
    if (this.numeroVidas < 3) {
      console.log("Cuida a tu gato, se esta quedando sin vidas");
    }
  }
}

//Instanciar
let juanchoDelCampo = new gatitos(
  "Juancho del campo",
  5,
  "Grande",
  "Tranquilo",
  7,
  "naranja",
  "angora",
  true
);

let nenito = new gatitos(
  "Nenito",
  3,
  "Mediano",
  "Travieso",
  2,
  "Blanco con naranja",
  "desconocida",
  true
);

let tonchi = new gatitos(
  "tonchi",
  5,
  "mediano",
  "serio",
  1,
  "Negro",
  "Desconocida",
  false
);

let miñau = new gatitos(
  "miñau",
  6,
  "mediano",
  "miedosa",
  10,
  "cafe con rayas",
  "Desconocida",
  true
);

let atomico = new gatitos(
  "atomico",
  10,
  "grande",
  "enojon",
  10,
  "muerte",
  "pesadilla",
  false
);

juanchoDelCampo.imprimirInfo();
nenito.imprimirInfo();
nenito.cuidarGato();
tonchi.imprimirInfo();
miñau.imprimirInfo();
atomico.imprimirInfo();
