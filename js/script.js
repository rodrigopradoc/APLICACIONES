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
  
const productosCocina = [
  { nombre: "Arroz", precio: 24.90, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/27552451-512-512/641425.jpg" },
  { nombre: "Aceite de oliva", precio: 24.90, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/553594-450-450/20046703.jpg?v=637426557178300000" },
  { nombre: "Vinagre", precio: 4.90, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/550635-450-450/1250.jpg?v=637425700193800000" },
  { nombre: "Sal", precio: 2.10, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/197525-450-450/20130447.jpg?v=636621785258170000" },
  { nombre: "Pimienta", precio: 9.90, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/553759-450-450/20009787.jpg?v=637426563033670000" },
  { nombre: "Ajo", precio: 10.20, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/412189-1000-1000/6453.jpg?v=637364996499900000" },
  { nombre: "Cebolla", precio: 2.90, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/518589-512-512/844123.jpg" },
  { nombre: "Pasta", precio: 5.70, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/23715521-512-512/20163054.jpg" },
  { nombre: "Salsa de tomate", precio: 3.79, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/18082705-450-450/20284370.jpg?v=637992355891670000" },
  { nombre: "Harina", precio: 5.89, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/1242216-512-512/22003.jpg" },
  { nombre: "Azúcar", precio: 20.90, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/414996-512-512/20198553.jpg" },
  { nombre: "Caldo de gallina", precio: 2.20, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/2900907-512-512/138325.jpg" },
  { nombre: "Salsa de soja", precio: 3.60, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/419097-512-512/20073088.jpg" },
  { nombre: "Mostaza", precio: 8.60, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/16382244-450-450/20257949.jpg?v=637970167905970000" },
  { nombre: "Miel", precio: 29.90, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/1549653-512-512/992878.jpg" },
  { nombre: "Harina de maíz", precio: 8.50, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/25710950-450-450/20073368.jpg?v=638122176248600000" },
  { nombre: "Levadura", precio: 6.00, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/495129-450-450/20199501.jpg?v=637402827157530000" },
  { nombre: "Vinagre balsámico", precio: 9.89, imagen: "arhttps://plazavea.vteximg.com.br/arquivos/ids/28647007-450-450/101244.jpg?v=638406432348300000roz" },
];

const productosMeriendas = [
  { nombre: "Galletas", precio: 5.30, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/3641055-512-512/243940.jpg" },
  { nombre: "Papas fritas", precio: 4.00, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/28533714-512-512/20282179.jpg" },
  { nombre: "Frutos secos", precio: 10.90, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/2273455-450-450/20160317.jpg?v=637651025469430000" },
  { nombre: "Chocolate", precio: 47.50, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/561651-450-450/20185592.jpg?v=637427439119000000" },
  { nombre: "Pretzels", precio: 12.40, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/564092-220-220/20207086.jpg?v=637429907176700000" },
  { nombre: "Barritas de cereal", precio: 5.90, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/507828-450-450/20112706.jpg?v=637412435974230000" },
  { nombre: "Palomitas de maíz", precio: 3.60, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/27552448-512-512/998185.jpg" },
  { nombre: "Yogur", precio: 6.70, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/22976332-450-450/20326320.jpg?v=638059748010770000" },
  { nombre: "Frutas frescas", precio: 8.90, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/506374-450-450/20201861.jpg?v=637411740996130000" }
];

const productosDesayuno = [
  { nombre: "Pan", precio: 8.29, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/405383-512-512/20043755.jpg" },
  { nombre: "Leche", precio: 5.80, imagen: "imahttps://plazavea.vteximg.com.br/arquivos/ids/24844118-450-450/358217.jpg?v=638090212746770000gen" },
  { nombre: "Huevos", precio: 10.99, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/8558582-1000-1000/2294.jpg?v=637835010462900000" },
  { nombre: "Mantequilla", precio: 21.50, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/16382256-450-450/20258249.jpg?v=637970168669830000" },
  { nombre: "Mermelada", precio: 13.50, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/495096-450-450/20198345.jpg?v=637402825455830000" },
  { nombre: "Cereales", precio: 16.50, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/27427449-512-512/20093492.jpg" },
  { nombre: "Café", precio: 11.20, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/550663-450-450/468.jpg?v=637425701164500000" },
  { nombre: "Té", precio: 4.99, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/20341177-512-512/4264.jpg" },
  { nombre: "Queso", precio: 13.22, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/8674129-450-450/20206657.jpg?v=637836684531300000" },
  { nombre: "Jamonada", precio: 6.20, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/10034216-450-450/20066108.jpg?v=637859138786900000" }
];

const licores = [
  { nombre: "Whisky", precio: 149.90, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/1087657-450-450/164924.jpg?v=637503823500970000" },
  { nombre: "Vodka", precio: 23.90, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/529766-450-450/408462.jpg?v=637419662193630000" },
  { nombre: "28.90", precio: 1000, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/646684-450-450/1040164002.jpg?v=637443545203600000" },
  { nombre: "Ginebra", precio: 99.90, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/4220548-512-512/1998.jpg" },
  { nombre: "Tequila", precio: 69.90, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/533706-512-512/1207249002.jpg" },
  { nombre: "Triple Sec", precio: 62.50, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/413103-450-450/1063854004.jpg?v=637365821872500000" },
  { nombre: "Amaretto", precio: 154.90, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/530418-512-512/20175782.jpg" },
  { nombre: "Cointreau", precio: 149.90, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/15956062-450-450/138598.jpg?v=637964069114870000" },
  { nombre: "Sambuca", precio: 115.90, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/530422-450-450/20175771.jpg?v=637419684401800000" },
  { nombre: "Baileys", precio: 69.90, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/21216687-450-450/166799.jpg?v=638034912701370000" },
  { nombre: "Curaçao", precio: 60.90, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/493464-450-450/70775.jpg?v=637401105610070000" },
  { nombre: "Kahlúa", precio: 87.90, imagen: "https://wongfood.vtexassets.com/arquivos/ids/349881/frontal-2426.jpg?v=637188768402100000" },
  { nombre: "Campari", precio: 79.90, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/27461617-450-450/199773.jpg?v=638292391810470000" },
  { nombre: "Anís", precio: 37.50, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/324508-220-220/1622912001.jpg?v=637252457117900000" },
  { nombre: "Pisco", precio: 30.90, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/525852-512-512/146845.jpg" },
  { nombre: "Jägermeister", precio: 74.90, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/529731-450-450/960294.jpg?v=637419660972200000" },
  { nombre: "Frangelico", precio: 85.90, imagen: "https://oechsle.vteximg.com.br/arquivos/ids/7064508-1500-1500/image-a49369837bf04aa482d730547ffda1e4.jpg?v=637795160461300000" }
];

const ingredientesTragos = [
  { nombre: "Jarabe de goma", precio: 12.90, imagen: "ihttps://plazavea.vteximg.com.br/arquivos/ids/529850-512-512/20087984.jpgmagen" },
  { nombre: "Jugo de limón", precio: 10.90, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/520230-450-450/20206327.jpg?v=637417839037800000" },
  { nombre: "Jugo de naranja", precio: 10.89, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/529700-450-450/20117841.jpg?v=637419659840200000" },
  { nombre: "Zumo de arándano", precio: 18.20, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/2346885-450-450/20018266.jpg?v=637663675270400000" },
  { nombre: "Zumo de piña", precio: 4.99, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/20557303-512-512/20237282.jpg" },
  { nombre: "Zumo de mango", precio: 4.19, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/2486703-450-450/20236583.jpg?v=637683450829830000" },
  { nombre: "Zumo de frutas tropicales", precio: 11.59, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/646459-450-450/20130985.jpg?v=637443532867030000" },
  { nombre: "Sirope de frutas", precio: 14.10, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/414866-450-450/914838.jpg?v=637370971251900000" },
  { nombre: "Sirope de chocolate", precio: 20.90, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/412250-450-450/150101.jpg?v=637365000143800000" },
  { nombre: "Sirope de vainilla", precio: 96.00, imagen: "https://www.lacuisine.pe/lgc/wp-content/uploads/2020/07/Vainilla.jpg" },
  { nombre: "Clara de huevo pasteurizada", precio: 18.64, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/27215667-512-512/20356793.jpg" },
  { nombre: "Hielo en cubitos", precio: 4.99, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/4469426-1000-1000/20073247.jpg?v=637757158148930000" },
  { nombre: "Cerezas al marrasquino", precio: 14.90, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/561372-450-450/20151328.jpg?v=637427429256930000" },
  { nombre: "Angostura", precio: 17.90, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/493439-450-450/59238.jpg?v=637401104745970000" },
];

const productosCarnicos = [
  { nombre: "Carne de res", precio: 27.90, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/27363516-512-512/20168635.jpg" },
  { nombre: "Carne de cerdo", precio: 28.90, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/27363494-450-450/20123116.jpg?v=638276835089230000" },
  { nombre: "Carne de pollo", precio: 13.90, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/25707964-512-512/20193757.jpg" },
  { nombre: "Carne de pavo", precio: 16.90, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/28331814-450-450/20170185.jpg?v=638356511293000000" },
  { nombre: "Embutidos", precio: 15.90, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/2446126-450-450/20041551.jpg?v=637677549876400000" },
  { nombre: "Fiambres", precio: 17.90, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/1256437-512-512/914059-2.jpg" },
  { nombre: "Salchichas", precio: 12.99, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/2446128-512-512/20110520.jpg" },
  { nombre: "Tocino", precio: 7.90, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/2188310-512-512/20193567.jpg" },
  { nombre: "Patés", precio: 3.90, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/646155-450-450/5616.jpg?v=637443513469200000" },
  { nombre: "Pescados y mariscos", precio: 5.49, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/19995923-450-450/287623.jpg?v=638017641768330000" },
  { nombre: "Productos enlatados", precio: 6.10, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/19913605-450-450/20314529.jpg?v=638016540225400000" }
];

const todosLosProductos = [
  ...productosCocina,
  ...productosMeriendas,
  ...productosDesayuno,
  ...licores,
  ...ingredientesTragos,
  ...productosCarnicos
];

  
const relaciones = {
  "productosCocina": productosCocina,
  "productosMeriendas": productosMeriendas,
  "productosDesayuno": productosDesayuno,
  "licores": licores,
  "ingredientesTragos": ingredientesTragos,
  "productosCarnicos": productosCarnicos,
};

function productoRelacionado(productos) {
  const categorias_compradas = [];
  for (let producto of productos) {
      for (let categoria in relaciones) {
          if (relaciones[categoria].find(p => p.nombre === producto)) {
              categorias_compradas.push(categoria);
          }
      }
  }

  const productos_recomendados = [];
  for (let categoria of categorias_compradas) {
      const randomIndex = Math.floor(Math.random() * relaciones[categoria].length);
      productos_recomendados.push(relaciones[categoria][randomIndex].nombre);
  }

  return productos_recomendados;
}


// Función para mostrar los productos de una página específica
function mostrarProductos(pagina) {
  const productosPorPagina = 12; // Cambia este valor según tus necesidades
  const inicio = (pagina - 1) * productosPorPagina;
  const fin = inicio + productosPorPagina;
  const productosPagina = todosLosProductos.slice(inicio, fin);

  const row = document.getElementById('productos-row');
  row.innerHTML = ''; // Limpiar el contenedor

  productosPagina.forEach(producto => {
    const productoHTML = `
    <div class="col-6 col-sm-6 col-md-6 mb-3 col-lg-3">
      <div class="product-item">
        <a href="shop-single.html" class="product-img">
          <img src="${producto.imagen}" alt="${producto.nombre}" class="img-fluid">
        </a>
        <h3 class="title">${producto.nombre}</h3>
        <div class="price">
          <span>Precio: S/${producto.precio.toFixed(2)}</span>
        </div>
        <label>
          <input type="checkbox" name="producto" value="${producto.nombre}" data-precio="10"> Comprar
        </label>
      </div>
    </div>
    `;
    row.innerHTML += productoHTML;
  });

  // Llamar a la función para agregar event listeners a los checkboxes después de cargar los productos
  agregarEventListenersCheckboxes();
}


// Función para mostrar los controles de paginación
function mostrarPaginacion() {
  const numPaginas = Math.ceil(todosLosProductos.length / 12); // 12 productos por página
  const paginacion = document.getElementById('paginacion');
  paginacion.innerHTML = '';

  for (let i = 1; i <= numPaginas; i++) {
    const listItem = document.createElement('li');
    listItem.classList.add('page-item');
    
    const button = document.createElement('button');
    button.textContent = i;
    button.classList.add('page-link');
    button.addEventListener('click', () => mostrarProductos(i));
    
    listItem.appendChild(button);
    paginacion.appendChild(listItem);
  }
}


// Mostrar la primera página al cargar la página
mostrarProductos(1);
// Mostrar controles de paginación
mostrarPaginacion();

// Mostrar la primera página al cargar la página
mostrarProductos(1);
// Mostrar controles de paginación
mostrarPaginacion();

/* const relacionProductos = {
  "Arroz": ["Pasta", "Salsa de tomate", "Aceite de oliva"],
  "Aceite de Oliva": ["Vinagre", "Sal", "Hierbas y especias"],
  // Agrega más relaciones aquí si es necesario
}; */
  
// Funciones para manejar la compra y visualización de productos en el carrito
function comprar(nombre, precio) {
  alert(`Se ha agregado ${nombre} al carrito. Precio: $${precio}`);
  agregarAlCarrito(nombre);
  mostrarCarrito();
}
  
function agregarAlCarrito(producto) {
  const cartList = document.getElementById("cartList");
  let item = document.querySelector(`#cartList li[data-producto="${producto}"]`);
  if (!item) {
    item = document.createElement("li");
    item.textContent = producto;
    item.setAttribute('data-producto', producto);
    cartList.appendChild(item);
  }
}

function cerrarCarrito() {
  const cartModal = document.getElementById("cartModal");
  cartModal.style.display = "none";
}
  
  
function mostrarCarrito() {
  const cartModal = document.getElementById("cartModal");
  cartModal.style.display = "block";
  actualizarCheckboxes();
  mostrarProductoRecomendado();
}

function actualizarCheckboxes() {
  const productosEnCarrito = Array.from(document.querySelectorAll('#cartList li')).map(li => li.textContent.trim());
  document.querySelectorAll('input[type="checkbox"][name="producto"]').forEach(checkbox => {
    checkbox.checked = productosEnCarrito.includes(checkbox.value);
  });
}

function mostrarProductoRecomendado() {
  const productosEnCarrito = Array.from(document.querySelectorAll('#cartList li')).map(li => li.getAttribute('data-producto'));
  const recomendados = productoRelacionado(productosEnCarrito);

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
function agregarEventListenersCheckboxes() {
  document.querySelectorAll('input[type="checkbox"][name="producto"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      manejarSeleccionProducto(this.value, this.dataset.precio, this.checked);
    });
  });
}

function manejarSeleccionProducto(nombre, precio, estaSeleccionado) {
  if (estaSeleccionado) {
    agregarAlCarrito(nombre);
  } else {
    quitarDelCarrito(nombre);
  }
  mostrarCarrito();
}
  
function quitarDelCarrito(producto) {
  // Encuentra y elimina el producto de la lista del carrito
  let item = document.querySelector(`#cartList li[data-producto="${producto}"]`);
  if (item) {
    document.getElementById("cartList").removeChild(item);
  }
}
  