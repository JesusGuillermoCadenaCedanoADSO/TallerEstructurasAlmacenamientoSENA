const revealBtn = document.querySelector('.btn-Mostrar');
const hideBtn = document.querySelector('.btn-Terminar');
const ingresarBtn = document.querySelector('.btn-IngresarPersona');
const MostrarBtn = document.querySelector('.btn-Elegir');

const Formulario = document.querySelector('.espacio_formulario');
const ListadoPersonas = document.querySelector('.lista_personas');
const TablaResultados = document.querySelector('.espacio_tabla_resultados');


function revealContent(){
    Formulario.classList.add('btn-Mostrar')
}

function hideContent(){
    Formulario.classList.remove('btn-Mostrar')
    while (ListadoPersonas.hasChildNodes()) {
        ListadoPersonas.removeChild(ListadoPersonas.firstChild);
      }
    while (TablaResultados.hasChildNodes()) {
        TablaResultados.removeChild(TablaResultados.firstChild);
    }
    lista_personas = [];
}

revealBtn.addEventListener('click',revealContent);
hideBtn.addEventListener('click',hideContent);


var lista_personas = [];

function datos_persona(id,nombre,fecha,correo,ciudad_residencia,ciudad_origen,
    artista,cancion_1,cancion_2,cancion_3) {
    this.id = id;
    this.nombre = nombre;
    this.fecha = fecha;
    this.correo = correo;
    this.ciudad_residencia = ciudad_residencia;
    this.ciudad_origen = ciudad_origen;
    this.artista = artista;
    this.cancion_1 = cancion_1;
    this.cancion_2 = cancion_2;
    this.cancion_3 = cancion_3;
  }

function ingresar_a_tabla(e){
    e.preventDefault();
    var nombre = (document.querySelector('.nombre_persona').value);
    var identificacion = (document.querySelector('.id_persona').value);
    var fecha = (document.querySelector('.fecha_nacimiento').value);
    var correo = (document.querySelector('.correo_electronico').value);
    var ciudad_r = (document.querySelector('.ciudad_residencia').value);
    var ciudad_o = (document.querySelector('.ciudad_origen').value);
    var artista = (document.querySelector('.artista').value);
    var cancion_1 = (document.querySelector('.cancion_1').value);
    var cancion_2 = (document.querySelector('.cancion_2').value);
    var cancion_3 = (document.querySelector('.cancion_3').value);
    
    if (nombre === ''){
        alert('Digitar Nombre')
        document.querySelector('.nombre_persona').focus();
    }else if(identificacion === ''){
        alert('Digitar identificación')
        document.querySelector('.id_persona').focus();
    }else if(fecha === ''){
        alert('Digitar fecha')
        document.querySelector('.fecha_nacimiento').focus();
    }else if(correo === ''){
        alert('Digitar correo electrónico')
        document.querySelector('.correo_electronico').focus();
    }else if(ciudad_r === ''){
        alert('Digitar ciudad de residencia')
        document.querySelector('.ciudad_residencia').focus();
    }else if(ciudad_o === ''){
        alert('Digitar ciudad de origen')
        document.querySelector('.ciudad_origen').focus();
    }else if(artista === ''){
        alert('Digitar artista')
        document.querySelector('.artista').focus();
    }else if(cancion_1 === ''){
        alert('Digitar canción 1')
        document.querySelector('.cancion_1').focus();
    }else if(cancion_2 === ''){
        alert('Digitar canción 2')
        document.querySelector('.cancion_2').focus();
    }else if(cancion_3 === ''){
        alert('Digitar canción 3')
        document.querySelector('.cancion_3').focus();
    }else {
        if (lista_personas.length < 6){
            var node = document.createElement('li');
            node.setAttribute("class",'item_persona');
            node.appendChild(document.createTextNode(nombre));
            document.querySelector('.lista_personas').appendChild(node);
            var persona = new datos_persona(identificacion,
                nombre,fecha,correo,ciudad_r,ciudad_o,artista,cancion_1,cancion_2,cancion_3);
            lista_personas.push(persona);
        }else{
            alert("ha llegado al límite de 6 registros");
        }
    }
}

ingresarBtn.addEventListener("click",ingresar_a_tabla);



function mostrar_informacion(e){
    e.preventDefault();
    numero = prompt("digitar número de persona");
    if (numero === ''){
        alert('Ingresar número')
    }else{
        numero = Number(numero);
           if (isNaN(numero)){
            alert('Ingresar número')
        }else if (lista_personas[numero - 1] == null){
            alert("El número " + numero + " no se encuentra en la lista.")
        }else{
            crear_tabla(numero - 1);
        }
    }
}

MostrarBtn.addEventListener("click", mostrar_informacion);

encabezado = [
    "Identificación",
    "Nombre",
    "Fecha de nacimiento",
    "Correo electrónico",
    "Ciudad de residencia",
    "Ciudad de origen",
    "Artista preferido",
    "Primera canción",
    "Segunda canción",
    "Tercera canción"
]

function crear_tabla(indice){
    document.getElementById("espacio_tabla_resultados").innerHTML = "";
    document.getElementById('espacio_tabla_resultados').setAttribute("border","1px solid #000");
    document.getElementById('espacio_tabla_resultados').setAttribute("align","center");
    var hilera = document.getElementById('espacio_tabla_resultados').insertRow(0);

    for (var i = 0;i < encabezado.length;i++){
        var celda = document.createElement("th");
        celda.style.background = "rgba(128, 255, 0, 0.3)";
        var textoCelda = document.createTextNode(encabezado[i]);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
    }

    var hilera_2 = document.getElementById('espacio_tabla_resultados').insertRow(1);

    for (var i = 0;i < encabezado.length;i++){
        var celda = document.createElement("th");
        if (encabezado[i] == 'Identificación'){
            var textoCelda = document.createTextNode(lista_personas[indice].id);
        }else if ((encabezado[i] == 'Nombre')){
            var textoCelda = document.createTextNode(lista_personas[indice].nombre);
        }else if ((encabezado[i] == 'Fecha de nacimiento')){
            var textoCelda = document.createTextNode(lista_personas[indice].fecha);
        }else if((encabezado[i] == 'Correo electrónico')){
            var textoCelda = document.createTextNode(lista_personas[indice].correo);
        }else if((encabezado[i] == 'Ciudad de residencia')){
            var textoCelda = document.createTextNode(lista_personas[indice].ciudad_residencia);
        }else if((encabezado[i] == 'Ciudad de origen')){
            var textoCelda = document.createTextNode(lista_personas[indice].ciudad_origen);
        }else if((encabezado[i] == 'Artista preferido')){
            var textoCelda = document.createTextNode(lista_personas[indice].artista);
        }else if((encabezado[i] == 'Primera canción')){
            var textoCelda = document.createTextNode(lista_personas[indice].cancion_1);
        }else if((encabezado[i] == 'Segunda canción')){
            var textoCelda = document.createTextNode(lista_personas[indice].cancion_2);
        }else {
            var textoCelda = document.createTextNode(lista_personas[indice].cancion_3);
        }
        
        celda.appendChild(textoCelda);
        hilera_2.appendChild(celda);
    }

    console.log(lista_personas[indice]);
}