//captura a barra de endereços do navegador
const queryString = window.location.search;
//procura por parametros
const urlParams = new URLSearchParams(queryString);
//variavel para pegar o parametro da categoria
var cat = urlParams.get('categoriaProd');
//declara os vetores para carrega os vetores
var idsProds=[];
var descsProds=[];
var precoProds=[];
var tamanhoProds=[];
var fotoProds=[];
var categoriaProds=[];

function limpa_vetores(){
    idsProds=[];
    descsProds=[];
    precoProds = [];
    tamanhoProds=[];
    categoriaProds = [];
    fotoProds = [];
}

window.onload=()=>{
    pesquisaProdutosCategoria();
}

function pesquisaProdutosCategoria(){
    limpa_vetores();

    //faz requisição do bd
    fetch('https://localhost/devstore/produtos.php?categoriaProd='+cat)
    .then(response=response.json())
    //manipula os dados vindos do json
    .then(data=>{
        //captura div dos produtos
        const divProds = document.getElementById('produtosGrid');
        //zera a grid de produtos
        divProds.replaceChildren();
        const qtde = document.getElementById('qtde');
        //captura o breadcrumb
        const breadcrumb = document.getElementById('breadcrumb');
        breadcrumb.replaceChildren();
        //novo breadcrumb
        breadcrumb.textContent = 'Home > '+cat;
        
    })

}