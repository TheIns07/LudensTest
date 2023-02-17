const prompt = require('prompt-sync')();
console.clear()
 moda = (listaM) => {
    const lista1Count = {};
    listaM = listaM.split(",").sort()


    listaM.map((elemento) => {
        { lista1Count[elemento] ? lista1Count[elemento] += 1 : lista1Count[elemento] = 1; }
    });

    const lista1Array = Object.entries(lista1Count).sort((a, b) => { return a[1] - b[1] });
    const moda = {};
    const mainModa = lista1Array[lista1Array.length-1]
    lista1Array.pop()

    let bimoda = null;
    lista1Array.forEach(value => {
        if(value[1] === mainModa[1]){
            bimoda = value
        }
    })
    
    if(!bimoda){
        Object.assign(moda, {"Moda": mainModa})
    }
    else {
        Object.assign(moda, {"Bimoda": bimoda, mainModa})
    }
    
    return moda
}

const firstArray = prompt("Introduce los valores del primer arreglo. (Recuerda separar por comas)");

console.log(moda(firstArray))