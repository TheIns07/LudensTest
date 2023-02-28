

function fibonacci (number){
    const fib = [0,1]

    for(let i = 2; i<=number; i++){
        fib[i] = fib[i-2]+fib[i-1]
    }
    return fib[number]
}


console.log(fibonacci(12))