function zeroAEsquerda(num){
    return num>=10 ? num : `0${num}`;
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data= new Date();
const dataBrasil = formataData(data);

console.log(dataBrasil);

function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando instância de Date.');
    }

    if(!data){
        data = new Date();
    }

    return data.toLocaleString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const newData = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(hora);

} catch (e) {
    console.log(e);
} finally {
    console.log("eh isso");
}