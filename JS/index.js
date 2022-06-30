const Btn = document.getElementById('btn');
var capacidad = document.querySelector('capacidad');
var ResultMessages = document.getElementById('resultMesaje');
const selectColor = document.getElementById('color');
var imageIphone = document.getElementById('img-color');
var stringvalidations = document.getElementById('error');

/*CAMBIO DE IMAGEN*/
selectColor.onchange = function(select) {
    imageIphone.src = "IMG/iphone13/" + select.target.value + ".png";
}

/*CALCULAR PRECIO*/
Btn.onclick = function calculatePrice() {
    var inputNum = document.getElementById("number");
    var cant = inputNum.value;

    /*VALIDACIONES*/
    if (selectColor == 0 || capacidad == 0 || cant <= 0 || cant > 10) {
        stringvalidations.innerHTML = '<h2>Error: ingresar valores validos</h2>';
        stringvalidations.style.display = "block";
        return;
    }

    switch (capacidad) {
        case "128":
            precio == 150.000 * cant;
            ResultMessages.innerHTML += ' <h3 class="precio">Cotizacion: $ ', { total }, '</h3>';
            ResultMessages.style.display = "block";
            break;
        case "256":
            precio == 165.000 * cant;
            ResultMessages.innerHTML += ' <h3>Cotizacion: $', { precio }, '</h3>';
            ResultMessages.style.display = "block";
            break;
        case "512":
            precio == 180.000 * cant;
            ResultMessages.innerHTML += ' <h3>Cotizacion: $', { precio }, '</h3>';
            ResultMessages.style.display = "block";
            break;
    }
}