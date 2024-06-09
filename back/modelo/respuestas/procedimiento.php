<?php
/*public function agregarprocedimiento($nombre, $descripcion, $pieza, $sector, $idpaciente, $fecha,)
$sql = "INSERT INTO procedimiento(pieza, sector, nombre, idpaciente, fecha, descripcion, estado"
$connection = connection();
$respuesta = $connection->querry($sql);
if ($respuesta) {
return new respuesta(true, "procedimiento agregado", $respuesta);
}else{
    return new respuesta(false,"error al agregar el procedimiento", $respuesta);

}

/*




?>