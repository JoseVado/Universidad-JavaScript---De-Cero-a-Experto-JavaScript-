let miFuncion = function () {
    console.log("Saludos desde mi función");
}

//const mifuncionFlecha = () => {
//console.log("Saludos desde mi función flecha");
//}

const mifuncionFlecha = () => console.log("Saludos desde mi función flecha");

miFuncion();
mifuncionFlecha();

//const saludar = () => {
//    return "Saludos desde función flecha";
//}

const saludar = () => "Saludos desde función flecha";

console.log(saludar());

const regresarObjeto = () => ({ nombre: "Juan", apellido: "Lara"});

console.log(regresarObjeto());

//const funcionConParaetros = (mensaje) => console.log(mensaje);

const funcionConParaetros = mensaje => console.log(mensaje);

funcionConParaetros("Saludos con parametros");

const suma = (x, y) => x + y;
console.log(suma(3, 4));



