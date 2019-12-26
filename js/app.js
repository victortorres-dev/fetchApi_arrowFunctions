/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Esta practica es para hacer uso de las arrow functions (la descripcion del proyecto se encuentra en el 
repositorio "fetchApi" -> Descripción: Using fetch API to load files with txt, JSON, REST api formats.) */

//FetchAPI: Cargando datos con formato txt

//Cargar datos en el boton "txtBtn"
document.getElementById('txtBtn').addEventListener('click', cargarTxt)

function cargarTxt() {
    fetch('datos.txt')
    .then(data => data.text())
    .then(printtext => document.getElementById('resultado').innerHTML = printtext)
    .catch (err => document.getElementById('error').innerHTML = `Definición del error: ${err.message}`)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//FetchAPI: Cargando datos con formato JSON

//Cargar datos en el boton "txtBtn"
document.getElementById('jsonBtn').addEventListener('click', cargarJson);

function cargarJson() {
    fetch('empleados.json')
    .then(datajson => datajson.json())
    .then(jsondata => {
        let html = '';
        jsondata.forEach(empleado =>{
            html += `<li>${empleado.nombre}, ${empleado.puesto}</li>`            
        });   
        document.getElementById('resultado').innerHTML = html;     
    })
    .catch(err => document.getElementById('error').innerHTML = `Definición del error: ${err.message}`)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//FetchAPI: Consumiendo una REST api

//Cargar datos en el boton "apiBTN"

document.getElementById('apiBTN').addEventListener('click', cargarApi);

function cargarApi() {
    fetch('https://picsum.photos/list')
        .then(datajsonApi => datajsonApi.json())
        .then(datajsonApiprint => {
            let html = '';
            datajsonApiprint.forEach(imagen => {
                html += `<li>
                                <a target="_blank" href="${imagen.post_url}">Ver Imagen</a>
                                ${imagen.author}
                         </li>`                
            }); 
            document.getElementById('resultado').innerHTML = html;
        })
}