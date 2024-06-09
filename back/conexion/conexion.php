<?php
function connection (){
    $host = "localhost";
    $usuario = "root";
    $password = "";
    $bd = "biblioteca";
    $puerto = 3306; // puerto predeterminado
    $mysql = new mysqli($host,$usuario,$password, $bd, $puerto);// se crea la variable donde contenera la base de datos / puente 
    mysqli_report(MYSQLI_REPORT_OFF); // esepciones 
    return $mysql; // funcion devuelva algo 

}

?>