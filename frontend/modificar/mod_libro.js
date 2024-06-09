/*window.onload=()=>{
    obtenerLibro();
    modificarLibro();
  }
  
  async function obtenerLibro(){ 
    let url = "http://http://localhost/CRUD_biblioteca_NicoleWalser/back/controlador/cont_libro.php?function=obtener"
    let consulta = await fetch(url);
    let datos = await consulta.json();
    console.log(datos);
   MostrarLibro(datos)
  
  }
  
  function MostrarLibro(libro){
   let tbodyElement = document.querySelector("#TablaLibro")
   for (let i=0; i < libro.length; i++){
       tbodyElement.innerHTML+= `
           <tr>
               <td>${libro[i].id}</td>
               <td>${libro[i].nombre}</td>
               <td>${libro[i].fecha}</td>
               <td>${libro[i].precio}</td>
               <td><button onclick="CargarDatos('${libro[i].id}', '${libro[i].nombre}', '${libro[i].fecha}', '${libro[i].precio}')">Seleccionar</button></td>
       </tr>
       `;
  
    }
  }
    function CargarDatos(id, nombre, fecha, precio){

      let idinput = document.querySelector("#id");
        idinput.value = id;

      let nombreInput = document.querySelector("#nombre");
        nombreInput.value = nombre;
  
      let fechaInput = document.querySelector("#fecha");
        fechaInput.value = fecha;
  
      let precioInput = document.querySelector("#precio");
        precioInput.value = precio;
  }

  async function modificarLibro(){
    let formElement = document.querySelector("#formu")
  
    formElement.onsubmit = async (e) =>{
        e.preventDefault()
        let formData =  new FormData(formElement);
        let url = "http://localhost/CRUD_biblioteca_NicoleWalser/back/controlador/cont_libro.php?function=modificar"
  
        let config = {
            method: 'POST',
            body: formData
        }
  
        let respuesta = await fetch(url, config);
        let datos = await respuesta.json();
        location.reload();
        console.log(datos);
  }
}*/



window.onload = () => {
    obtenerLibro()
    agregareventoForm();


}

async function obtenerLibro() {
    let url = "http://localhost/CRUD_biblioteca_NicoleWalser/back/controlador/cont_libro.php?function=obtener";
    let consulta = await fetch(url);
    let datos = await consulta.json();
    listadelibro = datos;
    console.log(datos)
    mostrarLibros(datos)
}
function mostrarLibros(libro) {
    let tbodyElement = document.querySelector("#TablaLibro")
    tbodyElement.innerHTML = ""
    for (let i = 0; i < libro.length; i++) {
        tbodyElement.innerHTML += `
     <tr>
        <td>${libro[i].id}</td>
        <td>${libro[i].nombre}</td>
        <td>${libro[i].fecha}</td>
        <td>${libro[i].precio}</td>
        <td><button onclick="modificarLibro('${libro[i].id}', '${libro[i].nombre}', '${libro[i].fecha}', '${libro[i].precio}')">Modificar</button></td>
        </tr>
        `;



    }
}
function modificarLibro(id, nombre, fecha, precio) {
    //const libro = listadelibros.find(libro => libro.id === id);


    document.querySelector("#id_libro").value = id;
    document.querySelector("#nombre").value = nombre;
    document.querySelector("#fecha").value = fecha;
    document.querySelector("#precio").value = precio;

}
function agregareventoForm() {


    const formulario = document.querySelector("#formulario");
    const controlador = "http://localhost/CRUD_biblioteca_NicoleWalser/back/controlador/cont_libro.php?function=modificar"
    formulario.onsubmit = async function (e) {
        e.preventDefault();
        const formdata = new FormData(formulario);
        const respuesta = await fetch(controlador, {
            method: "post",
            body: formdata

        })
        const data = await respuesta.json();
        if (data) {
            alert("se modifico el libro")
            formulario.reset()
            obtenerLibro();
        }
        else {
            alert("no se pudo modificar el libro")
        }

    }
}