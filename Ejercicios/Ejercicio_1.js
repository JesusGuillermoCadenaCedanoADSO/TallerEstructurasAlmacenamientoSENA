const button = document.querySelector('.btn-Calcular');

function funcion_calcular(e)
{
    e.preventDefault();
    
    const FiguraSeleccionada =document.getElementById('figure').options[document.getElementById('figure').selectedIndex].text;
    console.log(FiguraSeleccionada);
    var perimetro = 0;
    var area = 0;
    if (FiguraSeleccionada == 'Triángulo rectángulo'){
        var a = prompt("Ingresar valor de longitud de cateto adyacente b en cm") * 1;
        var b = prompt("Ingresar valor de longitud de cateto opuesto a en cm") * 1;
        var c = Math.sqrt((Math.pow(a, 2) + Math.pow(b, 2)));
        perimetro = a + b + c;
        area = (b * a) / 2;
    } 
    else if(FiguraSeleccionada == 'Rectángulo'){
        var a = prompt("Ingresar valor de longitud de lado a en cm")*1;
        var b = prompt("Ingresar valor de longitud de lado b en cm")*1;
        perimetro = 2 * (a + b);
        area = b * a;
    } else if(FiguraSeleccionada == 'Cuadrado'){
        var a = prompt("Ingresar valor de longitud del lado en cm")*1;
        perimetro = 4 * a;
        area = a * a;
    } else if(FiguraSeleccionada == 'Círculo'){
        var r = prompt("Ingresar valor de longitud del radio r en cm")*1;
        perimetro = 2 * Math.PI * r;
        area = Math.PI * Math.pow(r, 2);
    } 
    perimetro = perimetro.toFixed(2);
    area = area.toFixed(2);
    console.log('perimetro :' + perimetro)
    console.log('area :' + area)
  
    document.getElementById("figura_seleccionada").innerText ='la Figura seleccionada es: ' + FiguraSeleccionada;
    document.getElementById("resultado_perimetro").innerText ='El perímetro es: ' + perimetro + ' cm';
    
    document.getElementById("resultado_area").innerText ='El área es: ' + area + ' cm ^ 2 ';
}

button.addEventListener("click",funcion_calcular);
