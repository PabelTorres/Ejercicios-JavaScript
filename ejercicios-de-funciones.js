function calculoDeVelocidad(distancia, tiempo) {
  operacion = distancia / tiempo;
  console.log("La velocidad del objeto es de " + operacion + " m/s");
}

calculoDeVelocidad((distancia = 100), (tiempo = 50));

function saludo(_nombreSaludo) {
  return console.log(
    "Hola " + nombre + " que bueno que usas nuestra aplicación"
  );
}

saludo("Gaby");
saludo("Felipe");

prompt("Introduce tu nombre");
