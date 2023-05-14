"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import {} from 'typescript';
let Libros;
console.log("Hola");
let nuevolibro;
function agregaLibro() {
    var _a;
    console.log("Agregando libro.");
    let titulo = (_a = document.getElementById("titulolibro")) === null || _a === void 0 ? void 0 : _a.textContent;
    if (titulo) {
        nuevolibro.titulo = titulo;
    }
    else {
        alert("Debes introducir el titulo del libro.");
    }
    let categoria = document.getElementById("categoria");
}
;
//# sourceMappingURL=app.js.map