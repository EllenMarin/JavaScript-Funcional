// subclasses que herdam informações e uma super classe
class Veiculo{
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    mostrar(){
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Ano: ${this.ano}`);
    };

}
// subclasses que irá herdar da super classe
class Carro extends Veiculo{

    constructor(marca, modelo, ano, nportas){
        super(marca, modelo, ano);
        this.nportas = nportas; 
    }
    mostrar (){
        console.log(`Dados Carro`);
        super.mostrar();
        console.log(`Portas: ${this.nportas}`)
    };

}

class Camiao extends Veiculo{
    
    constructor(marca, modelo, ano, peso){
        super(marca, modelo, ano)
        this.peso = peso;
    }
    mostrar(){
        console.log(`Dados do Camião`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Peso: ${this.peso}`);
    };
}
let carro = new Carro("Toyota", "Yaris", 2018, 4);
carro.mostrar();
let camiao = new Camiao("Mercedes", "Act", 1999, 20);
camiao.mostrar();
