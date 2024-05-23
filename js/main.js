// creacion de la clase producto
class Producto {
    constructor(nombre, precio, cantidad) {
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = cantidad;
    }
  }
  
  let inventario = [];
  
  //creacion de la funcion para agregar el producto al inventario
  function agregarProducto() {
    let precio;
    let nombre = prompt("Ingrese el nombre del producto:");
    do{
        precio = parseFloat(prompt("Ingrese el precio del producto:"));
    }
    while(isNaN(precio) || precio === "" || precio === null){
    };

    let cantidad = parseInt(prompt("Ingrese la cantidad del producto:"));
    let producto = new Producto(nombre, precio, cantidad);
    inventario.push(producto);
    console.log("Producto agregado al inventario:");
    console.log(producto);
  }
  
  //creacion de la funcion para actualizar la cantidad del producto
  function actualizarCantidad() {
    let nombre = prompt("Ingrese el nombre del producto a actualizar:");
    let nuevaCantidad = parseInt(prompt("Ingrese la nueva cantidad del producto:"));
    let producto = inventario.find(item => item.nombre === nombre);
    if (producto) {
      producto.cantidad = nuevaCantidad;
      alert("Stock actualizado para el producto: "+nombre);
    } else {
      alert("El producto " + nombre + " no se encontró en el inventario.");
    }
  }

  // creacion de la funcion para actualizar el precio del producto
  function actualizarPrecio() {
    let nombre = prompt("Ingrese el nombre del producto a actualizar:");
    let nuevoPrecio = parseFloat(prompt("Ingrese el nuevo precio del producto:"));
    let producto = inventario.find(item => item.nombre === nombre);
    if (producto) {
      producto.precio = nuevoPrecio;
      alert("Precio actualizado para el producto: "+nombre);
    } else {
      alert("El producto " + nombre + " no se encontró en el inventario.");
    }
  }
  
  //creacion del menu
  function mostrarMenu() {
    let opcion;
    do {
      opcion = prompt("Seleccione una opción: \n1. Agregar producto\n2. Actualizar cantidad\n3. Actualizar precio \n4. Salir");
      switch (opcion) {
        case "1":
          agregarProducto();
          break;
        case "2":
          actualizarCantidad();
          break;
        case "3":
          actualizarPrecio();
          break;
        case "4":
          mostrarProductos();
          break;
      }
    } while (opcion !== "4");
  }

  // cree una funcion para mostrar los productos cuando finalizamos el programa, a diferencia de lo que muestra en consola cuando agrego un producto, ahora muestra el producto despues de haber actualizado el stock y el precio
  function mostrarProductos() {
    console.log("Productos en el inventario:");
    inventario.forEach(producto => {
      console.log("Nombre: " +producto.nombre+" Precio: $"+producto.precio+  " Cantidad: "+producto.cantidad);
    });
  }

  mostrarMenu();
