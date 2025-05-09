let persona1 = {
    nombre: "Pedro",
    primerApellido: "Ramirez",
    edad: 24
};

let persona2 = {
    nombre: "Guadalupe",
    primerApellido: "Perez",
    edad: 35
};

let persona3 = {
    nombre: "alberto",
    primerApellido: "Torres",
    edad: 15
};

let persona4 = {
    nombre: "Alejandra",
    primerApellido: "Palomino",
    edad: 90
};

let persona5 = {
    nombre: "Pablo",
    primerApellido: "Medina",
    edad: 60
};

//let personas = [];
//let personas = Array();
//personas.push(persona1, persona2, persona3, persona4, persona5);

//                     0         1         2         3         4
let personas = [persona1, persona2, persona3, persona4, persona5];

// Calcula la edad promedio de las personas.
// Opción 1: Utilizar for
let sumaEdades = 0;
for(let i = 0; i < personas.length; i++){
    sumaEdades += personas[i].edad;
}
console.log(`Promedio con for: ${sumaEdades / personas.length}`);

// Opción 2: Método reduce
let sumaEdadesReduce = personas.reduce((acumulador, valor) => {
    return acumulador + valor.edad;
}, 0);

console.log(`Promedio con reduce() ${sumaEdadesReduce / personas.length}`);

// every() <- Revisa si TODOS los elementos de un arreglo cumplen una condición. Recibe un callback.
// some()  <- Revisa si AL MENOS un elemento de un arreglo cumple una condición. Recibe un callback.
// includes() <- Revisa si un arreglo contiene un elemento a buscar. Recibe un valor.

// Determinar si al menos una persona en el arreglo tiene un apellido de 4 letras o menos.
let hayAlmenosUnApellidoCon4Letras = personas.some((valor) => {
    return valor.primerApellido.length <= 5;
});

if(hayAlmenosUnApellidoCon4Letras){
    console.log(`Sí hay una persona con un apellido de 5 letras o menos.`);
}else{
    console.log(`No hay ninguna persona que cumpla con la condición.`);
}

// for -> Una estructura de control que nos permite repetir código.
for(let i = 0; i < personas.length; i++){
    console.log(i);
}

console.log(`for in`)
// for ... in -> Iterar sobre los índices del arreglo.
for(let i in personas){
    console.log(i);
}

console.log(`for of`)
// for ... of -> Iterar sobre los valores del arreglo.
for(let v of personas){
    console.log(v);
}

// forEach es un método que ejecuta un callback por cada elemento del arreglo.
personas.forEach((valor) => {console.log(`${valor.nombre} ${valor.primerApellido}`)});


