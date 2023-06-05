let corredores = ["Roberto", "Andrea", "Jorge", "Ramiro", "Sofia"];

// Jorge adelanta a Roberto
[corredores[0], corredores[2]] = [corredores[2], corredores[0]];

// Ramiro adelanta a Jorge
[corredores[1], corredores[3]] = [corredores[3], corredores[1]];

// Roberto se lesiona y sale de la carrera
corredores.splice(0, 1);

// Andrea baja una posición
let posicionAndrea = corredores.indexOf("Andrea");
[corredores[posicionAndrea], corredores[posicionAndrea + 1]] = [
  corredores[posicionAndrea + 1],
  corredores[posicionAndrea],
];

// Quinto lugar es reemplazado por Jose
corredores[4] = "Jose";

// Imprimir la nueva posición de los corredores
corredores.forEach((corredor, index) => {
  console.log(`${index + 1}° lugar: ${corredor}`);
});

/*
    Jorge adelanta a Roberto, Ramiro adelanta a Jorge y Roberto se lesiona, 
    y sale de la carrera. Andrea baja una posición, Ramiro mantiene su lugar, y el 
    quinto lugar es remplazado por Jose.

    Orden:
        Jorge
        Roberto
        Andrea
        Ramiro
        Sofia

        Ramiro
        Jorge
        Roberto
        Andrea
        Sofia

        Ramiro
        Jorge
        Andrea
        Sofia

        Ramiro
        Jorge
        Sofia
        Andrea
        Jose
*/
