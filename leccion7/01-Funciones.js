//Funciones
miFuncion(3, 7);
//Declaración de la función
function miFuncion(a, b) {
    console.log("Suma: " + (a+b) );
}
//llamado de la función
miFuncion(2, 1);

//palabra return
function miFuncion2(a, b) {
    console.log((arguments.length));
    return a + b;
}
let resultado = miFuncion2(2,3);
console.log(resultado);

//Funciones de tipo expresión
//Declaración
let sumar = function (a, b) { return a + b };

resultado = sumar(1, 2);
console.log(resultado);

//Funciones self invoking
(function(a,b) {
    console.log("Funcion ejecutandose: " + (a+b));
})(3,5);

//Funciones como objetos
console.log(typeof miFuncion);

var miFuncionTexto = miFuncion2.toString();

console.log(miFuncionTexto);

//Funciones flechas
const sumarFuncionFlehca = (a, b) => a + b;
resultado = sumarFuncionFlehca(4, 6);
console.log(resultado);

//Parametros y argumentos

let sumar2 = function (a = 0, b = 4) {
    console.log(arguments[0] + " " + arguments[1]);
    console.log(arguments[2]);
    return a + b + arguments[2];
};

resultado = sumar2(2,3,6);
console.log(resultado);

//Ejemplo sumar todos los argumentos

resultado = sumarTodo(5, 4, 13, 10, 9);
console.log(resultado);

function sumarTodo() {
    let suma = 0;
    for (let i = 0; i< arguments.length; i++) {
        suma += arguments[i];       
    }
    return suma;
}

//paso por valor y paso por referencia
//tipo primitivo
let x = 10;

function cambiarValor(a) {
    a = 20;
}
//Paso por valor
cambiarValor(x);
console.log(x);
//console.log(a);

//paso por referencia
const persona = {
    nombre: "Juan",
    apellido: "Perez"
}

function cambiarValorObjeto(p1) {
    p1.nombre = "Mateo";
    p1.apellido = "Gonzales";
}

cambiarValorObjeto(persona);
console.log(persona);
