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

// Função que realiza uma tarefa, não devolve nada

function dizerNome(){
    console.log('Nome');
}

dizerNome();

function MultiplicarPorDois(valor){
    return valor * 2;
}

let resultado= MultiplicarPorDois(5);

console.log(resultado);

//Operadores Aritméticos
let salario=100;
console.log(++salario);

//Operadores Atribuição

let valorTecl= 100; // O igual é um operador de atribuição

//Operadores de Comparação
 console.log(1===1); //Além de comparar os valores está comparando também os tipos
 console.log(1 === '1'); // Vai dar falso

 console.log(1 == '1'); // Vai comparar somente os valores
 
 //Usarr somente com três iguais é melhor

//Operador Ternário
 let pontos = 100;
 let tipo = pontos > 100 ? 'premium' : 'comum';

 console.log(tipo);
//Operadores Lógicos

 console.log(false && true);
 console.log(true || false);
 console.log(!false);

//Falsy
// Undefined, null, 0, false, '', NaN- not a number
//Truthy
// O resto

let corPersonalizada= 'vermelho';
let corPadrao= 'gray';
let corPerfil= corPersonalizada||corPadrao; //Para no primeiro por curto circuito


console.log(corPerfil);
