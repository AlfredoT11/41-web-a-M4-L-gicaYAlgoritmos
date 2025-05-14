/*
    Fuerza bruta: Calculamos todas las posibles combinaciones para obtener el resultado.
*/
function encontrarParDeSuma(arreglo, sumaObjectivo){

    let indicesSuma = [-1, -1];

    for(let i = 0; i < arreglo.length; i++){
        for(let j = i + 1; j < arreglo.length; j++){
            //console.log(`${arreglo[i]} + ${arreglo[j]} = ${arreglo[i] + arreglo[j]}`);
            if(arreglo[i] + arreglo[j] === sumaObjectivo){
                //console.log(`La suma de ${arreglo[i]} + ${arreglo[j]} me da el valor buscado`);
                indicesSuma[0] = i;
                indicesSuma[1] = j;
                return indicesSuma;
            }
        }
    }

    return indicesSuma;
}

/*
    Dos punteros: 
*/
function encontrarParDeSuma2Punteros(arreglo, sumaObjectivo){

    let indicesSuma = [-1, -1];
    let punteroIzquierdo = 0;
    let punteroDerecho = arreglo.length - 1;
    while(punteroIzquierdo < punteroDerecho){
        let suma = arreglo[punteroIzquierdo] + arreglo[punteroDerecho];
        // Si la suma es igual al valor que estamos buscando, significa que hay al menos un par de valores
        // que generan la suma.
        if(suma === sumaObjectivo){
            indicesSuma[0] = punteroIzquierdo;
            indicesSuma[1] = punteroDerecho;
            return indicesSuma;
        
        // Si la suma es menor que el valor que estamos buscando, debemos aumentar el resultado, lo que se
        // traduce en mover el puntero izquierdo una posición a la derecha.
        // Como el arreglo está ordenado de menor a mayor, esto significa que la siguiente suma será mayor.
        }else if(suma < sumaObjectivo){
            punteroIzquierdo++;

        // Si la suma es mayor que el valor que estamos buscando, debemos disminuir el resultado, lo que se
        // traduce en mover el puntero derecho una posición a la izquierda.
        // Como el arreglo está ordenado de menor a mayor, esto significa que la siguiente suma será menor.
        }else{
            punteroDerecho--;
        }
    }
    return indicesSuma;
}

function imprimirIndicesYValores(arreglo, indicesSumaResultado, valorObjectivo){
    console.log(`Valor objectivo: ${valorObjectivo}`);
    console.log(`Índices: ${indicesSumaResultado[0]} ${indicesSumaResultado[1]}`);
    console.log(`Valores: ${arreglo[indicesSumaResultado[0]]} ${arreglo[indicesSumaResultado[1]]}`);
}

let arreglo = [1, 3, 5, 7, 9, 10, 12, 13, 15, 20, 21, 22, 25, 27, 27];
let valorObjectivo;
let indicesSumaResultado;

console.log('Fuerza bruta');

valorObjectivo = 30;
indicesSumaResultado = encontrarParDeSuma(arreglo, valorObjectivo);
imprimirIndicesYValores(arreglo, indicesSumaResultado, valorObjectivo);

valorObjectivo = 28;
indicesSumaResultado = encontrarParDeSuma(arreglo, valorObjectivo);
imprimirIndicesYValores(arreglo, indicesSumaResultado, valorObjectivo);

valorObjectivo = 45;
indicesSumaResultado = encontrarParDeSuma(arreglo, valorObjectivo);
imprimirIndicesYValores(arreglo, indicesSumaResultado, valorObjectivo);

valorObjectivo = 55;
indicesSumaResultado = encontrarParDeSuma(arreglo, valorObjectivo);
imprimirIndicesYValores(arreglo, indicesSumaResultado, valorObjectivo);

/*
27 * 27 * 27 * 27 * 27 * 27 * 27 * 27 * 27 * 27 = 205,891,132,094,649
GHz
1Hz = 1 operación por segundo
1KHz = 1000 operaciones por segundo
1MHz = 1,000,000 operaciones por segundo
1GHz = 1,000,000,000 operaciones por segundo

205,891,132,094,649 / 1,000,000,000 = 205,892s = 3431m = 57h
*/

console.log('Dos punteros');


valorObjectivo = 30;
indicesSumaResultado = encontrarParDeSuma2Punteros(arreglo, valorObjectivo);
imprimirIndicesYValores(arreglo, indicesSumaResultado, valorObjectivo);

valorObjectivo = 28;
indicesSumaResultado = encontrarParDeSuma2Punteros(arreglo, valorObjectivo);
imprimirIndicesYValores(arreglo, indicesSumaResultado, valorObjectivo);

valorObjectivo = 45;
indicesSumaResultado = encontrarParDeSuma2Punteros(arreglo, valorObjectivo);
imprimirIndicesYValores(arreglo, indicesSumaResultado, valorObjectivo);

valorObjectivo = 55;
indicesSumaResultado = encontrarParDeSuma2Punteros(arreglo, valorObjectivo);
imprimirIndicesYValores(arreglo, indicesSumaResultado, valorObjectivo);
