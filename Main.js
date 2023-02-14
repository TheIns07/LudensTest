//array (int) => mediana del array 
const prompt = require('prompt-sync')();



medianaArray = (arrayMain, arraySecondary) => {
    const concatedArrays = arrayMain.concat(arraySecondary)
    const lengths = arrayMain.length + arraySecondary.length;
    const arrayFin = []


    for (let i = 0; i <= lengths; i++) {
        walkable = parseInt(concatedArrays[i])
        arrayFin[i] = walkable
    }
    

    arrayFin.sort((x, y) => x - y)
    
    const newArray = arrayFin.filter(function (value) {
        return !Number.isNaN(value);
    });
    console.log(newArray)

    let mitad = Math.floor(newArray.length +1 / 2)


    return newArray.length % 2 == 1 ? newArray[mitad] : (newArray[mitad - 1] + newArray[mitad + 2]) / 2
}

const firstArray = prompt("Introduce los valores del primer arreglo. (Recuerda separar por comas)");
const secondArray = prompt("Introduce los valores del segundo arreglo. (Recuerda separar por comas)");


console.log(medianaArray(firstArray, secondArray));

