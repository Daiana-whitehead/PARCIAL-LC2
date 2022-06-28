const Btn = document.getElementById('btn');
var cant = document.getElementById('cant');
var capacidad = document.querySelector('capacidad');
var ResultMessages = document.getElementById('resultMesaje');
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

    var precio;
    switch (capacidad) {
        case "128":
            precio == 150.000 * cant;
            document.getElementById(ResultMessages).style.display = '', precio;
            break;
        case "256":
            precio == 165.000 * cant;
            document.getElementById(ResultMessages).style.display = '', precio;
            break;
        case "512":
            precio == 180.000 * cant;
            document.getElementById(ResultMessages).style.display = '', precio;
            break;
    }
    return (precio);
}

/*VALIDACIONES*/
Btn.onclick = function validaciones() {
    document.getElementById(error).style.display = 'none';

    if (selectColor == null) {
        stringvalidations.innerHTML = '<h2>Error: ingresar valores validos</h2>';

    }
    if (capacidad == null) {
        /*stringvalidations += '<h2>Error: ingresar valores validos</h2>';*/
        stringvalidations.innerHTML = '<h2>Error: ingresar valores validos</h2>';
    }
    if (cant == null) {
        /*stringvalidations += '<h3>Cotizacion: $', { precio }, '</h3>';*/
        stringvalidations.innerHTML = '<h2>Error: ingresar valores validos</h2>';
    } else {
        ResultMessages.innerHTML = ' <h3>Cotizacion: $</h3>', precio;
    }
    return;
}