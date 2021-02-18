

for (let index = 0; index < cuadrado.length; index++) {
    cuadrado[index].addEventListener("mouseover", cambiarColor);
    cuadrado[index].addEventListener("mouseout", salirCuadrado);
    
}

function cambiarColor() {
    var cuadro = this;
    var color = cuadro.dataset.color;
    cuadro.style.backgroundColor = color;
}

function salirCuadrado() {
    var cuadro = this;
    var color = cuadro.dataset.salir;
    cuadro.style.backgroundColor = color;
}