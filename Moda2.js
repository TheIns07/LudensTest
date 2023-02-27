const prompt = require('prompt-sync')();
console.clear()


moda = (array) => {
    array = array.split(",").sort()

    let values = {}

    array.map((element)=>{
        {values[element] ? values[element]+=1 : values[element]=1}
    })
    
    const moda = Object.entries(values).sort((a,b) => {return a[1] - b[1]})
    const mainModa = moda[moda.length-1]

    let modaNueva= []

    moda.forEach((val) => {
        if(val[1] === moda[moda.length-1][1]){
            modaNueva.push(val)
        }
    })

    const modas = {}
    if(modaNueva.length>=1){
        return (modas, {"Polimodas: ": modaNueva})
    }else {
        return (modas, {"Moda: ": mainModa})
    }


    
}


console.log(moda("11, 6, 7, 4"))