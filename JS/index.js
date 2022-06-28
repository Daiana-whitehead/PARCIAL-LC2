const Btn = document.getElementById('btn');
var cant = document.getElementById('cant');
var capacidad = document.querySelector('capacidad');
var resultMessages = document.getElementById('resultMesaje');
const selectColor = document.getElementById('color');
var imageIphone = document.getElementById('img-color');
var stringvalidations = document.getElementById('error');
var inputNum = document.getElementById('number');


/*CAMBIO DE IMAGEN*/
selectColor.onchange = function(select) {
    imageIphone.src = "IMG/iphone13/" + select.target.value + ".png";

}

/*CALCULAR PRECIO*/
Btn.onclick = function calculatePrice(cant, precio) {
    document.getElementById(resultMessages).style.display = 'block';

    var precio;
    switch (capacidad) {
        case "128":
            precio == 150.000 * cant;
            document.write('<h3>Cotizacion: $', { precio }, '</h3>');
            break;
        case "256":
            precio == 165.000 * cant;
            document.write('<h3>Cotizacion: $', { precio }, '</h3>');
            break;
        case "512":
            precio == 180.000 * cant;
            document.write('<h3>Cotizacion: $', { precio }, '</h3>');
            break;
    }
    return (precio);
}

/*VALIDACIONES*/
Btn.onclick = function validaciones() {
    document.getElementById(error).style.display = 'none';

    if (selectColor == "") {
        /* stringvalidations += '<h2>Error: ingresar valores validos</h2>';*/
        document.getElementById("error").style.display = 'block';
    }
    if (capacidad == "") {
        /*stringvalidations += '<h2>Error: ingresar valores validos</h2>';*/
        document.getElementById("error").style.display = 'block';
    }
    if (cant == "") {
        /*stringvalidations += '<h3>Cotizacion: $', { precio }, '</h3>';*/
        document.getElementById("error").style.display = 'block';
    } else {
        document.getElementById("resultMessages").style.display = 'block';
    }
    return;
}