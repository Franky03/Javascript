function criaP () {
    // Criar elemento
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid){
    const resultado = document.querySelector(".result");
    resultado.innerHTML = '';
    
    const p = criaP();

    if (isValid){ p.classList.add('paragrafo-resultado') }
    else { p.classList.add('bad') }

    p.innerHTML = msg;
    resultado.appendChild(p);
}

function getIMC(peso, altura){
    return (peso / (altura * altura)).toFixed(1);
}

function getImcClass(imc){
    const nivel = ["Abaixo do peso", "Peso normal", "Sobrepeso", 
                    "Obesidade grau 1", "Obesidade grau 2", "Obesidade grau 3"]

    if(imc >= 39.9) return nivel[5];
    if(imc >= 34.9) return nivel[4];
    if(imc >= 29.9) return nivel[3];
    if(imc >= 24.9) return nivel[2];
    if(imc >= 18.5) return nivel[1];
    if(imc < 18.5) return nivel[0];
}

//Capturar evento de submit

const form = document.querySelector("#form");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    //const peso = parseFloat(document.querySelector("#peso").value);
    //const altura = parseFloat(document.querySelector("#altura").value);

    const inputPeso = e.target.querySelector("#peso");
    const inputAltura = e.target.querySelector("#altura");

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    
    if (!peso){
        setResultado('Peso Inválido', false);
        return;
    }

    if (!altura){
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getIMC(peso, altura);
    const resultImc = getImcClass(imc);

    const result = `Seu IMC é ${imc} (${resultImc})`;

    setResultado(result, true);

})