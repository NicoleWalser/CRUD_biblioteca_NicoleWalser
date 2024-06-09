<?php
header("Access-Control-Allow-Origin:*");

require_once '../modelo/mod_libro.php';

$function = $_GET['function']; 

switch ($function) {
    case "crear":
      crearLibro();
    break;
    case "eliminar":
     eliminarLibro();
    break;
    case "modificar":
        modificarLibro();
    break;
    case "obtener":
        obtenerLibro();
    break;
    case "obtenerfecha":
        obtenerlibroFecha();
    break;
    case"obtenerprecio":
        obtenerLibroPrecio();
    break;

}

function crearLibro(){
    $nombre = $_POST['nombre'];
    $fecha = $_POST['fecha'];
    $precio = $_POST['precio'];
    $resultado = (new libro())->crearLibro( $nombre, $fecha, $precio);
    echo json_encode($resultado);
 }

 function modificarLibro(){
    $id=$_POST['id'];
    $nombre = $_POST['nombre'];
    $fecha = $_POST['fecha'];
    $precio = $_POST['precio'];
    $resultado = (new libro())->modificarLibro($id, $nombre, $fecha, $precio);   
    echo json_encode($resultado) ;
}
function eliminarLibro(){
    $id = $_POST['id'];
    $resultado = (new libro())->eliminarLibro($id);
    echo json_encode($resultado);

}
function obtenerLibro(){
    $resultado = (new libro())->obtenerLibro();   
    echo json_encode($resultado);
}
function obtenerLibroFecha(){
    $resultado = (new libro())->obtenerLibroFecha();   
    echo json_encode($resultado);
}
function obtenerLibroPrecio(){
    $resultado = (new libro())->obtenerLibroPrecio();   
    echo json_encode($resultado);
}


 //que tiene que hacer la clase modelo 
//gestiona quien lo soluciona y lo manda al modelo  -->

?>
