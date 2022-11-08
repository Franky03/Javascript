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

/*

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
*/

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

//If else and Switch case 
let condition= 10;

if (condition>=5) {
    console.log(condition);
} else if(condition<5 && condition>=3){
    console.log(condition);
} else{
    condition= 12;
}

let input= 6;

switch(input){
    case 1:
        input = 10;
        console.log(input);
        break;
    case 2:
        input+=1;
        console.log(input);
        break;
    case 5:
        input-=1;
        console.log(input);
        break;

    default:
        console.log("Nenhum caso.");
}

//For

for (let i=0; i<5; i++){
    console.log("Laço For");
}

// While

/*

while(true){
    input++;
    console.log(input);
    if(input>12){
        break;
    }
}
*/

input=6;
// Do while

/*
do{
    console.log(++input);
}while(input<12);

*/

//For-in

console.log("FOR IN");

const personagem = {
    nome: 'Jonata',
    idade: 25,
    poder: 'Força',
}

for(let chave in personagem){
    console.log(chave, personagem[chave]);
}

const cores= ["vermelho", "azul", "verde"];

for(let indice in cores){
    console.log(indice, cores[indice]);
}

//For-of

console.log("FOR OF");

for(let cor of cores){
    console.log(cor);
}

// Máximo entre valores

function maxArray(array){
    let maior= array[0];
    for(value of array){
        if (value> maior){
            maior= value;
        }
    }
    return maior;
}

console.log(maxArray([1,5,7,4,2,3]));

//Fizz Buzz

function fizzBuzz(num){
    if(typeof(num) != 'number'){
        return "Não é um número.";
    }

    if(num%3===0 && num%5===0){
        return "FizzBuzz";
    } else if(num%5==0){
        return "Buzz";
    } else if(num%3==0){
        return "Fizz";
    }
    else{
        return num;
    }
}

console.log(fizzBuzz(1))

function verificarVelocidade(velocidade){
    const velocMax = 70;
    if(velocidade <= velocMax)
        return 'OK';
    else{
        let pontos= Math.floor((velocidade-velocMax)/5);
        if (pontos>=12)
            return 'Carteira Suspendida';
        else
            return `Pontos: ${pontos}`
    }
}

console.log(verificarVelocidade(66))

const filme= {
    titulo: 'Vingadores',
    diretor: 'Stan Lee',
    ano: 2018,
    estrelas: 8,
    heroi: 'Thor',
}

function exibirPropriedade(obj){
    for(i in obj){
        if (typeof obj[i] === 'string')
            console.log(i, obj[i]);
    }
}

exibirPropriedade(filme);

function somar(limite){
    let multTres= 0;
    let multCinco=0;
    for(let i=0; i<=limite; i++){
        if(i%3===0){
            multTres+=i;
            continue
        }
        if(i%5===0){
            multCinco+=i;
        }
    }

    return multTres + multCinco;
}

console.log(somar(10));

