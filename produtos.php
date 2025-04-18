<?php
    header("Content-Type:application/json");
    header("charset=utf-8");
    //chama a conexao
    include 'db.php';
    //recebe a inquisição
    $method = $_SERVER['REQUEST_METHOD'];
    //armazena os dados enviados
    $input = json_decode(file_get_contents('php://input'), true, JSON_UNESCAPED_UNICODE);
    //verifica o metodo
    switch($method){
        case 'GET':
            if(isset($_GET['descProd'])){
                handleGetFiltro($pdo);
            }else if(isset($_GET['idProd'])){
                handleGetFiltroID($pdo);
            }else if(isset($_GET['categoriaProd'])){
                handleGetFiltroCategoria($pdo);
            }else{handleGet($pdo);}
    }

    function handleGet($pdo){
        //parametros do GET
        $sql  = "SELECT * FROM tblProdutos";
        //prepara a execução
        $stmt = $pdo->prepare($sql);
        //executa
        $stmt->execute();
        //variavel para armazenar os resultados
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        //exibe um formato json
        echo json_encode($result, JSON_UNESCAPED_UNICODE);
    }

    function handleGetFiltroID($pdo){
        //pega variavel com filtro
        $filtro = $_GET['idProd'];
        //sql para consulta
        $sql = "SELECT * from tblProdutos where idProd='$filtro'";
        //prepara a execucao
        $stmt = $pdo->prepare($sql);
        //executa o comando sql
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        //exibe os dados em formato JSON
        echo json_encode($result, JSON_UNESCAPED_UNICODE);
    }

    function handleGetFiltroCategoria($pdo){
        //captura o valor do filtro
        $filtro = $_GET['categoriaProd'];
        $sql = "SELECT * FROM tblProdutos WHERE categoriaProd = '$filtro'";
        $stmt = $pdo->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result, JSON_UNESCAPED_UNICODE);
    }
?>