/* 

Valores Primitivos (imutáveis) - string, number, boolean, undefined, null - valores copiados
Valores por Referência (mutável) - array, object, function - passados por referência (como se fosse um ponteiro)

*/

let a = [1, 2, 3];
let b = [...a] // Aqui vai fazer uma cópia de A
//let b = a; // Aqui vai ser por referência 

console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a,b);

const c = {
    nome: "Luiz",
    sobrenome: "Otávio",
};

//const d = c;
const d  = {...c};

c.nome = "João";

console.log(d);