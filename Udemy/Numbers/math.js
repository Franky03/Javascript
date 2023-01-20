const numero = Number(prompt("Numero: "));

let titulo =  document.getElementById("number");
let texto = document.getElementById("texto");

titulo.innerHTML = numero

// texto.innerHTML = `<p>Raiz Quadrada: ${numero ** (1/2)}</p>\n
//                     <p>${numero} é inteiro: ${Number.isInteger(numero)}</p>\n
//                     <p>É NaN: ${Number.isNaN(numero)}</p>\n
//                     <p>Arrendondado para baixo: ${Math.floor(numero)}</p>\n
//                     <p>Arrendondado para cima: ${Math.ceil(numero)}</p>\n
//                     <p>Com duas casas decimais: ${numero.toFixed(2)}</p>\n`

texto.innerHTML = ''
texto.innerHTML += `<p>Raiz Quadrada: ${numero ** (1/2)}</p>`
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`
texto.innerHTML += `<p>Arrendondado para baixo: ${Math.floor(numero)}</p>`
texto.innerHTML += `<p>Arrendondado para cima: ${Math.ceil(numero)}</p>`
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`
