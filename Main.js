//array (int) => mediana del array 
const prompt = require('prompt-sync')();



medianaArray = (arrayMain, arraySecondary) => {

    arrayMain = arrayMain.split(",").sort((a, b) => {return a - b})
    arraySecondary = arraySecondary.split(",").sort((a, b) => {return a - b})

    let arrayMainSupport = []
    let arraySecondarySupport = []

    arrayMain.forEach(e => {
      arrayMainSupport.push(parseInt(e))
    })

    arraySecondary.forEach(e => {
        arraySecondarySupport.push(parseInt(e))
    })

    const concatedArrays = arrayMainSupport.concat(arraySecondarySupport)

    const lengths = concatedArrays.length;
    const mitad = Math.floor(concatedArrays.length/2);

    return lengths % 2 == 1 ? concatedArrays[mitad] : (concatedArrays[mitad - 1] + concatedArrays[mitad + 2]) / 2
}

const firstArray = prompt("Introduce los valores del primer arreglo. (Recuerda separar por comas)");
const secondArray = prompt("Introduce los valores del segundo arreglo. (Recuerda separar por comas)");


console.log(medianaArray(firstArray, secondArray));

