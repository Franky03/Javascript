function getWeekDay(data){
    let diaSemana = data.getDay();

    const dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const day = dias[diaSemana];

    return day;
}

const data = new Date('1987-04-24 00:00:00');
console.log(getWeekDay(data));


// switch(diaSemana){
//     case 0:
//         diaSemana = 'Domingo';
//         break;
// }