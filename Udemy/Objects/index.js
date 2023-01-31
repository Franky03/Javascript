function criaPessoa(nome, sobrenome, idade){
    return {
        nome, 
        sobrenome, 
        idade,
        fala(){
            console.log(`${this.nome} está falando !`);
        },
        incrIdade(){
            this.idade++;
        },
    };
}

// this é como o self

const pess1= criaPessoa('Frank', 'Kaiky', 89);

console.log(pess1.nome, pess1.sobrenome, pess1.idade);
pess1.fala();
pess1.incrIdade();
console.log(pess1.idade);
