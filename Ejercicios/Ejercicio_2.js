const button = document.querySelector('.btn-Calcular');

function NumeroALetras(val){
    var answer="";
    switch(val){
        case 0:
            answer='primer';
            break;
        case 1:
            answer='segunda';
            break;
        case 2:
            answer="tercera";
            break;
        case 3:
            answer='cuarta';
            break;
        case 4:
            answer='quinta';
            break;
        case 5:
            answer='sexta';
            break;
        case 6:
            answer='séptima';
            break;
        case 7:
            answer='octava';
            break;
        case 8:
            answer='novena';
            break;
        case 9:
            answer='décima';
    }
    return answer;
}

function funcion_calcular(e)
{
    e.preventDefault();
    var ListaEdades = "";
    var i = 0;
    var arreglo = [];
    var suma_edades = 0;
    var menores = 0;
    var mayores = 0;
    var adultos_mayores = 0;
    var persona_ingresada = 0;

    while(i<=9){
        var numero = 0;
         do{
            numero = Number(prompt("digitar " + NumeroALetras(Number(i)) +" edad entre 1 y 120 años"));
            if (isNaN(numero)){
                alert('Ingresar valor numérico')
            }
            if(numero < 1 || numero > 120){
                alert('Ingresar número entre 1 y 120')
            }
        }while (isNaN(numero) || numero < 1 || numero > 120); 
       
        numero = Math.round(numero);
        if (numero <= 18){
            menores += 1;
        } else if (numero < 60){
            mayores += 1;
        } else {
            adultos_mayores += 1;
        }
        console.log(numero);
        arreglo.push(numero);
        suma_edades += numero;
        persona_ingresada = Number(i) + 1;
        ListaEdades += "persona ingresada : " + persona_ingresada + " edad : " + numero + "<br>";
        console.log(ListaEdades);
        i += 1;
    };

    mayor_edad = Math.max.apply(null, arreglo);
    menor_edad = Math.min.apply(null, arreglo);
    promedio_edades = suma_edades / 10;
    console.log('numero de menores :' + menores);
    console.log('numero de adultos mayores :' + adultos_mayores);
    console.log('numero de mayores :' + mayores);
    console.log('mayor edad :' + mayor_edad);
    console.log('menor edad :' + menor_edad);
    console.log('promedio de edades :' + promedio_edades);

    document.getElementById("Resultados").innerText = 'RESULTADOS';
    document.getElementById("Lista_Edades").innerHTML = ListaEdades;
    document.getElementById("Numero_Menores").innerText = 'La cantidad de menores de edad (edad <= 18) es: ' + menores;
    document.getElementById("Numero_Mayores").innerText = 'La cantidad de mayores de edad (18 < edad < 60) es: ' + mayores;
    document.getElementById("Numero_Adultos_Mayores").innerText = 'La cantidad de adultos mayores de 59 años de edad es: ' + adultos_mayores;
    document.getElementById("Menor_Edad").innerText = 'La menor edad es: ' + menor_edad;
    document.getElementById("Mayor_Edad").innerText = 'La mayor edad es: ' + mayor_edad;
    document.getElementById("Promedio").innerText ='El promedio de edad es: ' + promedio_edades;


    alert ('Fin del programa');
}

button.addEventListener("click",funcion_calcular);