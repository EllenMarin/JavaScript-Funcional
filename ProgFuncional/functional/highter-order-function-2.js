//retornar uma função a partir de outra função como parâmetro
//curring

function finalPrice(tax) {
    return function(price) {
        return price * (1 + tax)
    }
}
const nycFinalPrice = finalPrice(0.875)

console.log(nycFinalPrice(25.65))
console.log(nycFinalPrice(1))
console.log(nycFinalPrice(22.4))
