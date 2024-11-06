function pesquisar() {
    let section = document.getElementById("resultados-pesquisa") //"busque o elemento pelo id dele". sempre que eu escrevo document é a forma que consigo acessar as coisas que estão no html.
console.log (section); //pelo que eu entendi, console.log serve para "imprimir" no console do google

let campoPesquisa = document.getElementById("campo-pesquisa").value

//se campoPesquisa for uma string sem nada
if (campoPesquisa == ""){
    section.innerHTML = "<p>Nada foi encontrado!</p>"
    return
}//nao executa nada

campoPesquisa = campoPesquisa.toLowerCase()

//inicializa uma string vazia para armazenar os resultados
let resultados = "";
let titulo = "";
let descricao = "";
let tags = "";


//para cada dado dentro da lista de dados
for(let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase
    //se no dado titulo includes campoPesquisa
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes (campoPesquisa)){
        //cria um novo elemento
        resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
        `;
     //entre crase "shift+acento".
    }  
}

if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>"
} //nao funcionou nao entendi pq

section.innerHTML = resultados
}

//acho q console log é tipo um debugmessage
//console.log(dados); //o colchetes aqui serve para mostrar qual o valor que eu quero mostrar. todas as listas começa do 0, então o [3] esta indefinido. O ponto descrição (".descricao") serve para aparecer somente essa variavel.

