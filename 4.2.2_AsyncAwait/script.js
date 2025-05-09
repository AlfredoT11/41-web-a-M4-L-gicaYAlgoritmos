console.log(`1. Inicio del script`);

let seCumpleLaPromesa = true;

function iniciarTemporizador(milisegundos) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Temporizador terminado`);
            if(seCumpleLaPromesa){
                resolve();
            }else{
                reject();
            }
        }, milisegundos);
    });
}

// async-await -> Una forma de trabajar procesos asíncronos de manera síncrona.
async function manejarTemporizador() {
    try{
        console.log(`Antes del temporizador`);
        await iniciarTemporizador(3000); // await requiere sí o sí trabajar con promesas.
        console.log(`Después del temporizador`);
    }catch(e){
        console.log(`Ocurrió una excepción`);
        console.log(e);
    }
}

manejarTemporizador();
console.log(`3. Fin del script`);