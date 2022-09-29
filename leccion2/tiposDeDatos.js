
//Tipo de dato string
var nombre = "Juan";
console.log(nombre);

//Tipo de dato numerico
var numero = 1000;
console.log(typeof numero);

//Tipo de dato object

var objeto = {
    nombre: "Juan",
    apellido: "Perez",
    telefono: "87138913"
}

console.log(objeto);

//Tipo de dato boolean

var bandera = true;
console.log(bandera);

//Tipo de dato function
function miFuncion() { }
console.log(miFuncion);

//Tipo de dato Symbol
var simbolo = Symbol("mi simbolo");
console.log(simbolo)

//Tipo clase es una function
class Persona{
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

console.log(Persona);

//Tipo undefined

var x;
console.log(x);

//null = ausencia de valor

var y = null;
console.log(y);

//arreglos
var autos = ["BMW", "Audi", "Volvo"];
console.log(autos);


//concatenación
var nombre = 'Juan';
var apellido = 'Perez';

var nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);