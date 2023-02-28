const numbers = [1,2,3,4,2,2]

//Checar valores del arreglo
const resultEvery = numbers.every((number, index) => {
    return typeof number === 'number'
})

const resultSome = numbers.some((number, index) => {
    return typeof number === 'number'
})

//uso de reduce en valores
const reduce = numbers.reduce((valorAnterior, valorAcumulado, index, array) => {
    return valorAnterior+valorAcumulado
})

const reduceWithValue = numbers.reduce((valorAnterior, valorAcumulado, index, array) => {
    return valorAnterior+valorAcumulado
}, 1)

//Valor maximo de un array
console.log(Math.max(...numbers))
//Solo pares y multiplicar array por 2
console.log(numbers.filter(x => x%2 ===0).map(x => x * 2))
//Union de arrays y filtrado de componentes
console.log(numbers.flatMap(n => n%2===0 ? []: n*2))
//Ordenamiento random
console.log(numbers.sort((a,b) => Math.random() - 0.5))
//Ordenamiento aleatorio
console.log("Random Item: "+ numbers[Math.floor(Math.random() * numbers.length)])
//Valores unicos
Array.from(new Set(numbers))

console.log(reduce)
console.log(reduceWithValue)
console.log(resultEvery)
console.log(resultSome)