"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import {} from 'typescript';
var categorias = ["Sin categoria",
    "De texto",
    "De consulta o referencia",
    "Recreativos",
    "Científicos ",
    "Instructivos ",
    "Libros literarios y lingüísticos",
    "Técnicos ",
    "Religiosos",
    "Poéticos",
    "Biográficos ",
    "Didácticos",
    "Viajes ",
    "Artísticos ",
    "Autoayuda",
    "De materiales auxiliares"];
categorias.forEach(function (cateria) {
    console.log("Categoria: " + cateria);
});
var Libros;
var inputtitulo = document.getElementById("titulolibro");

//Creamos la funcion para agregar nuevos libros en el array Libros.
var nuevolibro;
function agregaLibro(titulo) {
    console.log("Agregando libro." + titulo);
    if (titulo != "") {
        inputtitulo.value;
        titulo = inputtitulo.value;
        nuevolibro.titulo = titulo;
        nuevolibro.categoria  = document.getElementById("categoria")
    }
    else {
        alert("Debes introducir el titulo del libro.");
    }
    var categoria = document.getElementById("categoria");
}
;
