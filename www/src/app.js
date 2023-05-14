"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Creamos la lista de categorias de libros.
const categorias = [
    "De texto",
    "De consulta o referencia",
    "Recreativos",
    "Científicos ",
    "Instructivos ",
    "Libros literarios y lingüísticos",
    "Técnicos ",
    "Religiosos",
    "Poéticos",
    "Aventura",
    "Biográficos ",
    "Didácticos",
    "Viajes ",
    "Artísticos ",
    "Autoayuda",
    "De materiales auxiliares"
];
//Agregamos todos los elementos de la lista de categorias en el select.
const selectcategoria = document.getElementById("selcat");
categorias.forEach((cateria) => {
    let cattemp = document.createElement("option");
    cattemp.text = cateria;
    cattemp.value = cateria;
    selectcategoria.appendChild(cattemp);
    //console.log( "Categoria: "+cateria +" agregada.");
});
//Creamos el array Libros de tipo Libro para almacenar todos los libros creados.
let Libros = [];
//Obtenemos los elementos HTML 
const inputtitulo = document.getElementById("titulolibro");
const formulario = document.querySelector("form");
let vrating = document.getElementById("vrating"); //usada en onChangeRating.
let nuevolibro; //array para almacenar el libro nuevo.
let catnew, desnew, valnew, precnew;
//Creamos la funcion que agrega el libro al array de Libros.
function agregaLibro(titulonew) {
    console.log("Agregando libro." + titulonew);
    if (titulonew != "") {
        console.log(" libro." + titulonew + " cat :" + selectcategoria.value);
        catnew = document.getElementById("selcat");
        desnew = document.getElementById("descipcionlibro");
        valnew = document.getElementById("valoracionlibro");
        precnew = document.getElementById("preciolibro");
        nuevolibro = {
            titulo: titulonew,
            categoria: catnew.value,
            descricion: desnew.value,
            valoracion: Number(valnew.value),
            precio: Number(precnew.value)
        };
        //Añadimos el nuevo libro en el array de Libros.
        Libros.push(nuevolibro);
        // console.log("titulo :"+nuevolibro.titulo +" Agredo en :"+JSON.stringify(Libros));
    }
    else {
        alert("Debes introducir el titulo del libro.");
        return;
    }
    //Ponemos el formulario con los valores por defecto.
    formulario.reset();
    valnew.style.setProperty('--value', "1");
    onChangeRating("1");
    //Mostramos la lista de libros del array Libros.
    muestraLibreria();
}
;
//Función que muestra la lista de libros del array Libros.
const libreria = document.getElementById("divlibreria");
const muestraLibreria = () => {
    console.log("nodos " + libreria.children);
    //Borramos la lista existente.
    if (libreria.hasChildNodes()) {
        libreria.innerHTML = "";
    }
    ;
    //recorremos el array de Libros para mostrar la lista completa.
    for (let nlibro in Libros) {
        let newlibro = document.createElement("ul");
        //Agregamos los detalles del libro.
        newlibro.innerHTML = '<h3>' + Libros[nlibro].titulo + '</h3>' +
            '<li> Categoria: ' + Libros[nlibro].categoria + '</li>' +
            '<li> Descripción: ' + Libros[nlibro].descricion + '</li>' +
            '<li> Valoración: ' + Libros[nlibro].valoracion + '</li>' +
            '<li> Precio: ' + Libros[nlibro].precio + '€</li><br/>';
        //agregamos el libro con los detalles en la lista de libros.
        libreria.appendChild(newlibro);
    }
    ;
};
//Función que controla el valor de la valoración.
const onChangeRating = (valor) => {
    vrating.textContent = valor;
};
//# sourceMappingURL=app.js.map