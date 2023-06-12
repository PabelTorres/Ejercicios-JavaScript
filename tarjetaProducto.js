// 1.- Obtener los elementos del HTML para guardarlos en variables

// Almacena el lugar de destino de mi tarjeta en una constante
const container = document.getElementById("product-container");
const botonAgregarProducto = document.getElementById("agregarProducto");

// Almacenar elementos del formulario en variables de JS
let nombreProducto = document.getElementById("nombreProducto");
let descripcionProducto = document.getElementById("descripcionProducto");
let imagenProducto = document.getElementById("imagenProducto");

console.log(nombreProducto.value);

function agregarProducto() {
  // Quiero que cada tarjeta tenga su propio div o contenedor
  const productCard = document.createElement("div");
  
  // 2. Creo el elemento
  productCard.innerHTML = `
    <img src="${imagenProducto.value}" alt="Producto">
    <h3>${nombreProducto.value}</h3>
    <p>Descripción: ${descripcionProducto.value}</p>
    <p>Precio: $9.99</p>
    <button class="btn">Agregar al carrito</button>
  `;

  // Agregar esa tarjeta de producto al container especificado (este es el hijo). Inserto el elemento.
  container.appendChild(productCard);
}

// Creamos el evento
botonAgregarProducto.addEventListener("click", agregarProducto);
