//ciclo while
let contador = 0;

while (contador < 3) {
    console.log(contador);
    contador++;
}
console.log("Fin ciclo while");

//ciclo do while
contador = 0;
do {
    console.log(contador);
    contador++;
} while (contador < 3);
console.log("Fin ciclo do while");

//ciclo for
for (let contador = 0; contador < 3; contador++) {
    console.log(contador);
}
console.log("Fin ciclo for");

//palabra break
for (let contador = 0; contador <= 10; contador++) {
    if (contador %2==0) {
        console.log(contador);
        break;
    }
}
console.log("Fin del ciclo for con break");

//palabra continue
for (let contador = 0; contador <= 10; contador++) {
    if (contador % 2 !== 0) {
        continue;
    }
    console.log(contador);
}

//Etiquetas - no es recomendable - programaciíon goto
inicio:
for (let contador = 0; contador <= 10; contador++) {
    if (contador % 2 !== 0) {
        continue inicio;
    }
    console.log(contador);
}
