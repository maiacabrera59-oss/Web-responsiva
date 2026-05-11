alert ("Bienvenidos");
console.log("¡Hola!"); 

document.querySelector("h1").innerHTML = "¡CAMBIAMOS EL TÍTULO!"; //camniamos el titulo del h1 a través de js

document.querySelector('#boton').onclick = function(){
    document.body.style.backgroundColor = "lightblue"; //cambiamos el fondo a través de js

}