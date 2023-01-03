// let num1= prompt('Digite um número');
// let num2= prompt('Digite o segundo número');

// alert(`O valor foi ${Number(num1) + Number(num2)}`);

let varA= 'A';
let varB= 'B';
let varc= 'C';

console.log(varA, varB, varc);

let aux;

// aux = varA;
// varA = varB;
// varB= varc;
// varc = aux;

[varA, varB, varc] = [varB, varc, varA];

console.log(varA, varB, varc);

let string= "posso usar aspas \"ASSIM\" igual C, \\ \\ ";
string= 'um texto um';


// charAt é para pegar o elemento que está na posição X
console.log(string.charAt(4));
// concatenar strings
console.log(string.concat(' concatenado'));
// index de algo
console.log(string.indexOf('um'));
// index de algo a partir de um indice
console.log(string.indexOf('um', 3));
// começando do final 
console.log(string.lastIndexOf('um'));
// match e search (encontrar expressões regulares na string)
console.log(string.match(/[a-z]/g));
console.log(string.search(/[x]/g));
// replace
console.log(string.replace('um', 'outro'));
string= 'o rato roeu a roupa do rei de roma.';
console.log(string.replace(/r/g, 'l'));
// tamanho 
console.log(string.length);
//slice da string
console.log(string.slice(-5));
console.log(string.slice(2,6));
console.log(string.slice(-5, -1));
//split
let x=4;
console.log(string.split(' ', x));
