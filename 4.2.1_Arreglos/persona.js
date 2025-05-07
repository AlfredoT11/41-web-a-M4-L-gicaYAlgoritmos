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
    nombre: "Alberto",
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

let personas = [persona1, persona2, persona3, persona4, persona5];
let personasMayoresEdad = [persona1, persona2, persona4, persona5];


export default personas;
export let personasMasculinas = [persona1, persona3, persona5];
export { personasMayoresEdad }; // Exportando varios valores.
