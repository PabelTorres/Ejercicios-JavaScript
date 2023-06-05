/*

Control de FLujo


Cuando hablamos de flujo de control hablamos del orden en que se ejecutan las instrucciones de un programa, siendo estas instrucciones las que determinan o controlan dicho flujo.

En un programa, a menos que el flujo de control se vea modificado por una instruccion de control (por ejemplo una condicional), el flujo de control se mantiene en el mismo orden en el que se escriben las instrucciones (de arriba a abajo y de izquierda a derecha).




Condicionales: 

Son estructuras o condiciones que nos permiten modificae el flujo natural de ejecusion nuestro programa. 
Son sentencias especificas que nos ayudaran a decidir si una condicion se cumple o no (verdadero o falso), 
a partir de esta respuesta se ejecuta una o varias instrucciones.

Ejemplo:

Tengo limpia mi playera de la suerte?  //pregunta o instruccion que detona la condicion
    true: Entonces voy a la fiesta //respuesta con su posible instruccion
    false: Entonces me quedo a mimir //respuesta con su posible instruccion

*/

/*Condicional if (si)

If nos sirve para validar si una condición se cumple o no. Si se cumple, entonces se ejecuta el bloque de código que esté dentro del if. Si no se cumple, entonces no se ejecuta ningún bloque de código.


Estructura basica de un if


if (condicion){
    //Ejecuto este bloque de codigo
}


*/

//Felipe tiene 17 anios, y quiere ir a una fiesta. Dicha fiesta solo es para personas adultas (mayores de 18 anios). Ayuda a Felipe decidir si puede ir a la fiesta o no.

//Evaluamos solo una expresion (si Felipe tiene menos de 18 anios), en caso de que sea verdadero, mostraremos el mensaje dentro del bloque. Si es falso, no mostrara nada porque nuestro programa no esta preparado para esa situacion (incertidumbre).

/*

let edadFelipe = prompt("Cual es tu edad?");
let edadPermitida = 18;

if (edadFelipe < edadPermitida) {
  console.log("Lo siento Felipe, no puedes ir a la fiesta");
}

*/

/*

Else (de otro modo - si no)

Utilizamos esta instruccion o sentencia para especificar que un bloque de codigo se ejecutara si la condicion es verdadera, y otro bloque de codigo se ejecuta en caso de que la condicion sea falsa.



Estructura basica del Else


if (condicion) {
    //Este bloque se ejecuta si la condicion es verdadera
} 

else 

{
    //Este bloque se ejecuta si la condicion es falsa
}




let edadAxel = prompt("Ingresa tu edad");
let edadPaFiesta = 18;

if (edadAxel < edadPaFiesta) {
  console.log("Lo siento no puedes ir a la fiesta");
} else {
  console.log("Felicidades sí puedes ir a la fiesta!");
}

/*

Else If (ademas si / si no entonces)

Esta condicional nos ayuda a ejecutar una nueva condicion en caso de que la primera sea falsa. Podemos usar todas las estructuras else if que sean necesarias, terminando con una estructura else.


Estructura basica del else if


if (condicion 1) {
    //bloque de codigo que se ejecuta si la condicion 1 es verdadera
} else if (condicion 2){
    //bloque de codigo que se ejecuta si la condicion 1 es falsa y la condicion 2 es verdadera
} else if (condicion 3){
    //bloque de codigo se ejecuta si la condicon 1 es falsa, y si la condicon 2 tambien es falsa
}else{
    //bloque de codigo que se ejecuta si la condicion 1, 2 y 3 son falsas
}



edadDeDavid = 19;
edadPermitidaDelAntro = 18;
dineroDeDavid = 20;
coverDelAntro = 150;

if (edadDeDavid >= edadPermitidaDelAntro) {
  console.log("Muy bien, puedes ir al antro");
} else if (dineroDeDavid >= coverDelAntro) {
  console.log("Sí puedes entrar al antro");
} else {
  console.log("Lo siento no tienes dinerito suficiente para pagar el cover");
}


*/
/*
let hora = prompt("Ingrese la hora actual");

if (hora < 12) {
  console.log("Buenos días!");
} else if (hora <= 19) {
  console.log("Buenas tardes!");
} else {
  console.log("Buenas noches");
}
*/
/*Switch

Esta condicional nos permite hacer multiples operaciones y tomar decisiones en funcion de distintos estados de las variables. 
Evalua una expresion comparando el valor de un dato o variable, y ejecutando la instruccion asociada a ese caso.


 - case: Evalua el caso o condicion asociado que dispara un bloque de codigo
 - break: Termina el proceso sin que tengamos que pasar por todas las iteraciones o casos.
 - default: Termina el proceso en caso de que ninguna de las evaluaciones sea la correcta (similar al else)



switch (expresion o condicion){
    case valor1:
        //Codigo que se ejecuta si la condicion es igual a valor1
    break;

    case valor2:
        //Codigo que se ejecuta si la condicion es igual a valor2
    break;

    case valor3:
        //Codigo que se ejecuta si la condicion es igual a valor3
    break;

    case valor4:
        //Codigo que se ejecuta si la condicion es igual a valor4
    break;

    case valor5:
        //Codigo que se ejecuta si la condicion es igual a valor5
    break;

    default:
        //Ingresaste un piso incorrecto (un bloque de codigo que se ejecuta si no se cumple con ninguna de las condiciones anteriores)
}

*/
/*
let pisoDeDestino = prompt("Ingresa el número de piso del 1 al 5");
switch (pisoDeDestino) {
  case "1":
    console.log("Vamos al piso 1");
    break;
  case "2":
    console.log("Vamos al piso 2");
    break;
  case "3":
    console.log("Vamos al piso 3");
    break;
  case "4":
    console.log("Vamos al piso 4");
    break;
  case "5":
    console.log("Vamos al piso 5");
    break;
  default:
    console.log("Ingresaste un piso invalido");
}
*/
let tuHoroscopo = prompt("Ingresa tu horóscopo");
switch (tuHoroscopo) {
  case "aries":
    document.write(
      "Otra semana, ¿otra serie de situaciones complicadas a las que enfrentarte? ¿Otra carga de pesadas responsabilidades? Si es eso lo que te esperas, ¡tienes que reajustar tu modo de pensar! Aunque sí que aparecerán unos cuantos escenarios muy molestos, eres experta a la hora de superar obstáculos. Y sin deberes de los que ocuparte, la vida sería aburrida. El cosmos está indicando que, no sólo conseguirás sobrellevar cualquier dificultad que se te presente sino que la experiencia te enriquecerá de una manera que te satisfará y te aportará una meta que hará que te sientas muy bien."
    );
    break;
  case "tauro":
    document.write(
      "¡ÚLTIMO DÍA! ¡LIQUIDACIÓN FINAL! NO TE PIERDAS EL CHOLLO DEL SIGLO! Aunque no sepas qué estoy intentando venderte, no puedes evitar emocionarte. Nadie puede resistirse a eso. Pero antes de dejarte llevar por esas promesas desmesuradas, pregúntate si cualquiera de esas oportunidades te benefician realmente. No siempre podemos estar seguros de que lo que se nos ofrece vaya a ser bueno para nosotros. Pero si llevas puesta tu gorra de discernir, verás que detrás de los titulares hay una propuesta que ofrece exactamente lo que necesitas."
    );
    break;
  case "geminis":
    document.write(
      "Si te enfrentas a algo muy complicado y da la casualidad de que no tienes una varita mágica, ¿cómo puedes hacerlo posible? Empieza por decirte a ti misma que no es imposible hacerlo. Si crees que algo no se puede hacer, es muy probable que no te equivoques. Así que tienes que ser creativa. Imagínate una manera, por muy inverosímil que te parezca, en la que pueda suceder. En cuanto la hayas visto, la idea pasa de ser imposible a ser improbable. Pruébalo. Cuando Mercurio, tu regente, abandone su sombra, puede que te sorprendas de lo que puedes conseguir."
    );
    break;
  case "cancer":
    document.write(
      "Tenemos que comprender qué es lo que nos motiva. Algunas personas hacen lo que les dice el corazón y se dejan llevar por la corriente sin pararse a pensar qué hay detrás de sus impulsos. Algunas veces esto da igual. Otras, es de suma importancia. A medida que aumenta lo que está en juego, tenemos que poder explicar por qué queremos lo que queremos y por qué hacemos lo que hacemos. Teniendo todo ese poder al alcance de la mano, es importante que ser conscientes. Si hoy abordas una situación desde un punto de vista estratégico, podrás tomar una decisión que podría transformar tu vida, de todas las maneras posibles."
    );
    break;
  case "leo":
    document.write(
      "Un principio fundamental de la astrología es asegurarse de que la gente se entere de que su vida no está predestinada. Todos tenemos la posibilidad de cambiar nuestro destino. Los planetas influyen en nuestra vida, pero lo que crea nuestro presente y nuestro futuro es nuestra respuesta individual a sus efectos y a lo que la vida nos depare. Por eso, cuando digo que hoy te espera algo importante, simplemente tienes que asegurarte de no dejar que cualquier situación aburrida o deprimente te distraiga. Si tienes fe en ti misma y en tus habilidades, brillarás."
    );
    break;
  case "virgo":
    document.write(
      "Los navegadores por satélite y Google Maps forman parte de nuestra vida. Atrás quedaron los días en los que teníamos que memorizar antes de salir la ruta que debíamos tomar. Ahora simplemente seguimos una voz autómata que nos dirige a nuestro destino. Pero cuando se trata de elegir los caminos que tomamos a lo largo de nuestra vida, tenemos que acceder a nuestro propio sentido de la orientación. Hoy avanza con normalidad. Pero presta atención hacia dónde te diriges y a lo que ves. Si no eres consciente de por qué haces lo que haces, se te podría pasar por alto un detalle que podría cambiar muchísimo las cosas. "
    );
    break;
  case "libra":
    document.write(
      "Si piensas en los próximos días, ¿sabes lo que te espera? Si la respuesta es sí, ¿por qué te molestas en leer esto? Y, si la respuesta es no, ¿hasta qué punto estás segura de ello? Parece que tienes una idea bastante clara de lo que se te viene encima pero quieres oír una confirmación tranquilizadora (o una indicación de que las cosas no van a ser tan complicadas como crees). Pero yo no tengo poder para cambiar tu futuro. La única persona que puede hacerlo eres tú. Si esperas lo mejor, eso es lo que obtendrás. Sé optimista y tendrás garantizadas cosas buenas."
    );
    break;
  case "escorpio":
    document.write(
      "Nuestro corazón es generoso al nacer. Cuando llegamos a esta bola de roca giratoria tenemos elevadas expectativas y aspiraciones positivas. Queremos lo mejor, no sólo para nosotros, sino para todos los demás. No necesitamos ser egocéntricos ni avariciosos, al fin y al cabo la naturaleza es abundante. La triste verdad es que es a través de malos ejemplos y experiencias difíciles cómo aprendemos a anteponer nuestras necesidades. Ahora tienes la oportunidad de ser muy sabia, generosa y buena persona. Si aprovechas esa oportunidad, también serás muy feliz. Cuanto más des, más recibirás."
    );
    break;
  case "sagitario":
    document.write(
      "Imagínate que eres una equilibrista. Tienes ante ti una situación delicada que te exige una cautela y mucho equilibrio. Podrías pasar fácilmente de un extremo a otro con mucho dramatismo. Por eso deberías considerar la posibilidad de llegar a un acuerdo. Las opiniones arraigadas hacen que nos sintamos cómodos. Si creemos en ellas de todo corazón, nos dan seguridad. Sin embargo no siempre ayudan gran cosa en nuestras amistades y relaciones. Caminar valientemente por la cuerda floja de la sinceridad te ayudará a ver hoy las cosas desde el punto de vista de otra persona."
    );
    break;
  case "capricornio":
    document.write(
      "¿De qué sirve el optimismo? No es que pueda cambiar un resultado o incluso influir en él. Seguro que algo o ocurre, o no lo hará, ¿verdad? Y si no sucede, seguro que haber esperado lo mejor sólo hará que aumenten el dolor y la decepción, ¿no? Aunque intelectualmente esto pueda parecer cierto, nuestras expectativas afectan al resultado. Afectan a la forma en que recibimos y procesamos la información, lo que significa que respondemos de forma diferente a las oportunidades y los retos. Un cambio de actitud tendrá hoy un impacto significativo en tu vida."
    );
    break;
  case "acuario":
    document.write(
      "Cierta situación es cada vez más absurda. Así que ha llegado el momento de que actúes con decisión y marques dónde están los límites. Necesitas hacerte valer y dejar claros tus sentimientos. Por suerte el cosmos te ofrece la oportunidad de resolver un malentendido sin necesidad de conflictos. Para prepararte, sólo tienes que confiar en el trabajo que has realizado: ha creado una base sólida que resistirá fácilmente una pequeña perturbación. Tras un momento inicial de drama y una vez que el polvo se haya asentado, llegarás a un acuerdo sobre el camino a seguir."
    );
    break;
  case "piscis":
    document.write(
      "La mayoría de nosotros tenemos la suerte de vivir en lugares donde la esperanza media de vida es mayor que antes. Esto se debe a los avances de la medicina moderna, la mejora de las condiciones sanitarias y los conocimientos sobre nutrición. Sin embargo, aunque sepamos por qué vivimos más, sigue siendo un milagro. El mundo está lleno de peligros. En la época de nuestros antepasados no había coches que les adelantasen a gran velocidad. Pero nosotros afrontamos estos riesgos sin siquiera pensar en ello. Si en estos momentos tienes miedo de algo, no tienes por qué tenerlo. Todo va a salir bien."
    );
    break;
  default:
    alert("Ingresaste un signo invalido");
}
