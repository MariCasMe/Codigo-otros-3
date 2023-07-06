
// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

const elementoLista = document.getElementById("lista-de-productos");
const entrada = document.querySelector('.input');

for (let i = 0; i < productos.length; i++) {
  var contenedor = document.createElement('div');
  contenedor.classList.add("producto");

  var titulo = document.createElement('p');
  titulo.classList.add('titulo');
  titulo.textContent = productos[i].nombre;
  
  var imagen = document.createElement('img');
  imagen.setAttribute('src', productos[i].img);

  contenedor.appendChild(titulo);
  contenedor.appendChild(imagen);

  elementoLista.appendChild(contenedor);
}

function displayProductos(productos){}
const botonDeFiltro = document.getElementById('button');

botonDeFiltro.onclick = function() {
  while (elementoLista.firstChild) {
    elementoLista.removeChild(elementoLista.firstChild);
  }

  const texto = entrada.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    var contenedorFiltrado= document.createElement("div");
    contenedorFiltrado.classList.add("producto");
  
    var tituloFiltrado = document.createElement("p");
    tituloFiltrado.classList.add("titulo");
    tituloFiltrado.textContent = productosFiltrados[i].nombre;
    
    var imagenFiltrada = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    contenedorFiltrado.appendChild(tituloFiltrado);
    contenedorFiltrado.appendChild(imagenFiltrada);
  
    elementoLista.appendChild(contenedorFiltrado);
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  