function miFuncion1() {
    console.log("Función 1");
}

function miFuncion2() {
    console.log("Función 2");
}

miFuncion1();
miFuncion2();

//Funciones callback

function imprimir(mensaje) {
    console.log(mensaje);
}

function sumar(op1, op2, functionCallback) {
    let res = op1 + op2;
    functionCallback(`Resutado: ${res}`);
}

sumar(5, 3, imprimir);

//Llamadas asincronas con uso de setTimeout

function miFuncionCallback() {
    console.log("Saludo asincrono despues de 3 segundos");
}

setTimeout(miFuncionCallback, 3000); //despues de 3 seg

setTimeout(function () { console.log("Saludo asincrono 2") }, 2000);

setTimeout(() => console.log("Saludo asincrono 3"), 1000);


//setInterval

let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);

}

setInterval(reloj, 1000); // 1 Seg
