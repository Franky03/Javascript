// let num1= prompt('Digite um número');
// let num2= prompt('Digite o segundo número');

// alert(`O valor foi ${Number(num1) + Number(num2)}`);

let varA= 'A';
let varB= 'B';
let varc= 'C';

console.log(varA, varB, varc);

let aux;

aux = varA;
varA = varB;
varB= varc;
varc = aux;

console.log(varA, varB, varc);