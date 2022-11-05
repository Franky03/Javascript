console.log("Hello World");

// let idade= 25;
// console.log(idade);
//camelCase


//Tipos primitivos

let nome= 'jonhantan'; // string literal
let idade= 23; // number literal
let altura= 180.83;
let verAprovado= true; // boolean
let undef; // Undefined
let corSelecionada= null; // Redefinir um valor


console.log(nome, idade, altura);

nome= 'DogoMal';

//Objetos

let pessoa = {
    nome: 'Rafael',
    idade: 25,
    estaAprovado: true,
    sobrenome: 'Souza',
};

// Arrays

let familia= [true, 26, 45, 'jonathan', 76, 17];

console.log(familia);
console.log(familia.length);

let nomeAmigo= ['Pessoa', 23, 'Cubatão'];

// for (let i = 0; i < nomeAmigo.length; i++) {
//     let name = nomeAmigo[i];
//     console.log(name);
// }

// Função (Verbo + Substantivo)

let corSite= 'gray';
let fundo= document.getElementById('pagina');

function mudaCor() {
    let lerInput= document.getElementById("meu-input");
    fundo.style.backgroundColor = lerInput.value;
}

document.getElementById("meu-input").onkeypress = function(e) {
    if (e.keyCode == 13){
        mudaCor();
        e.preventDefault();
    }
}

document.getElementById('meu-submit').onclick = function(e){
    mudaCor();
    e.preventDefault();
}




