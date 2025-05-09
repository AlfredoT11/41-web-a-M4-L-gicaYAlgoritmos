console.log(`1. Inicio del script`);

function iniciarTemporizador(milisegundos) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Temporizador terminado`);
            resolve("Promesa cumplida");
        }, milisegundos);
    });
}

// async-await -> Una forma de trabajar procesos asíncronos de manera síncrona.
async function manejarTemporizador() {
    console.log(`Antes del temporizador`);
    await iniciarTemporizador(3000); // await requiere sí o sí trabajar con promesas.
    console.log(`Después del temporizador`);
}

manejarTemporizador();
console.log(`3. Fin del script`);