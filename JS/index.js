const Btn = document.getElementById('btn');
var capacidad = document.getElementById('capacidad');
var ResultMessages = document.getElementById('resultMessaje');
const selectColor = document.getElementById('color');
var imageIphone = document.getElementById('img-color');
var stringvalidations = document.getElementById('error');
var inputNum = document.getElementById("number");

/*CAMBIO DE IMAGEN*/
selectColor.onchange = function(select) {
    imageIphone.src = "IMG/iphone13/" + select.target.value + ".png";
}

/*CALCULAR PRECIO*/
Btn.onclick = function calculatePrice() {
    debugger;
    var cant = inputNum.value;
    var valuetCap = capacidad.value;
    var valueColor = selectColor.value;


    /*VALIDACIONES*/
    if (valueColor == 0 || valuetCap == 0 || cant <= 0 || cant > 10) {
        stringvalidations.innerHTML = '<h2>Error: ingresar valores validos</h2>';
        stringvalidations.style.display = "block";
        return;
    }

    switch (valuetCap) {
        case "128":
            var precio = 150000 * cant;
            ResultMessages.innerHTML = ' <h3>Cotizacion: $ ' + precio + '</h3>';
            ResultMessages.style.display = "block";
            break;
        case "256":
            var precio = 165000 * cant;
            ResultMessages.innerHTML = ' <h3>Cotizacion: $' + precio + '</h3>';
            ResultMessages.style.display = "block";
            break;
        case "512":
            var precio = 180000 * cant;
            ResultMessages.innerHTML = ' <h3>Cotizacion: $' + precio + '</h3>';
            ResultMessages.style.display = "block";
            break;
    }
}