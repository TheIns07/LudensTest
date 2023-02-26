function solution(sequence) {
    sequence.pop()
    let minusVlaue = sequence[0]
    var bolean = true
    for (let i = 1; i <= sequence.length; i++) {
        if (minusVlaue < sequence[i] || minusVlaue !== sequence[i] ) {
            minusVlaue = sequence[i]
            bolean = true
        }
        else {
            bolean = false
        }
    }
    return bolean
}


console.log(solution([1,3,2]))