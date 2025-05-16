/*
    5! = 5 * 4 * 3 * 2 * 1

    7! = 7 * 6 * 5 * 4 * 3 * 2 * 1
    7! = 7 * 6!
             6 * 5!
                 5 * 4!
                     4 * 3!
                         3 * 2!
                             2 * 1!
                                 1

    x! = x * (x - 1) * (x - 2) * (x - 3) * ... 1
*/

function factorial(x){
    if(x === 1) return 1;
    return x * factorial(x - 1);
}

let factorialACalcular = 10;
console.log(`El factorial de ${factorialACalcular} es ${factorial(factorialACalcular)}`);

/*
    Crear una función que me permita encontrar la salida de un laberinto.

    Reglas del laberinto:
    1. Los valores 1 son paredes.
    2. Los valores 0 son caminos.
    3. El valor 2 es la entrada.
    4. El valor 3 es la salida.
    5. Solamente podemos avanzar hacia arriba, abajo, izquierda o derecha. NUNCA en diagonal.
    6. Solamente podemos avanzar de 1 en 1.
    7. No tienen ciclos.

*/

/*
    Algoritmos de búsqueda aplicados a grafos.
    Recorrido en profundidad  Depth search DFS
    Recorrido en ancho -> Breath search BFS
*/

/*
laberinto = [2, 0, 0, 0, 0, 3];
        //       0       1       2       3       4
        //    0  1    0  1    0  1    0  1    0  1
laberinto = [[2, 0], [1, 0], [2, 2], [4, 5], [8, 7]];
laberinto[3][1] => 5
*/

const laberinto = [
    //   0  1  2  3  4  5
        [1, 1, 1, 1, 1, 1], // 0
        [2, 0, 0, 1, 0, 3], // 1
        [1, 1, 0, 1, 0, 1], // 2
        [1, 1, 0, 0, 0, 1], // 3
        [1, 1, 0, 1, 0, 1], // 4
        [1, 0, 0, 1, 0, 1], // 5
        [1, 1, 1, 1, 1, 1]  // 6
                            // 7 <- esta fila no existe
]

//                  [fila][columna]
// console.log(laberinto[1][0]); <- Este es el inicio del laberinto.

function avanzar(fila, columna, laberinto){
    console.log(`[${fila} ${columna}]`);

    // Verificar los casos en los que ya no pueda avanzar.
    if(
        fila < 0 || fila >= laberinto.length || // Verificamos que no tratemos de acceder a una fila inexistente.
        columna < 0 || columna >= laberinto[0].length || // Verificamos que no accedemos a una columna inexistente.
        laberinto[fila][columna] === 1 || // Ya nos topamos con pared.
        laberinto[fila][columna] === 4 // Tratamos de movernos a la posición de la que llegamos.
    ){
        console.log('No se puede avanzar por aquí...');
        return false;
    }

    if(laberinto[fila][columna] === 3){
        console.log('¡Encontré la salida!');
        return true;
    }

    /*
        Comenzamos a avanzar a partir de la derecha y en sentido de las manecillas del reloj.
        1. Derecha
        2. Abajo
        3. Izquierda
        4. Arriba
    */

    laberinto[fila][columna] = 4; // Marcando el camino momentáneamente como recorrido.

    // 1. Derecha
    if(avanzar(fila, columna + 1, laberinto)){
        console.log(`Regresando de la derecha`);
        return true;
    };

    // 2. Abajo
    if(avanzar(fila + 1, columna, laberinto)){
        console.log(`Regresando de abajo`);
        return true;
    };

    // 3. Izquierda
    if(avanzar(fila, columna - 1, laberinto)){
        console.log(`Regresando de la izquierda`);
        return true;
    };

    // 4. Arriba
    if(avanzar(fila - 1, columna, laberinto)){
        console.log(`Regresando de la arriba`);
        return true;
    };

    laberinto[fila][columna] = 0; // Desmarcando el camino.
    
    console.log(`Aquí ya no hay más camino por recorrer`);
    return false;

}

avanzar(1, 0, laberinto);
console.log(laberinto);
