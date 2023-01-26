var alunos = ["Nome1", "Nome2", "Nome3"];
alunos[0] = "Nome4";
// alunos[alunos.length] = "Nome5"

alunos.push("Nome5");

alunos.unshift("Nome0");

console.log(alunos);

const removido_ultimo = alunos.pop();

console.log(alunos, removido_ultimo);

const removido_primeiro = alunos.shift();

console.log(alunos, removido_primeiro);

// Deixa o indice vazio 
delete alunos[1];
console.log(alunos);

alunos = ['Luiz', "Maria", "João"];
console.log(typeof alunos);
console.log(alunos instanceof Array);
// alunos.push("Luiza");
// alunos.push("Eduardo");

// console.log(alunos.slice(0,-1));
// console.log(alunos.slice(0,-2));