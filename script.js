alert ("Bienvenidos");
console.log("¡Hola!"); 

document.querySelector("h1").innerHTML = "¡CAMBIAMOS EL TÍTULO!"; //cambiamos el titulo del h1 a través de js

document.querySelector('#boton').onclick = function(){
    document.body.style.backgroundColor = "lightblue"; //cambiamos el fondo a través de js
}
let nombre= "Curso de programación web";
let descripcion= "Aprendemos HTML,CSS y JavaScript.";
let precio= "49.99";

document.getElementById("nombreProducto").innerHTML = nombre;
document.getElementById("descripcionProducto").innerHTML = descripcion;
document.getElementById("precioProducto").innerHTML = "Precio: $ " + precio;

let titulo= "Curso de programación web";
let descripcion= "Aprendemos HTML,CSS y JavaScript.";
let precio= "12.04";
let estado= "Disponible";

document.getElementById("tituloCurso").innerHTML = titulo;
document.getElementById("descripcionCurso").innerHTML = descripcion;
document.getElementById("precioCurso").innerHTML = "Precio: $ " + precio;
document.getElementById("estadoCurso").innerHTML = "Estado: " + estado;