const prompt = require('prompt-sync')();
console.clear()

modaIndeterminada = (listaPrincipal) => {
    //Se crea un objeto auxiliar donde se guardan los datos
    const conteoListaDatos = {};
    //Se convierte en un array los datos introducidos
    listaPrincipal = listaPrincipal.split(",").sort()

    //se genera un mapeo de la lista introducida
    listaPrincipal.map((elemento) => {
        /*Los elementos se almacenan en el objeto. Si el objeto se localiza previamente dentro de este,
        se aumenta el valor numero de la cantidad. Si no, se inicia el valor desde 1 */
        { conteoListaDatos[elemento] ? conteoListaDatos[elemento] += 1 : conteoListaDatos[elemento] = 1; }
    });

    //Se ordenan los valores de menor a mayor. Los array en posición, indican el valor de cantidad ["5", 2] (0 y 1 respectivamente)
    const arrayLista = Object.entries(conteoListaDatos).sort((a, b) => { return a[1] - b[1] });
    //Se crea un objeto para identificar la moda que regresara la funcion
    const moda = {};
    /*Se obtiene el valor de cantidad de la moda. "lista1Array[lista1Array.length - 1]" es el valor del objeto, mientras
    que "lista1Array[1]" es el valor del atributo de cantidad */
    const mainModa = arrayLista[arrayLista.length - 1][1]
    //Se genera una variable auxiliar para guardar las posibles modas
    let modas = [];
    //Se recorre el arreglo de la lista completa
    arrayLista.forEach((par) => {
        //Si un valor de cantidad dentro de la lista es igual a la moda principal
        if (par[1] === mainModa) {
            //Se asigna el valor completo de la moda a el objeto
            modas.push(par)
        }
    });
    //Si existe mas de una moda
    if (modas.length > 1) {
        Object.assign(moda, { "Polimodas": modas })
       
    }
    //Si no, solo se regresa la principal
    else {
        Object.assign(moda, { "Moda": modas })
    }
    //Se regresa el objeto lleno
    return moda
}

const firstArray = prompt("Introduce los valores del primer arreglo. (Recuerda separar por comas)");

console.log(modaIndeterminada(firstArray))