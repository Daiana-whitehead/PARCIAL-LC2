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
    var precio;
    switch (capacidad) {
        case "128":
            precio = 150.000 * cant;
            break;
        case "256":
            precio = 165.000 * cant;
            break;
        case "512":
            precio = 180.000 * cant;
            break;
    }
    return (precio * cant)
}

/*VALIDACIONES*/
Btn.onclick = function validaciones() {
    var stringvalidations = '';
    /*selectColor == "" || capacidad == "" || cant == ""*/
    if (stringvalidations(selectColor.value)) {
        stringvalidations += '<h2>Error: ingresar valores validos</h2>';
        document.write('<h2>Error: ingresar valores validos</h2>');
    }
    if (stringvalidations(capacidad.value)) {
        stringvalidations += '<h2>Error: ingresar valores validos</h2>';
        document.write('<h2>Error: ingresar valores validos</h2>');
    }
    if (stringvalidations(inputNum.value)) {
        stringvalidations += '<h3>Cotizacion: $', { precio }, '</h3>';
        document.write('<h3>Cotizacion: $', { precio }, '</h3>');
    }
    if (stringvalidations !== '') {
        resultMessages(stringvalidations);
        return;
    }
}