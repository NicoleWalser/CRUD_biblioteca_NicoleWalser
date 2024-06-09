<?php
require_once  '../conexion/conexion.php';

class libro {

    function obtenerLibro(){
        $connection = connection();
        $sql = "SELECT * FROM libro";
        $respuesta = $connection->query($sql);
        $libro = $respuesta->fetch_all(MYSQLI_ASSOC);// array con clave y valor 
        return $libro;
    }

    function obtenerLibroFecha(){
        $connection = connection();
        $sql = "SELECT * FROM libro ORDER BY fecha ASC";
        $respuesta = $connection->query($sql);
        $libro = $respuesta->fetch_all(MYSQLI_ASSOC);// array con clave y valor 
        return $libro;
    }
    function obtenerLibroPrecio(){
        $connection = connection();
        $sql = "SELECT * FROM libro ORDER BY precio ASC";
        $respuesta = $connection->query($sql);
        $libro = $respuesta->fetch_all(MYSQLI_ASSOC);// array con clave y valor 
        return $libro;
        
    }

    public function crearLibro( $nombre, $fecha, $precio){
        $sql = "INSERT INTO libro VALUES(0, '$nombre', '$fecha' , $precio)";
        $connection = connection();
        $respuesta = $connection->query($sql);
        return $respuesta;
    }
  
    function eliminarLibro($id){
        $connection = connection();
        $sql = "DELETE FROM libro WHERE id ='$id';";
        $respuesta = $connection->query($sql);
        return $respuesta;
    }
    
    public function modificarLibro($id, $nombre, $fecha, $precio){
        $sql = "UPDATE libro SET id='$id',nombre ='$nombre',fecha= $fecha, precio= $precio WHERE id = $id";  
        $connection = connection();
        $respuesta = $connection->query($sql);
        return $respuesta;

}
}

    