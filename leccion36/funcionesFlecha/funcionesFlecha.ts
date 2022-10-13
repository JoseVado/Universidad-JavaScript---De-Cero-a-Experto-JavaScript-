let suma = function (a: number, b: number) {
    return a + b;
};

console.log(suma(5,3));

//let sumaFlecha = (a: number, b: number) => a+b;
let sumaFlecha = (a: number, b: number) =>{
    return a + b;
};

console.log(suma(3,2));

var obtenerNombre = function () {
    return "Juan";
}

let obtenerNombreFlecha = () => "Juan";

console.log(obtenerNombre());
console.log(obtenerNombreFlecha());

