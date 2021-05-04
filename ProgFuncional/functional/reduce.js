const numbers = [1, 2, 3, 4, 5, 6]

const sum = (total, el) => total + el
const total = numbers.reduce(sum)
console.log(total)

//descobrir a média
const avg = (acc, el, i, array) => {
    if(i === array.length - 1) {
    return (acc + el) / array.length
    } else {
        return acc + el
    }
}
console.log(numbers.reduce(avg))