<?php
    //nome do servidor
    $host="localhost";
    //nome do usuario
    $user="root";
    //senha
    $password="";
    //nome do banco
    $dbname="devstore"

    try{
        $pdo = new PDO("mysql:host=$host;dbname=$dbname;
        charset=UTF-8;", $user, $password);
        $pdo->setAttribute(PDO::ATTR_ERRORMODE, PDO::ERRORMODE_EXCEPTION);
    }catch (PDOException $e){
        die("Falha na conexão: ". $e->getMessage());
    }
