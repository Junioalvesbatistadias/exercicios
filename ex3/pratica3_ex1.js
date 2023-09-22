function imprime_objeto(objeto) {
    var mensagem1 = `
    
<br>
{
<br>
"<span class='campo'>id</span>": ${objeto.id},
<br>
"<span class='campo'>userId</span>": ${objeto.userId},
<br>
"<span class='campo'>title</span>": ${objeto.title},
<br>
"<span class='campo'>body</span>": ${objeto.body}
<br>
}
<br>`
    return mensagem1;
}
async function getPostagem(id1) {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id1}`)
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            respjson1.innerHTML = imprime(json);
        });
}


function imprime_vetor(objeto) {
    var mensagem2;
    objeto.forEach(function (obj) {
        mensagem2 += `
<br>
{
<br>
"<span class='campo'>id</span>": ${obj.id},
<br>
"<span class='campo'>userId</span>": ${obj.userId},
<br>
"<span class='campo'>title</span>": ${obj.title},
<br>
"<span class='campo'>body</span>": ${obj.body}
<br>
},
<br>`
    });
    return mensagem;
}
async function getPostagens() {
    await fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            respjson2.innerHTML = imprime(json);
        });
}

    function imprime(objeto) {
        var mensagem3 = `
<br>

{
<br>
"<span class='campo'>id</span>": ${objeto.id},
<br>
"<span class='campo'>userId</span>": ${objeto.userId},
<br>
"<span class='campo'>title</span>": ${objeto.title},
<br>
"<span class='campo'>body</span>": ${objeto.body}
<br>
}
<br>`
        return mensagem3;
    }
async function postPostagens() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            title: 'Nova Postagem',
            body: 'Essa é a minha mais nova postagem! :D',
            userId: 1,
        }),
    })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            respjson3.innerHTML = imprime(json);
        });
}
function imprime(objeto) {
    var mensagem4 = `

<br>
{
<br>
"<span class='campo'>id</span>": ${objeto.id4},
<br>
"<span class='campo'>userId</span>": ${objeto.userId},
<br>
"<span class='campo'>title</span>": ${objeto.title},
<br>
"<span class='campo'>body</span>": ${objeto.body}
<br>
}
<br>`
    return mensagem4;
}
async function atualizarPostagens() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            id: 1,
            title: 'Minha Mais Nova Postagem',
            body: 'Essa é a atualização da minha mais nova postagem! :D',
            userId: 1,
        }),
    })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            respjson4.innerHTML = imprime(json);
        });
}


function imprime(objeto) {
    var mensagem5 = `
<br>
{
<br>
"<span class='campo'>id</span>": ${objeto.id},
<br>
"<span class='campo'>userId</span>": ${objeto.userId},
<br>
"<span class='campo'>title</span>": ${objeto.title},
<br>
"<span class='campo'>body</span>": ${objeto.body}
<br>
}
<br>`
    return mensagem5;
}
async function modificarPostagens(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            title: 'Essa é a modificação da minha mais nova postagem! :D',
        }),
    })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            respjson5.innerHTML = imprime(json);
        });
}
function imprime(objeto) {
    var mensagem6 = `
<br>
{
<br>
"<span class='campo'>id</span>": ${objeto.id},
<br>
"<span class='campo'>userId</span>": ${objeto.userId},
<br>
"<span class='campo'>title</span>": ${objeto.title},
<br>
"<span class='campo'>body</span>": ${objeto.body}
<br>
}
<br>`
    return mensagem6;
}
async function removerPostagem(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
    });
}
function imprime(objeto) {
    var mensagem7;
    objeto.forEach(function (obj) {
        mensagem7 += `
<br>
{
<br>
"<span class='campo'>id</span>": ${obj.id},
<br>
"<span class='campo'>userId</span>": ${obj.userId},
<br>
"<span class='campo'>title</span>": ${obj.title},
<br>
"<span class='campo'>body</span>": ${obj.body}
<br>
},
<br>`
    });
    return mensagem7;
}
async function filtrarPostagens(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            respjson7.innerHTML = imprime(json);
        });
}