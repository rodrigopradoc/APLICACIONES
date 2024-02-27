// Definición de relaciones de productos para recomendaciones
window.onload = function() {
    mostrarModalUbicacion();
  };
  
  function mostrarModalUbicacion() {
    document.getElementById('locationModal').style.display = 'flex'; // Cambio para usar flexbox
  }
  
  function confirmarUbicacion() {
    var provincia = document.getElementById('provincia').value;
    var municipio = document.getElementById('municipio').value;
    console.log('Provincia seleccionada:', provincia);
    console.log('Municipio seleccionado:', municipio);
    document.getElementById('locationModal').style.display = 'none';
  }
  
  

const relacionProductos = {
    "Arroz": ["Pasta", "Salsa de tomate", "Aceite de oliva"],
    "Aceite de Oliva": ["Vinagre", "Sal", "Hierbas y especias"],
    // Agrega más relaciones aquí si es necesario
  };
  
  // Funciones para manejar la compra y visualización de productos en el carrito
  function comprar(nombre, precio) {
    alert(`Se ha agregado ${nombre} al carrito. Precio: $${precio}`);
    agregarAlCarrito(nombre);
    mostrarCarrito();
  }
  
  function agregarAlCarrito(producto) {
    // Implementación de la función
    const cartList = document.getElementById("cartList");
    const li = document.createElement("li");
    li.textContent = producto;
    cartList.appendChild(li);
  }
  
  function mostrarCarrito() {
    // Implementación de la función
    const cartModal = document.getElementById("cartModal");
    cartModal.style.display = "block";
    mostrarProductoRecomendado();
  }
  
  function mostrarProductoRecomendado() {
    // Implementación de la función
    const productosEnCarrito = Array.from(document.querySelectorAll('#cartList li')).map(li => li.textContent);
    const productos = productosEnCarrito.filter(producto => producto.trim() !== '');
    const recomendados = [];

    // Iterar sobre los productos en el carrito y obtener productos relacionados
    productos.forEach(producto => {
      if (relacionProductos[producto]) {
        recomendados.push(...relacionProductos[producto]);
      }
    });

    // Si hay productos relacionados, mostrar uno aleatorio
    const recommendedProductDiv = document.getElementById('recommendedProduct');
    if (recomendados.length > 0) {
      const randomIndex = Math.floor(Math.random() * recomendados.length);
      const recommendedProduct = recomendados[randomIndex];
      recommendedProductDiv.textContent = recommendedProduct;
    } else {
      recommendedProductDiv.textContent = "No hay recomendaciones en este momento";
    }
  }

  // Asegúrate de que el resto de tu código JavaScript esté debajo de estas funciones
  