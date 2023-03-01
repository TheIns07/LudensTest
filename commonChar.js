function solution(s1, s2) {
    var quantity = 0
    const stringtwo = s2.split("")
    const stringfirst = s1.split("")
    
    stringfirst.map(character => {
        if(stringtwo.includes(character)){
            quantity++;
            console.log("-------------")
            console.log("Segundo String Before: "+stringtwo)
            console.log("Index String Char: "+stringtwo.indexOf(character))
            stringtwo.splice(stringtwo.indexOf(character), 1)
            console.log("Segundo String After: "+stringtwo)
        }
    }
    )
    return quantity
}

console.log(solution("aabcc", "adcaa"))