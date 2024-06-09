window.onload = () => {
    obtenerLibro()
}
let listadelibro=[]
async function obtenerLibro(){
    let url ="http://localhost/CRUD_biblioteca_NicoleWalser/back/controlador/cont_libro.php?function=obtener";
    let consulta = await fetch(url);
    let datos = await consulta.json();
    console.log(datos)
    listadelibros=datos;
    mostrarLibro(datos) 
}
function mostrarLibro(libro){
    let tbodyElement = document.querySelector("#cuerpotablaEliminar")
    tbodyElement.innerHTML=""
    for(let i=0; i < libro.length;i++){
     tbodyElement.innerHTML+=`
     <tr>
        <td>${libro[i].id}</td>
        <td>${libro[i].nombre}</td>
        <td>${libro[i].fecha}</td>
        <td>${libro[i].precio}</td>
        <td><button onclick="eliminarLibro('${libro[i].id}')">eliminar</button></td>
        </tr>
        `;
        
        
        
    }
}
async function eliminarLibro(id){
    let formdata = new FormData();
    formdata.append("id",id);
    let  url='http://localhost/CRUD_biblioteca_NicoleWalser/back/controlador/cont_libro.php?function=eliminar';      
        
        let config = {
            method: 'POST', // Corregido el nombre del método
            body: formdata
        };

        let respuesta = await fetch(url, config);
        let datos = await respuesta.json();

        if(datos){
            alert("se elimino el libro")
        obtenerLibro()    
        }else{
            alert("no se elimino el libro")
        }
}

