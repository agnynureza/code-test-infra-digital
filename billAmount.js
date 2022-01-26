function billAmount(amount){
    let bills = [1000, 3000, 1000, 5000, 10000]
    let sortedBills = [...bills].sort((a,b) => a - b);
    let sumBill = bills.reduce((a, b) => a + b, 0)
    let payBill = []

    if(amount > sumBill){
        return payBill
    }

    for(let i = sortedBills.length-1; i >= 0; i--){
        if(amount >= sortedBills[i]){
            amount -= sortedBills[i]
            payBill.unshift(sortedBills[i])
        }
    }
    return  payBill.map(x => {
        let index = bills.indexOf(x)
        if(index != -1) {
            bills[index] = 0
        }
        return index
      })
}

console.log(billAmount(2000))
console.log(billAmount(1000))
console.log(billAmount(13000))
console.log(billAmount(16000))
console.log(billAmount(400))
console.log(billAmount(25000))