let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true;
    if (expresion)
        resolver("Resolvió correcto");
    else
        rechazar("Se produjo un error");
});

//miPromesa.then(
//    valor => console.log(valor),
//    error => console.log(error)
//);
/*
miPromesa
    .then(valor => console.log(valor))
    .catch(error => console.log(error));
*/

let promesa = new Promise((resolver) => {
    //console.log("Inicio promesa");
    setTimeout(() => resolver("Saludos con promesa y timeout"), 3000);
    //console.log("Fin promesa");
});

//promesa.then(valor => console.log(valor));

//async indica que una función regresa una promesa

async function miFuncionConPromesa() {
    return "Saludos con promesa y async";
}

//miFuncionConPromesa().then(valor => console.log(valor));

//async y await

async function funcionConPromesaYAwait() {
    let miPromesa = new Promise(resolver => {
        resolver("Promesa con await");
    })

    console.log(await miPromesa);//solo se puede usar dentro de una funcion declarada como async
}

//funcionConPromesaYAwait();

// promesas, await, async y setTimeout

async function funcionConPromesAwaitYTimeout() {
    let miPromesa = new Promise(resolver => {
        setTimeout(() => resolver("Promesa con await y timeout"));  
    })
    console.log(await miPromesa);
}

funcionConPromesAwaitYTimeout();