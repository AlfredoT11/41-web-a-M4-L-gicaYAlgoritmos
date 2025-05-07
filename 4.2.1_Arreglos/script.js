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
let personasCadenas = personas.map((valor) => {return `${valor.primerApellido.toUpperCase()} ${valor.nombre} ${valor.edad + 100}`});
console.log(personasCadenas);