//Javascript sincrono

// console.log("Inicio sincrono");
// function dosSync() {
//   console.log("Se ejecuta version dos");
// }

// function unoSync() {
//   console.log("Se ejecuta la funcion uno");
//   dosSync();
//   console.log("Se ejecuta el codigo tres");
// }

// unoSync();
// console.log("Fin de Sincrono");

// //Javascript asincrono
// console.log("Inicio de Asincrono");
// function dosAsync() {
//   setTimeout(function () {
//     console.log("Dos");
//   }, 5000);
// }

// function unoAsync() {
//   dosAsync();
//   console.log("Tres");
// }

// unoAsync();
// console.log("Fin de Asincrono");

// /*

// °Ejemplos asincronos

// - Function setTimeout
// - Notificaciones de cierre de sesion en apps bancarias
// - Spotify con su cola de reproduccion
// - Conexiones a servidor
// - Cargas de PISs

// */

// /*

// Ya que entendemos que la asincronia nos servira para conectarnos a un servidor, y que sin importar la respuesta que este nos de (exitosa o no), o incluso el tiempo que tarde en responder (milisegundos o segundos), es  necesario saber que hay varios mecanismos para manejar operaciones asincronas en JS.

//     -Callbacks (lamadas de vuelta): la forma más clasica de gestionar la asincronia.

//     -Promises (promesas): forma moderna

//     - Async/ Await: forma moderna con una sintaxis mas ligera

// */

// /*

// Que es un callback (llamada de vuelta)

// Un callback es una funcion que se pasa como argumeno a otra funcion. Esta funcion se ejecutara despues de que la otra o haga. Este mecanismo nos ayuda a controlar que cierto codigo no se ejecute antes de que el otro termine.

// Para que lo necesitamos?
// Sabemos que JS trabaja de forma descendente, entonces habra caso que queramos hacer que un codigo se ejecute despues de que ocurra otra cosa, y tambien de forma no secuencial.

// */

// function hazClick() {
//   console.log("Le hiciste click al boton");
// }

// const boton = document.getElementById("boton");
// boton.addEventListener("click", hazClick);

// //Creamos una función llamada dobleNumero, que noma un numero y un callback como argumentos (el callback es una funcion)

// function dobleNumero(num, callback) {
//   const resultado = num * 2; //Operacion comun y corriente
//   callback(resultado); //Invocacion de ese callback con el resultado parametro
// }

// //Definir una funcion para mostrar resultado
// function mostrarResultado(resultado) {
//   console.log("El resultado es: ", resultado);
// }
// dobleNumero(5, mostrarResultado);

// /*

// Promises (promesas)

// Son otro mecanismo para manejar la esincronia. Utilizar promesas hace que el codigo sea más legible y practico que utilizar callbacks, y como su nombre lo indica una promesa es algo que en un principio no sabemos si se va a cumplir, pero en el futuro pueden pasar varias cosas. La gran ventaja de utilizar promesas es que evitamos anidar muchas funciones, y usamos una sola function (metodo) para manejar los callbacks.

// NOTA: Las promesas son objetos

// promise.then

// promise.catch

// Estados de las promesas:

// Pendiente (pending): El estado inicial de una Promesa. Significa que la operación aún no se ha completado y sigue en progreso.

// Resuelta (fulfilled): La operación se ha completado con éxito y se ha resuelto la Promesa. Esto significa que el resultado está disponible y se puede acceder a través del método then.

// Rechazada (rejected): La operación ha fallado y la Promesa se ha rechazado. Esto significa que se produjo un error y se puede acceder a información adicional sobre el error a través del método catch.

// Metodos de las promesas

// 1. then(function resolve): Permite especificar el código a ejecutar cuando la Promesa se resuelve con éxito. Toma una función de devolución de llamada como argumento, que se ejecutará con el resultado de la Promesa.

// 2. catch(function rejected): Permite manejar los errores que se producen durante la ejecución de la Promesa. Toma una función de devolución de llamada como argumento, que se ejecutará cuando la Promesa sea rechazada.

// then (resolve rejected) Pueden usarse las dos funciones en el mismo metodo.

// */

// //Creo una funcion llamada obtenerProductos para poder utilizar promesas y hacer la conexion a mi url para obtener datos
// function obtenerProductos() {
//   //cuando se ejecute la funcion, quiero que retorne un nuevo objeto del tipo promesa
//   //Especifico que este objeto promise tiene dos funciones: una cuando se resuelve, y otra cuando se rechaza
//   return new Promise(function (resolve, reject) {
//     //el objeto maneja dos funciones (resuelto, rechazo)
//     fetch("https://fakestoreapi.com/products") //direccion a donde me voy a conectar y buscar
//       .then(function (response) {
//         //espero respuestas...
//         if (response.ok) {
//           //propiedad booleana (si o no hay respuesta)
//           return response.json(); //metodo para convertir la respuesta a un objeto .json
//         } else {
//           //si no...
//           throw new Error(
//             "Error al obtener los productos. Error 404! Servidor no encontrado"
//           ); //lanzo un nuevo error (404)
//         }
//       })
//       .then(function (data) {
//         //Si hay una respuesta, resuelvo la promesa (exitosa) y ya tengo mis datos para despues jugar con ellos
//         resolve(data);
//       })
//       .catch(function (error) {
//         //Si no hay una respuesta, resulvo con un rechazo.
//         reject(error);
//       });
//   });
// }

// // Uso de la promesa

// obtenerProductos()
//   .then(function (resultado) {
//     console.log(resultado);
//   })

//   .catch(function (error) {
//     console.log(error);
//   });

// // Otro uso de promesa(recuerda copiar los comentarios de los pasos)

// let nombre = "Felipe";

// let promesaNombre = new Promise(function (resolve, reject) {
//   if (nombre !== "Felipe") {
//     reject("Error, el nombre no es Felipe");
//   } else {
//     resolve("¡Qué bien!, el nombre es correcto: " + nombre);
//   }
// });

// console.log(promesaNombre);

// const obtenerPokemon = new Promise((resolve, reject) => {
//   fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//     .then((respuesta) => {
//       if (respuesta.ok) {
//         return respuesta.json();
//       } else {
//         throw new Error("Error 404");
//       }
//     })

//     .then((datos) => {
//       resolve(datos);
//     })

//     .catch((error) => {
//       reject("Mensaje de error, no encontramos tu pokemon: " + error);
//     });
// });

//Nota no tan mental: then es una funcion de tipo callback

/*

Fetch API

Es una interfaz de JS, que nos da un metodo llamado fetch, el cual nos permite manejar solicitudes HTTP (GET, POST, PUT, DELETE).

Cuando usamos Fetch API sabemos que de forma implicita estamos usando promesas, tambien de forma implicita sabemos que esa promesa se puede resolver o rechazar.

El metodo fetch toma una URL como argumento y devuelve una promesa que se resuelve como un objeto llamado "response", que incluye la respuesta de la solicitud (a parte de decirnos que la conexiion es ok, "pega" la informacion de lo que estamos consultado).

Ya que tenemos el objeto llamado "response", vamos a poder hacer un monton de cosas como acceder a la info, leer el contenido, verificarlo, etc.

*/
document.addEventListener("DOMContentLoaded", function () {
  const pokemonContainer = document.querySelector("#pokemonContainer");
  const button = document.querySelector("#botonPokemon");
  const input = document.querySelector("#inputPokemon");

  button.addEventListener("click", (e) => {
    e.preventDefault();
    traerPokemon(input.value);
  });

  function traerPokemon(nombrePokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        crearPokemon(datos);
      })
      .catch((error) => {
        console.log("Error al obtener el Pokémon:", error);
      });
  }

  function crearPokemon(datos) {
    const pokeImg = document.createElement("img");
    pokeImg.src = datos.sprites.front_default;
    const h2 = document.createElement("h2");
    h2.innerHTML = datos.name;
    const pokeDiv = document.createElement("div");
    pokeDiv.appendChild(pokeImg);
    pokeDiv.appendChild(h2);
    pokemonContainer.appendChild(pokeDiv);
  }
});
