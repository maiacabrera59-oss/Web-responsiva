alert ("Bienvenidos");
console.log("¡Hola!"); 

document.querySelector("h1").innerHTML = "¡CAMBIAMOS EL TÍTULO!"; //cambiamos el titulo del h1 a través de js

document.querySelector('#boton').onclick = function(){
    document.body.style.backgroundColor = "lightblue"; //cambiamos el fondo a través de js
}
let nombre= "Curso de programación web";
let descripcion= "Aprendemos HTML,CSS y JavaScript.";
let precio= "$49.99";

document.getElementById("nombreProducto").innerHTML = nombre;
document.getElementById("descripcionProducto").innerHTML = descripcion;
document.getElementById("precioProducto").innerHTML = "Precio: " + precio;