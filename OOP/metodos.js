//Determinadas ações sobre o objeto

let estudante = {
    nome: "Math",
    idade: 23,
    curso: "Informática", 
    ano: 1,


    mostrar() {
        return "Nome: " + this.nome + "Idade: " + this.idade;
    },
    mostrarCurso() {
        return "Curso: " + this.curso;
    },
    passarAno() {
        this.ano = this.ano+1;
    },
};

console.log(estudante.mostrar());
console.log(estudante.mostrarCurso());
estudante.passarAno();
console.log(estudante.ano);