function sumMultiple(n){
    let result = 0
    for(let i= 1 ; i <n ; i++){
        if(i%3 == 0 || i%5 == 0){
            result += i
        }
    }
    return result
}

console.log(sumMultiple(10))