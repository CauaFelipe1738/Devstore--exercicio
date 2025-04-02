//procura pelo parametro na barra do navegador
const queryString = window.location.search;
//parametros da url
const urlParams = new URLSearchParams(queryString);
//pegar o id do produto na barra de enderecos
var id = urlParams.get('idProd');
