"use strict";
let curso = "Programación web";
let descripcion = "Aprende HTML, CSS y JavaScript.";
let precio = 150000;
let disponible = true;
let tituloCurso = document.querySelector("#tituloCurso");
let descripcionCurso = document.querySelector("#descripcionCurso");
let precioCurso = document.querySelector("#precioCurso");
let estadoCurso = document.querySelector("#estadoCurso");
if (tituloCurso) {
    tituloCurso.textContent = curso;
}
if (descripcionCurso) {
    descripcionCurso.textContent = descripcion;
}
if (precioCurso) {
    precioCurso.textContent = "Precio: $ " + precio;
}
if (estadoCurso) {
    if (disponible) {
        estadoCurso.innerHTML = "Cupos disponibles";
    }
    else {
        estadoCurso.innerHTML = "Curso completo";
    }
}
alert("Bienvenidos");
console.log("¡Hola!");
let boton = document.querySelector("#boton");
if (boton) {
    boton.onclick = function () {
        document.body.style.backgroundColor = "lightblue";
    };
}
