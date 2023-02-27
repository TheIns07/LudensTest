function solution(inputString) {
     let array = inputString.split('').reverse().join('')
     if (array === inputString) {
        return true
     }  else{ 
        return false
    }
}


console.log(solution("aabaa"))