const bloco = document.querySelector(".container");
const div = document.createElement('div');

const elementos = [
    {tag: 'p', text: 'Frase 1'},
    {tag: 'div', text: 'Frase 2'},
    {tag: 'section', text: 'Frase 3'},
    {tag: 'footer', text: 'Frase 4'},
];

function addElemt(element){
    let { tag, text } = element;
    const toAdd = document.createElement(tag);
    //toAdd.innerText = text;
    
    let textoCriado = document.createTextNode(text);
    toAdd.appendChild(textoCriado);

    div.appendChild(toAdd);
}

for(let i=0; i< elementos.length; i++){
    addElemt(elementos[i]);
}

bloco.appendChild(div);

 