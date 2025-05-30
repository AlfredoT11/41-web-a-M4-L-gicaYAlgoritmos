/*
    Algoritmo de búsqueda binaria
    Ejemplo de un algoritmo de divide y venceras.
    Este algoritmo solamente se puede aplicar a los arreglos.
    Para poder aplicar la búsqueda binaria, el arreglo debe estar ordenado.
    Tiempo O(log n)
    Espacio O(1)
*/
// Pensar en un número del 1 al 1000.
/*
    1 a 1000
    1. 500 <- Más chico

    1 a 499
    2. 250 <- Más grande

    251 a 499
    3. 375 <- Más chico

    251 a 374
    4. 313 <- Más grande

    313 a 374
    5. 344 <- Más chico

    313 a 343
    6. 328 <- Más grande

    328 a 343
    7. 336 <- Más chico

    328 a 336
    8. 332 <- Más grande

    333 a 336
    9. 334 <- Más chico

    333 a 333
    10. 333 Este es el número.
*/
//             valorBuscado = 34
//                                           m
//                                       f   i 
//             0  1  2  3  4  5  6   7   8   9  10
let arreglo = [1, 2, 3, 4, 5, 6, 9, 25, 33, 42, 89]; // length = 11

/* Buscar el valor 4
    1.
    inicio = 0
    final = 10
    mitad = (10 + 0) / 2 = 10 / 2 = 5
    arreglo[mitad] == 4 => ¿6 == 4? => 4 < 6

    2.
    inicio = 0
    final = 4 <= mitad - 1
    mitad = (inicio + final) / 2 = (0 + 4) / 2 = 4/2 = 2
    arreglo[mitad] == 4 => ¿3 == 4? => 4 > 3

    3.
    inicio = mitad + 1 = 3
    final = 4
    mitad = (inicio + final)/2 = (3 + 4)/2 = 7/2 = 3.5 = 3
    arreglo[mitad] == 4 => ¿4 == 4? => true

*/

/*
    Regresar el índice de la posición del valor buscado.
    Si el valor no existe, regresamos un -1.
    O(log(n))
*/
function busquedaBinaria(valorBuscado, arreglo, inicio, final){
    // Si queremos redondear hacia arriba Math.ceil();
    let mitad = Math.floor((inicio + final) / 2);

    if(arreglo[mitad] == valorBuscado){
        return mitad;
    }

    if(inicio > final) return -1;

    if(valorBuscado < arreglo[mitad]){
        // Nos movemos a la izquierda.
        return busquedaBinaria(valorBuscado, arreglo, inicio, mitad - 1);
    }else{
        // Nos vemos a la derecha.
        return busquedaBinaria(valorBuscado, arreglo, mitad + 1, final);
    }
}

function verificarExistenciaValor(valorBuscado, arreglo){
    let indiceValorBuscado = busquedaBinaria(valorBuscado, arreglo, 0, arreglo.length - 1);
    if(indiceValorBuscado != -1){
        console.log(`El valor ${valorBuscado} está en la posición ${indiceValorBuscado}.`);
    }else{
        console.log(`El valor ${valorBuscado} NO está en el arreglo.`);
    }
}

verificarExistenciaValor(4, arreglo);
verificarExistenciaValor(34, arreglo);
verificarExistenciaValor(90, arreglo);
verificarExistenciaValor(1, arreglo);

