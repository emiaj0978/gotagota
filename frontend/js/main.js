// EVENTOS EN JAVASCRIPT (CLICK, CARGAR, KEY,)
document.addEventListener("DOMContentLoaded", () => {
    fetch('http://localhost:8080/api/clientes')
        .then(response => response.json())
        .then(data => {

            //console.log('Datos:', data);
            const elemento = document.getElementById("table-cliente")

            for (let i = 0; i < data.length; i++) {
                let cliente = data[i];
                let fila = `
                <tr>
                        <td>${cliente.id}</td>
                        <td>${cliente.nombre}</td>
                        <td>${cliente.apellido}</td>
                        <td>${cliente.dni}</td>
                        <td>${cliente.telefono}</td>
                        <td>${cliente.direccion}</td>
                        <td>
                                <!-- Botón Editar -->
                                <button 
                                    class="btn btn-outline-primary me-2">
                                    <i class="fas fa-edit"></i> Editar
                                </button>

                                <!-- Botón Eliminar -->
                                <button id="btnEliminar" data-idcliente = ${cliente.id} class="btn btn-outline-danger">
                                    <i class="fas fa-trash"></i> Eliminar
                                </button>
                            </td>
                </tr>
                        `;
                elemento.innerHTML += fila;
                //console.log(cliente)

            }
        });
    //DAR accion al boton
    const btnSaveCliente = document.getElementById("btn-crearcliente")
    btnSaveCliente.addEventListener("click", guardarCliente);
});

//evento de click en javascript
//creamos una variable que almacene el DOM de ese elemento
document.addEventListener("click", function (e) {
    const btnDelete = e.target.closest("#btnEliminar");
    if (btnDelete) {
        alert("Eliminando...");
        const id = btnDelete.dataset.idcliente;
        //console.log(id); para en cosole que id es nada mas
        //fletch("http://localhost:8080/api/clientes/"+id, {)
        fetch(`http://localhost:8080/api/clientes/${id}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (response.ok) {
                    alert('Cliente eliminado correctamente.');
                    // Recargar la página o actualizar la tabla
                    location.reload();
                } else {
                    alert('Error al eliminar el cliente.');
                }
            });
    }
});


// creamos una fucion basica
function guardarCliente() {
    const nombre = document.getElementById("c_nombre").value;
    const apellido = document.getElementById("c_apellido").value;
    const dni = document.getElementById("c_dni").value;
    const telefono = document.getElementById("c_telefono").value;
    const direccion = document.getElementById("c_direccion").value;
    fetch("http://localhost:8080/api/clientes", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify({ nombre, apellido, dni, telefono, direccion })
    }).then((response) => {
        console.log(response)
        if (response.ok) {
            location.reload()

        } else {
            alert("error: no se pudo guardar")
        }
    }).catch((e)=>{
        console.log(e) 
    });


}