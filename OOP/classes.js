//uma classe serve como modelo para depois ser atribuido valores 

class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    //metodos especiais para aceder uma determinada propriedade, para depois ser definido os valores
    get Marca() { 
        console.log("Dentro do get")
        return this.marca;
    }

    set Marca(m) {
        console.log("Dentro set")
        return this.marca = m;
    }

}
let carro1 = new Veiculo("Toyota", "yaris", 1998);
let carro2 = new Veiculo("Honda", "Civic", 2006);
let carro3 = new Veiculo("Ford", "Focus", 2011);
carro1.Marca = "BMW";
console.log(carro1.Marca)
