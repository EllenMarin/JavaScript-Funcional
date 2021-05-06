// quando as informações não são relevantes para o obj, mas sim para a classe
class Veiculo {
    static nVeiculos = 0;
    constructor(marca,modelo,ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        Veiculo.nVeiculos++;
    }

    static mostraNVeiculos(){
        console.log(`Existem ${Veiculo.nVeiculos} veiculos.`)
    }
}
let carro1 = new Veiculo("Toyota", "yaris", 1998);
let carro2 = new Veiculo("Honda", "Civic", 2006);
let carro3 = new Veiculo("Ford", "Focus", 2011);
Veiculo.mostraNVeiculos();