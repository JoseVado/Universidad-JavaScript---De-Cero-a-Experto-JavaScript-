'use strict';
try {
    //x = 10;
    //miFuncion();
    throw "mi error";
} catch (error) {
    console.log(error);
} finally {
    console.log("Termina la revision de errores");
}

console.log("Continuamos...");

let resultado = "3";

try {
    //x=10
    if (isNaN(resultado)) throw "No es un número";
    else if (resultado == "") throw "Es cadena vacia";
    else if (resultado >= 0) throw "Valor positivo";
    else if (resultado < 0) throw "Valor negativo";

} catch (error) {
    console.log(error);
    //console.log(error.name);
    //console.log(error.message);
} finally {
    console.log("Termina revisión de errores");
}

