function resolverEcuacionCuadratica(a, b, c) {
  const discriminante = b * b - 4 * a * c;

  if (discriminante >= 0) {
    const x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminante)) / (2 * a);

    console.log("Las soluciones son:");
    console.log("x1 = " + x1);
    console.log("x2 = " + x2);
  } else {
    console.log("La ecuación no tiene soluciones reales.");
  }
}

// Ejemplo de uso:
resolverEcuacionCuadratica(2, -5, 2);
