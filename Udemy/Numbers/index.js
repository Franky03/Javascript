let num1= 0.7;
let num2= 0.1;


//Com calculo
num1 = (num1*100 + num2*100) /100;
console.log(num1);

console.log('\n');

num1 += num2// 0.8
console.log(num1);
num1 += num2// 0.9
console.log(num1);
num1 += num2// 1.0

//IEEE 754-2008
console.log(num1);
console.log('\n');

//num1= num1.toFixed(2);
console.log(num1);
console.log(Number.isInteger(num1)); // False
console.log(Number.isInteger(1.00)); // True

console.log('\n');

num1= parseFloat(num1.toFixed(2));
console.log(num1);
console.log(Number.isInteger(num1)); // True
console.log(Number.isInteger(1.00)); // True

console.log('\n');


// num1= 10;
// num2= 10.123434324;

//Para string:
// console.log(num1.toString() + 12);
//String binária
// console.log(num1.toString(2));
// for(let i=0; i<=12; i++){
//     console.log(i.toString(2) + ' ' + i);
// }
//Arredondar um número
// console.log(num1.toFixed(2)); // numero de casas decimais como parametro 
//Saber se um numero é inteiro
// console.log(Number.isInteger(num1));
// console.log(Number.isInteger(num2));
// is a NAN ?
// let temp= num1 * 'Ola';
// console.log(Number.isNaN(temp));