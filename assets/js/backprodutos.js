//cria os vetores
var idsProds=[];
var descProds=[];
var precoProds=[];
var tamanhoProds=[];
var fotoProds=[];
var categoriaProds=[];

//informa ao navegador para chamar a função ao carregar pagina
window.onload=()=>{
    pesquisaProdutos();
}

function pesquisaProdutos(){
    limpa_vetores();
    //requisita o backend
    fetch('http://localhost/devstore--exercicio-main/produtos.php')
    //transforma a resposta do servidor
    .then(response=>response.json())
    .then(data=>{
        //captura as 2 listas do products-area
        const divProds = document.getElementById('products-area')
        const divSeen = document.getElementById('products-seen')
        //exclui conteudo atual
        divProds.replaceChildren();
        divSeen.replaceChildren();

        for(var i=0; i<data.lenght; i++){
            //push adiciona um item no final do vetor
            idsProds.push(data[i].idProd);
            descProds.push(data[i].descProd);
            precoProds.push(data[i].precoProd);
            categoriaProds.push(data[i].categoriaProd);
            tamanhoProds.push(data[i].tamanhoProd);
            fotoProds.push(data[i].fotoProd);
        }

        for(var j=1; j<idsProds.length; j=j+4){
            var id = idsProds[j];
            var desc = descProds[j];
            var tamanho = tamanhoProds[j];
            var preco = precoProds[j];
            var foto = fotoProds[j];
            var categoria = categoriaProds[j];

            //cria uma strings para o produto
            var cardProd = document.createElement('div');
            cardProd.setAttribute('class', 'product-item');
            cardProd.innerHTML = '<a href="./product.html?idProd='+id+'">'+
            '<div class="product-photo"'+'<img src="./assets/images/products/'+foto+'"/>'+
            '</div>'
        }
    })
}