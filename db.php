<?php
    //nome do servidor
    $host="localhost";
    //nome do usuario
    $user="root";
    //senha
    $password="";
    //nome do banco
    $dbname="devstore";

    try{
        $pdo = new PDO("mysql:host=$host;dbname=$dbname;", $user, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }catch (PDOException $e){
        die("Falha na conexão: ". $e->getMessage());
    }

?>