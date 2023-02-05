function myscope(){
    const form = document.querySelector(".form");
    const result = document.querySelector(".result");

    const all = [];

    function recebeEvento(e){
        e.preventDefault();

        const nome = form.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const peso  = form.querySelector('.peso').value;
        const altura  = form.querySelector('.altura').value;
        
        all.push(
            {
            nome, 
            sobrenome, 
            peso, 
            altura
        });
        
        console.log(all);
        
        result.innerHTML += `<p>
                             ${nome.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase())}
                             ${sobrenome.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase())}
                             ${Number(peso)}
                             ${Number(altura)}
                             </p>
        `;
    };

    form.addEventListener('submit', recebeEvento);
}

myscope();