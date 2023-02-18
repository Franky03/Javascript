const form = document.querySelector("#form");
const resultado = document.querySelector(".result");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const peso = parseFloat(document.querySelector("#peso").value);
    const altura = parseFloat(document.querySelector("#altura").value);

    let result = "";

    if (!isNaN(peso) && !isNaN(altura) && peso < 300) {
        const imc = (peso / (altura * altura)).toFixed(1);
        if (imc < 18.5) {
            result = "Abaixo do peso";
        }
        else if (imc >= 18.5 && imc < 25.0) {
            result = "Peso normal";
        }
        else if (imc >= 25.0 && imc < 30.0) {
            result = "Sobrepeso";
        }
        else if (imc >= 30.0 && imc < 35) {
            result = "Obesidade grau 1";
        }
        else if (imc >= 35.0 && imc < 40) {
            result = "Obesidade grau 2";
        }
        else {
            result = "Obesidade grau 3";
        }

        resultado.textContent = `Seu IMC é ${imc} (${result})`;
        resultado.style.backgroundColor = "#3F979B";
    }

    else if (!peso || peso>300) {
        resultado.textContent =  `Peso inválido`;
        resultado.style.backgroundColor = "#EFA3C8";
    }
    else if (peso && !altura){
        resultado.textContent =  `Altura inválida`;
        resultado.style.backgroundColor = "#EFA3C8";
    }

})