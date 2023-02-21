const data = new Date();

const dayText = document.querySelector(".day-text");

//console.log(formataData(data));
dayText.innerHTML = formataData(data);

console.log(data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short'}));
//dayText.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short'});


function zeroAEsquerda(num){
    return num>=10 ? num : `0${num}`;
}

function getWeekDay(data){
    const dia = data.getDay();
    const dias = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 
                'Quarta-Feira', 'Quinta-Feira', 
                'Sexta-Feira', 'Sábado'];

    const day = dias[dia];

    return day;
}

function getMonthName(month){
    const months = [
        'Janeiro','Fevereiro', 'Março', 'Abril',
        'Maio', 'Junho', 'Julho', 'Agosto',
        'Setembro', 'Outubro', 'Novembro','Dezembro',
    ]

    return months[month];
}

function formataData(data){
    const dia = data.getDate();
    const mes = data.getMonth();
    const ano = data.getFullYear();
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());

    return ` ${getWeekDay(data)}, 
            ${dia} de ${getMonthName(mes)} de ${ano} \n ${hora}:${min}`;
}
