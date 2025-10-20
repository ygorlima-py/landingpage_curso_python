function requestPost(url, message){

    const body = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)    

    }

    fetch(url, body)

    .then(response => {
        if (!response.ok) { // Aqui captura erro 500 e 404 e 400, erro do servidor
            throw new Error ('Erro ao enviar dados' + response.status)
        }
        return response.json();
    })

    .then(retorno=> {
        console.log('server response', retorno);
    })

    // Só pega erro de rede, não pega erro 500, 400, 404
    .catch(erro => {
        console.error('Error connection or response', erro)
    });
}

export default requestPost


//Diferença:

//export default → importa sem chaves: import sendMessage from [apiservice.js](http://_vscodecontentref_/0)'
//export function → importa com chaves: import { sendMessage } from [apiservice.js](http://_vscodecontentref_/1)'
//Os dois funcionam! Você pode usar qualquer um. 👍


//Sem type="module", o navegador trata o script como um script comum e não permite usar import.

//Com essa alteração, o erro desaparece e o módulo funciona corretamente! ✅