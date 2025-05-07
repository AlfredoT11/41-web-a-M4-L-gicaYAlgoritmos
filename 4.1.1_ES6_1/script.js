// Scope global (Alcance global)

// Creación de variables en JS

var variableVar1; // Declarar una variable 
variableVar1 = 5; // Inicializar una variable <- Asignarle un valor.

/*
var automáticamente mueve la declaración de la variable "hasta arriba" del código.
Esto se conoce como hoisting.
*/

var variableVar2 = "Hola"; 

let variableLet1 = true;

// const = constante
// const se utiliza para variable cuyo valor no va a cambiar.
const GRAVEDAD = 9.81;

// Bloque de código -> Un segmento de código a ejecutar.
function prueba(){
    console.log(variableVar1);
    console.log(variableLet1);
    /*
    var variableVarPrueba1 = "variableVarPrueba1";
    let variableLetPrueba1 = "variableLetPrueba1";

    console.log(variableVarPrueba1);
    console.log(variableLetPrueba1);
    */
    variableVar1 = 10;
    variableLet1 = false;

    console.log(variableVar1);
    console.log(variableLet1);

    var variableVar1 = 15;
    //let variableLet1 = "¡Hola, soy una variable let!";

    console.log(variableVar1);
    console.log(variableLet1);
}

prueba();

console.log(variableVar1);
console.log(variableLet1);

function saludar(nombre = "persona sin nombre"){
    console.log("¡Hola " + nombre + "!");
}

saludar("Reynathan");
saludar("Karla");
saludar("Eduardo");

saludar();

function suma(a = 5, b = 10){
    return a + b;
}

console.log(suma(undefined, 20));

(nombre) => {
    console.log(nombre.reverse());
}

// Generalmente las funciones flecha se utilizan como callbacks.
/*
    Un callback es una función que se manda como parámetro a otra función.
*/

/*
    Función flecha
    (param1, param2, param3, ..., paramN) => {
        // Código a ejecutar.
    }
*/

function operacionMatematica(a = 0, b = 0, operacionARealizar){
    console.log(operacionARealizar(a, b));
}

operacionMatematica(1, 1, (x, y) => {return x + y});
operacionMatematica(2, 2, (x, y) => {return x * y});
operacionMatematica(3, 5, (x, y) => {return x - y});
operacionMatematica(10, 20, (x, y) => {return (x * y / 7 ** 24) + 101});

// Objeto literal: Es un tipo de dato en JS que nos permite guardar más de un valor en una sola variable.
// Para acceder a esos valores tenemos que hacerlo a través de una llave.

let mascota = {
    nombre: "Tigrillo",
    edad: 7,
    estaEsterilizado: true,
    humanos: ["Mali", "Tona"],
    vacunas: [
        {
            tipo: "Parásitos",
            laTiene: true
        },
        {
            tipo: "Pulgas",
            laTiene: true
        }
    ],
    saludar: function(){
        console.log("Miau, mi nombre es: " + this.nombre);
    }
}

let mascota2 = {
    nombre: "Bowie",
    edad: 2,
    estaEsterilizado: true,
    humanos: ["Tona", "Mali"],
    vacunas: [
        {
            tipo: "Parásitos",
            laTiene: true
        },
        {
            tipo: "Pulgas",
            laTiene: true
        }
    ],
    saludar: function(){
        console.log("Miau, mi nombre es: " + this.nombre);
    }
}

console.log(mascota.nombre);
console.log(mascota["edad"]);

mascota.saludar();

mascota2.saludar();

/*
    Arreglo (array): Es una colección de datos.
    En JS un arreglo puede tener datos de diferentes tipos.
*/

//               0       1      2                           3         4                5    6
let miArreglo = [5, "hola", [5, 6], {nombre: "Juan", edad: 32}, mascota, () => {return 1}, 25]; // 7 elementos

miArreglo[4].saludar();

miArreglo.length; // Es una propiedad que me permite conocer el tamaño de un arreglo.
console.log(miArreglo[miArreglo.length - 1]);

let miArreglo2 = [];
console.log(miArreglo2[2]); // Este índice no existe en el arreglo, regresa undefined,
console.log(miArreglo2[-1]); // Este índice no existe en el arreglo, regresa undefined.

miArreglo.push(32, "peras"); // Permite agregar más de un valor al final de un arreglo.
console.log(miArreglo);

// Concatenación -> + -> Unir una cadena con otra expresión.
let nombre1 = "Juanito";
let apellido1 = "Pérez";

let nombreCompleto1 = nombre1 + " " + apellido1;
console.log(nombreCompleto1);

// Template literals (template strings) -> Es una cadena que nos permite "inyectarle" valores a esta.
// ` <- backtick <- Alt + 96 (teclado numérico) (Windows)
// Escapar un carácter es quitarle sus propiedades especiales dentro de una cadena.
let nombreCompletoTemplate = `${apellido1} ${nombre1} ${'${}'}`;
console.log(nombreCompletoTemplate);

// Destructuración de objetos
// Descomponer un objeto en sus atributos.
let gato1 = {
   nombre: 'Tigrillo',
   edad: 8,
   estaEsterilizado: true 
}

//gato1.nombre
//gato1["nombre"];
/*
    let nombre = gato1.nombre;
    let edad = gato1.edad;
    let estaEsterilizado = gato1.estaEsterilizado;
*/
// NOTA: Para utilizar destructuración tenemos que declarar la variable sí o sí, no podemos reasignar el valor a una variable previamente creada.
let edad = 24;
edad = gato1.edad;
let { nombre, estaEsterilizado } = gato1;
console.log(nombre);
console.log(edad);
console.log(estaEsterilizado);


// Destructuración de arreglos
//             0   1  2   3   4
let edades = [25, 36, 2, 54, 26];
/*
let primerEdad = edades[0];
let segundaEdad = edades[1];
let tercerEdad = edades[2];
*/

/* 
    Para ignorar un valor solamente dejamos un espacio entre las comas.
*/

let [primerEdad, segundaEdad, tercerEdad, , quintaEdad, sextaEdad] = edades;
let [, segundaEdadCopia] = edades;
console.log(primerEdad);
console.log(segundaEdad);
console.log(tercerEdad);
console.log(quintaEdad);
console.log(sextaEdad); // No existe un sexto elemento, por lo tanto, el valor de esa variable será undefined.

console.log(segundaEdadCopia);