const frutas = ['Pera', 'Maçã', 'Uva'];

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otav',
    idade:30,
};

// For in -> lê os índicies ou chaves do objeto

for(let i in frutas){
    console.log(i)
}

for(let chave in pessoa){
    console.log(chave, pessoa[chave]);
}


//For of

for(let i of frutas){
    console.log(i);
}
// For each...

frutas.forEach(function (valor, indice) {
    console.log(indice, valor);
})