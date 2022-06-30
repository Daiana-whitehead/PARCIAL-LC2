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
Btn.onclick = function calculatePrice(cant, precio, selectColor, capacidad, ResultMessages, stringvalidations) {
    var precio;
    document.getElementById("error").style.display = "block";
    /*VALIDACIONES*/

    if (selectColor == "" || capacidad == "" || cant == "") {
        stringvalidations.innerHTML += ('<h2 class= "error">Error: ingresar valores validos</h2>');
    }
    if (!capacidad == "") {
        switch (capacidad) {
            case "128":
                precio == 150.000 * cant;
                break;
            case "256":
                precio == 165.000 * cant;
                break;
            case "512":
                precio == 180.000 * cant;
                break;
        }
        ResultMessages.innerHTML += ('<h3 class: "precio">Cotizacion: $', { precio }, '</h3>');
    }
}