// ... rest, ... spread

const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000];
//const [um, dois, tres, ...resto] = numeros; // resto
//const [um, , tres, , cinco, , set] = numeros;

const numeros2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const [, [, , seis]] = numeros2;
console.log(seis);


// Objetos

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320,
    }
};

const {nome: n = '', sobrenome, ...resto} = pessoa; // n='' é caso o nome não existisse 

const {endereco: {rua: r='', numero}, endereco} = pessoa;

console.log(r, numero, endereco);

console.log(n, sobrenome);

console.log(resto);