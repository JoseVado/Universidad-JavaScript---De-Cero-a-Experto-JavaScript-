//Objetos
let x = 10;

let persona = {
    nombre: "Juan",
    apellido: "Perez",
    email: "jaun@gmail.com",
    edad: 22,
    nombreCompleto: function () {
        return this.nombre + " " + this.apellido;
     }
}

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.apellido);
console.log(persona.nombreCompleto());

console.log(persona);

//nuevo objeto
let persona2 = new Object();
persona2.nombre = "Carlos";
persona2.direccion = "Saturno";
persona2.telefono = "9019309471";

//Formas de acceder a propiedades
console.log(persona["nombre"]);

//for in
for (propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad]);
}

//agregar y eliminar propiedades
persona.tel = "934523452435";
console.log(persona);

delete persona.tel;
console.log(persona);

//Formas de imprimir un object para imprimir en navegadores web
console.log(persona.nombre + ", " + persona.apellido);

for (propiedad in persona) {
    console.log(persona[propiedad]);
}

let personaArray = Object.values(persona);
console.log(personaArray);

let personaString = JSON.stringify(persona);
console.log(personaString);

//Get y set
let persona3 = {
    nombre: "Juan",
    apellido: "Perez",
    email: "jaun@gmail.com",
    edad: 22,
    idioma: "mx",
    get lang() {
        return this.idioma.toUpperCase();    
    },
    set lang( lang ) {
        this.idioma = lang.toUpperCase();  
    },
    get nombreCompleto() {
        return this.nombre + " " + this.apellido;
     }
}
console.log(persona3.nombreCompleto);
console.log(persona3.lang);
persona3.lang = "en";
console.log(persona3.lang);
console.log(persona3.idioma);

//Constructores de objetos
// Contructor de personas
function Persona(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function () {
        return this.nombre + " " + this.apellido;
    }
}

//uso de prototype
Persona.prototype.tel = "89799797";

let padre = new Persona("Juan", "Perez", "jpers@gmail.com");
console.log(padre);
console.log(padre.tel);

let madre = new Persona("Laura", "Quitero", "lq@gmail.com");
console.log(madre);

console.log(padre.nombreCompleto());

//Declarar objetos
let miObjeto = new Object();
let miObjeto2 = {};

let miCadena1 = new String("Hola");
let miCadena2 = "Hola";

let miNumero = new Number(1);
let miNumero2 = 1;

let miBoolean = new Boolean(false);
let miBoolean2 = false;

let miArreglo = new Array();
let miArreglo2 = [];

let miFuncion = new Function();
let miFuncion2 = function () { };

//uso de call
let persona4 = {
    nombre: "Juan",
    apellido: "Perez",
    nombreCompleto: function ( titulo, tel ) {
        return titulo + ":" + this.nombre + " " + this.apellido + "," + tel;
    }
}

let persona5 = {
    nombre: "Carlos",
    apellido: "Lara"
}

console.log(persona4.nombreCompleto());
console.log(persona4.nombreCompleto.call(persona5, "Ing", "82314321"));

//apply
console.log(persona4.nombreCompleto.apply(persona5, ["Ing","3142341"]));



