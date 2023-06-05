//Referenciar los elementos de HTML y guardar en variables

//Metodo de seleccion

let numeroContador = document.getElementById("numeroContador");
let botonIncremento = document.getElementById("botonIncrementar");
let botonDecremento = document.getElementById("botonDecrementar");
let botonResetear = document.querySelector("#botonResetear");
let memeRandom = document.querySelector("#memeRandom");

//Declarar una variable con un estado inicial

var valorContador = 0;

//Funciones

function incrementar() {
  valorContador++;
  numeroContador.innerHTML = valorContador;

  if (valorContador === 10) {
    mostrarImagen();
  }
}

function decrementar() {
  valorContador--;
  numeroContador.innerHTML = valorContador;
}

function resetear() {
  valorContador = 0;
  valorContador.innerHTML = valorContador;
}

function mostrarImagen() {
  var coleccionImagenes = [
    "./assets/meme1.png",
    "./assets/meme2.png",
    "./assets/meme3.png",
    "./assets/meme4.png",
  ];

  //Generar un indice aleatorio
  let indexRandom = Math.floor(Math.random() * coleccionImagenes.length);

  //Obtener la URL o direccion de la imagen
  let urlAleatoria = coleccionImagenes[indexRandom];

  //Agrego la URL al atributo src que deje vacio en el HTML
  memeRandom.src = urlAleatoria;
  //Cambio la propiedad de vizualización (display) a un block
  memeRandom.style.display = "block";
}

//Eventos en los botones

botonIncremento.addEventListener("click", incrementar);
botonDecremento.addEventListener("click", decrementar);
botonResetear.addEventListener("click", resetear);
