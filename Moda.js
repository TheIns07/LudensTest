const prompt = require('prompt-sync')();


 moda = (listaM) => {
    const lista1Count = {};
    listaM = listaM.split(",").sort()


    listaM.map((elemento) => {
        { lista1Count[elemento] ? lista1Count[elemento] += 1 : lista1Count[elemento] = 1; }
    });

    const lista1Array = Object.entries(lista1Count).sort((a, b) => { return a - b });
    const moda = {};

    {Object.entries(lista1Array).length > 1 ? Object.assign(moda, {"Bimodal": lista1Array}) : Object.assign(moda, {"Moda": lista1Array[lista1Array-1]})}
    
    return moda
}

const firstArray = prompt("Introduce los valores del primer arreglo. (Recuerda separar por comas)");

console.log(moda(firstArray))