import personas from "./persona.js"; // Importando un valor definido con export default.
import { personasMayoresEdad, personasMasculinas } from './persona.js';

console.log(personasMayoresEdad);
console.log(personas);
console.log(personasMasculinas);

// arreglo.unshift() Agrega un elemento AL INICIO del arreglo.
// arreglo.push() Agrega un conjunto de elementos AL FINAL del arreglo.

// arreglo.pop() Quita el ÚLTIMO elemento del arreglo.
// arreglo.shift() Quita el PRIMER elemento del arreglo.

// arreglo.length <- Es una propiedad que me permite conocer el tamaño de un arreglo.

// Quiero generar un nuevo arreglo cuyos valores sean cadenas que junten el nombre, primerApellido y edad en una sola cadena.
let personasCadenas = personas.map((valor) => {
    return `${valor.primerApellido.toUpperCase()} ${valor.nombre} ${valor.edad + 100}`
});
console.log(personasCadenas);

let vocales = ['A', 'E', 'I', 'O', 'U'];
// Obtener las personas cuyo nombre empiecen con una consonante y que sean mayores a 30 años.
let personasNombreConsontante = personas.filter((valor) => {
    return !vocales.includes(valor.nombre.toUpperCase().charAt(0)) && valor.edad > 30; 
});
console.log(personasNombreConsontante);

// Obtener el índice de la persona cuyo apellido empiece con P.
let indicePersonaApellidoP = personas.findIndex((valor) => {
    return valor.primerApellido.charAt(0).toUpperCase() == 'P'
});
console.log(indicePersonaApellidoP);

/*

Código Inicial del ejercicio:

let listaDeCompras = [];  // Lista vacía

// Función para agregar un producto
function agregarProducto(producto) {
  // TODO: Verifica si el producto ya está en la lista antes de agregarlo
  listaDeCompras.push(producto);
}

// Función para eliminar un producto
function eliminarProducto(producto) {
  // TODO: Encuentra y elimina el producto de la lista
}

// Función para mostrar la lista completa
function mostrarLista() {
  console.log("Lista de Compras:");
  // TODO: Recorre el arreglo y muestra cada producto
}

// Prueba tus funciones
agregarProducto("Leche");
agregarProducto("Pan");
agregarProducto("Leche");  // Este producto no debe agregarse de nuevo
mostrarLista();  // Debería mostrar "Leche" y "Pan"
*/