function esperar(segundos){
    return new Promise(function(resolve, reject){
        setTimeout(resolve, segundos * 1000) //chega em milissegundos
    })
}

function funcaoSuperCustosa(){
    return new Promise(function(resolve, reject){ // funcao anonima (callback)
        //vai rodar de forma assicrona
        const resultado = 15 + 13
        resolve(resultado)
    })
}
/*
//COM O THEN

esperar(5).then(function(){
    console.log("Passou-se 5 segundos e foi assincrono a execucao e nao travou resto da aplicacao")
})

// console.log(funcaoSuperCustosa()) 
//vai imprirmir somente a promise

funcaoSuperCustosa().then(function (resultado) { //then funciona como callback
    console.log(resultado)
})
//vai imprimir o resultado agora

*/

//COM O ASYNC AWAIT

// async function principal() { //JÁ É, uma PROMISE
//     esperar(5)
//     console.log("Passou-se 5 segundos")
// }

// principal() 
// nesse exemplo a cima, o console log nao esperou o wait, como fazer ele esperar a promise ser resolvida?
// com AWAIT

async function principal() { //JÁ É, uma PROMISE
   await esperar(5)
    console.log("Passou-se 5 segundos")
}

principal()
