import axios from "axios"

const blogFetch = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        "Content-Type": "application/json",
        //pode enviar qualquer coisa pelo cabeçalho, poderia ser o token de uma api, isso permite uma comunicação do front com o servidor
    },
});

export default blogFetch;