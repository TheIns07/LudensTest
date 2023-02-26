//array (int) => mediana del array 
const prompt = require('prompt-sync')();



medianaArray = (arrayMain, arraySecondary) => {
    //Convierte el array dado y lo ordena de menor a mayor
    arrayMain = arrayMain.split(",")
    arraySecondary = arraySecondary.split(",")

    //Se crean array's auxiliares 
    let arrayMainSupport = []
    let arraySecondarySupport = []
    
    arrayMain.forEach(e => {
      arrayMainSupport.push(parseInt(e))
    })

    arraySecondary.forEach(e => {
        arraySecondarySupport.push(parseInt(e))
    })

    const concatedArrays = arrayMainSupport.concat(arraySecondarySupport).sort((a, b) => {return a - b})

    const longitud = concatedArrays.length;
    const medio = Math.floor(concatedArrays.length/2)

    if(longitud % 2 == 1){
      return concatedArrays[medio]
    } else {
      return (concatedArrays[medio]+concatedArrays[medio-1])/2
    }
    
}

const firstArray = prompt("Introduce los valores del primer arreglo. (Recuerda separar por comas)");
const secondArray = prompt("Introduce los valores del segundo arreglo. (Recuerda separar por comas)");


console.log(medianaArray(firstArray, secondArray));

