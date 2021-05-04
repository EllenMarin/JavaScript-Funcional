//function declaration

function sayHello() {   // nao recebe parametro nem retorna nada
    console.log('hello')
}
sayHello()

function sayHelloTo(name) { // recebe parâmetro nao retorna nada
    console.log(`hello ${name}!`)
}
sayHelloTo('Mike')  

function returnHi() {  // nao recebe parametro retrna algo
    return 'Hi!'
}
const greeting = returnHi()
console.log(greeting)
console.log(returnHi())

function returnHiTo(name){   //tem parametro e retorna algo
    return `Hi ${name}`
}

console.log(returnHiTo('Jhon'))