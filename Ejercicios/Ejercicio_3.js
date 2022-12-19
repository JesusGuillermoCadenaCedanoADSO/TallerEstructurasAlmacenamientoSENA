const button = document.querySelector('.btn-Calcular');

function NumeroALetras(val){
    var answer = "";
    switch(val){
        case 0:
            answer = 'primer';
            break;
        case 1:
            answer = 'segundo';
            break;
        case 2:
            answer = "tercer";
            break;
        case 3:
            answer = 'cuarto';
            break;
        case 4:
            answer = 'quinto';
    }
    return answer;
}



function ingresar_vector(n_arreglo)
{
    var arreglo = [];
    var i = 0;
    var numero_ingresado = '';
    while(i <= 4){
        var numero = 0;
        numero_ingresado = NumeroALetras(Number(i));
         do{
            numero = prompt("digitar " +  numero_ingresado + " número de " + n_arreglo);
            if (numero == ''){
                alert('Ingresar número')
            }else{
                numero = Number(numero);
            }
            if (isNaN(numero)){
                alert('Ingresar número')
            }
        }while (isNaN(numero) || numero === ''); 
       
        numero = Math.round(numero);
        numero_mayor = Math.max.apply(null, arreglo); 
        if (numero >= numero_mayor){
            arreglo.push(numero);
            i += 1;
        }else{
            alert('Ingresar número mayor o igual que ' + numero_mayor)
        }
    }

    return arreglo;
}


function funcion_calcular(e)
{   e.preventDefault();
    document.getElementById("espacio_tabla_arreglos").innerHTML = "";
    document.getElementById("espacio_tabla_resultados").innerHTML = "";
    document.getElementById('espacio_tabla_arreglos').setAttribute("border","1px solid #000");
    document.getElementById('espacio_tabla_arreglos').setAttribute("align","center");
    document.getElementById('espacio_tabla_resultados').setAttribute("border","1px solid #000");
    document.getElementById('espacio_tabla_resultados').setAttribute("align","center");
    var vector_1 = ingresar_vector('vector 1');
    var vector_2 = ingresar_vector('vector 2');
    var vector_3 = [];
  
    for (var i = -1;i < vector_1.length;i++){
        if (i == -1){
            var hilera = document.getElementById('espacio_tabla_arreglos').insertRow(0);
            var celda_1 = document.createElement("th");
            var celda_2 = document.createElement("th");
            var textoCelda_1 = document.createTextNode("Arreglo_1");
            var textoCelda_2 = document.createTextNode("Arreglo_2");
        }else{
            var hilera = document.getElementById('espacio_tabla_arreglos').insertRow(i + 1);
            var celda_1 = document.createElement("td");
            var celda_2 = document.createElement("td");
            var textoCelda_1 = document.createTextNode(vector_1[i]);
            var textoCelda_2 = document.createTextNode(vector_2[i]);
            vector_3.push(vector_1[i]);
            vector_3.push(vector_2[i]);
        }
        celda_1.style.border = '1px solid blue';
        celda_1.style.padding = '5px';
        celda_1.style.background = "rgba(128, 255, 0, 0.3)";
        celda_2.style.border = '1px solid blue';
        celda_2.style.padding = '5px';
        celda_2.style.background = "rgba(128, 255, 0, 0.3)";
        celda_1.appendChild(textoCelda_1);
        celda_2.appendChild(textoCelda_2);
        hilera.appendChild(celda_1);
        hilera.appendChild(celda_2);
    }
    vector_3.sort(function(a, b){return a - b});
    for (var i =- 1;i < vector_3.length;i++){
        if (i == -1){
            var hilera_resultados = document.getElementById('espacio_tabla_resultados').insertRow(0);
            var celda = document.createElement("th");
            var textoCelda = document.createTextNode("Arreglo_combinado");
        }else{
            var hilera_resultados = document.getElementById('espacio_tabla_resultados').insertRow(i + 1);
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(vector_3[i]);
        }
        celda.style.border = '1px solid blue';
        celda.style.padding = '5px';
        celda.style.background = "rgba(128, 255, 0, 0.3)";
        celda.appendChild(textoCelda);
        hilera_resultados.appendChild(celda);
    }
    alert ('Fin del programa');
}

button.addEventListener("click",funcion_calcular);