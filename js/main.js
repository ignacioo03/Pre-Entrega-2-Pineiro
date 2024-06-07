function agregarProducto(event) {
  event.preventDefault(); // Para evitar que no se resetee lo ingresado en la Lista

  var nuevoProductoInput = document.getElementById("nuevoProducto");
  var nuevoPrecioInput = document.getElementById("nuevoPrecio");
  var nuevoStockInput = document.getElementById("nuevoStock");
  var mensajeError = document.getElementById("mensajeError");

  var nuevoProductoValor = nuevoProductoInput.value.trim();
  var nuevoPrecioValor = nuevoPrecioInput.value.trim();
  var nuevoStockValor = nuevoStockInput.value.trim();

  if (nuevoProductoValor !== "" && nuevoPrecioValor !== "" && nuevoStockValor !== "") {
      var lista = document.getElementById("lista");
      var nuevoItemLista = document.createElement("li");

      // Crear un texto con el nombre, precio y stock del Producto
      nuevoItemLista.textContent = nuevoProductoValor + " -   Precio: $" + nuevoPrecioValor + ",   Stock: " + nuevoStockValor;

      lista.appendChild(nuevoItemLista); // Agregar el nuevo Producto a la lista

      // Obtener los Productos guardados en el LocalStorage
      var ProductosGuardados = JSON.parse(localStorage.getItem("Productos")) || []; 
      ProductosGuardados.push({ nombre: nuevoProductoValor, precio: nuevoPrecioValor, stock: nuevoStockValor });
      localStorage.setItem("Productos", JSON.stringify(ProductosGuardados));

      // Reseteo de los inputs
      nuevoProductoInput.value = "";
      nuevoPrecioInput.value = "";
      nuevoStockInput.value = "";
      nuevoProductoInput.focus();

      // Ocultar el mensaje de error
      mensajeError.style.display = "none";
  } else {
      // Mostrar el mensaje de error
      mensajeError.textContent = "Por favor, complete todos los campos.";
      mensajeError.style.display = "block";
  }
}

// Creacion de la lista
var lista = document.createElement("ul");
lista.id = "lista";

// Creacion de el formulario
var formulario = document.createElement("form");
formulario.id = "formulario";
formulario.addEventListener("submit", agregarProducto); // Asignar la función agregarProducto al evento submit del formulario

// Creacion de input y label para agregar el nombre del producto
var inputNuevoProducto = document.createElement("input");
inputNuevoProducto.type = "text";
inputNuevoProducto.id = "nuevoProducto";
inputNuevoProducto.name = "nuevoProducto";
var labelNuevoProducto = document.createElement("label");
labelNuevoProducto.textContent = "Nuevo Producto: ";
labelNuevoProducto.setAttribute("for", "nuevoProducto");
formulario.appendChild(labelNuevoProducto);
formulario.appendChild(inputNuevoProducto);

//Creacion de input y label para agregar un Precio
var inputNuevoPrecio = document.createElement("input");
inputNuevoPrecio.type = "text";
inputNuevoPrecio.id = "nuevoPrecio";
inputNuevoPrecio.name = "nuevoPrecio";
var labelNuevoPrecio = document.createElement("label");
labelNuevoPrecio.textContent = " Precio: ";
labelNuevoPrecio.setAttribute("for", "nuevoPrecio");
formulario.appendChild(labelNuevoPrecio);
formulario.appendChild(inputNuevoPrecio);

//Creacion de input y label para agregar el stock del producto
var inputNuevoStock = document.createElement("input");
inputNuevoStock.type = "text";
inputNuevoStock.id = "nuevoStock";
inputNuevoStock.name = "nuevoStock";
var labelNuevoStock = document.createElement("label");
labelNuevoStock.textContent = " Stock: ";
labelNuevoStock.setAttribute("for", "nuevoStock");
formulario.appendChild(labelNuevoStock);
formulario.appendChild(inputNuevoStock);

// Creacion del boton 
var botonAgregar = document.createElement("button");
botonAgregar.type = "submit";
botonAgregar.textContent = "Agregar";
formulario.appendChild(botonAgregar);

// Creacion del mensaje de error
var mensajeError = document.createElement("p");
mensajeError.id = "mensajeError";
mensajeError.style.color = "red";
mensajeError.style.display = "none";
document.body.appendChild(mensajeError);

// Agrego el formulario y por debajo la lista al Body
document.body.appendChild(formulario);
document.body.appendChild(lista);