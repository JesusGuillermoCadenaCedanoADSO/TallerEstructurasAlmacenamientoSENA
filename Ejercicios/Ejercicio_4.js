const revealBtn=document.querySelector('.btn-Mostrar');
const hideBtn=document.querySelector('.btn-Terminar');
const ingresarBtn = document.querySelector('.btn-IngresarPersona');
const MostrarBtn=document.querySelector('.btn-Elegir');

const hiddenContent = document.querySelector('.espacio_formulario');

function revealContent(){
    // if(hiddenContent.classList.contains('btn-Mostrar')){
    //     hiddenContent.classList.remove('btn-Mostrar')
    // } else {
    //     hiddenContent.classList.add('btn-Mostrar')
    // }
    hiddenContent.classList.add('btn-Mostrar')
}

function hideContent(){
    // if(hiddenContent.classList.contains('btn-Mostrar')){
    //     hiddenContent.classList.remove('btn-Mostrar')
    // } else {
    //     hiddenContent.classList.add('btn-Mostrar')
    // }
    hiddenContent.classList.remove('btn-Mostrar')
}

revealBtn.addEventListener('click',revealContent);
hideBtn.addEventListener('click',hideContent);


var lista_personas =[];

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
    var limite = true;
    if (document.getElementById("persona_1").innerHTML == ''){ 
        document.getElementById("persona_1").innerHTML = '1. ' + nombre;
    } else if (document.getElementById("persona_2").innerHTML == ''){
        document.getElementById("persona_2").innerHTML = '2. ' + nombre;
    } else if (document.getElementById("persona_3").innerHTML == ''){
        document.getElementById("persona_3").innerHTML = '3. ' + nombre;
    } else if (document.getElementById("persona_4").innerHTML == ''){
        document.getElementById("persona_4").innerHTML = '4. ' + nombre;
    } else if (document.getElementById("persona_5").innerHTML == ''){
        document.getElementById("persona_5").innerHTML = '5. ' + nombre;
    } else if (document.getElementById("persona_6").innerHTML == ''){
        document.getElementById("persona_6").innerHTML = '6. ' + nombre;
    } else {
        alert("ha llegado al límite de 6 registros");
    }
    
    if (lista_personas.length<6){
        var persona = new datos_persona(identificacion,nombre,fecha,correo,ciudad_r,ciudad_o,artista,cancion_1,cancion_2,cancion_3);
        lista_personas.push(persona);
    }
    //console.log(lista_personas);
    // console.log(persona1.nombre);
}

ingresarBtn.addEventListener("click",ingresar_a_tabla);



function mostrar_informacion(){
    numero = prompt("digitar número de persona");
    if (numero == ''){
        alert('Ingresar número')
    }else{
        numero = Number(numero);
           if (isNaN(numero)){
            alert('Ingresar número')
        }else if (lista_personas[numero-1] == null){
            alert("El número " + numero + " no se encuentra en la lista.")
        }else{
            crear_tabla(numero-1);
        }
    }
}

MostrarBtn.addEventListener("click", mostrar_informacion);

encabezado =[
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

    for (var i=0;i<encabezado.length;i++){
        var celda = document.createElement("th");
        var textoCelda = document.createTextNode(encabezado[i]);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
    }

    var hilera_2 = document.getElementById('espacio_tabla_resultados').insertRow(1);

    var propiedad_seleccionada = ['nombre'];
    //console.log(persona_seleccionada);

    for (var i=0;i<encabezado.length;i++){
        var celda = document.createElement("th");
        if (encabezado[i] =='Identificación'){
            var textoCelda = document.createTextNode(lista_personas[indice].id);
        }else if ((encabezado[i] =='Nombre')){
            var textoCelda = document.createTextNode(lista_personas[indice].nombre);
        }else if ((encabezado[i] =='Fecha de nacimiento')){
            var textoCelda = document.createTextNode(lista_personas[indice].fecha);
        }else if((encabezado[i] =='Correo electrónico')){
            var textoCelda = document.createTextNode(lista_personas[indice].correo);
        }else if((encabezado[i] =='Ciudad de residencia')){
            var textoCelda = document.createTextNode(lista_personas[indice].ciudad_residencia);
        }else if((encabezado[i] =='Ciudad de origen')){
            var textoCelda = document.createTextNode(lista_personas[indice].ciudad_origen);
        }else if((encabezado[i] =='Artista preferido')){
            var textoCelda = document.createTextNode(lista_personas[indice].artista);
        }else if((encabezado[i] =='Primera canción')){
            var textoCelda = document.createTextNode(lista_personas[indice].cancion_1);
        }else if((encabezado[i] =='Segunda canción')){
            var textoCelda = document.createTextNode(lista_personas[indice].cancion_2);
        }else {
            var textoCelda = document.createTextNode(lista_personas[indice].cancion_3);
        }
        
        celda.appendChild(textoCelda);
        hilera_2.appendChild(celda);
    }

    console.log(lista_personas[indice]);
}