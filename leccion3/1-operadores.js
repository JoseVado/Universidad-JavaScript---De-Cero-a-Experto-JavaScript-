let a = 3, b = 2;
let z = a + b;
console.log("Resultado de la suma: " + z);

z = a - b;
console.log("Resultado de la resta: " + z);

z = a * b;
console.log("Resultado de la multiplicación: " + z);

z = a / b;
console.log("Resultado de la división: " + z);

z = a % b;
console.log("Resultado del residuo de la división: " + z);

z = a ** b;
console.log("Resultado del exponente: " + z);


//Incremento
//pre-incremento

z = ++a;
console.log(a);
console.log(z);

//pos-incremento
z = b++;
console.log(b);
console.log(z);


let x = 10;

if (x % 2 == 0) {
    console.log("Es par");
} else {
    console.log("Es impar");
}



let edad = 16, adulto = 18;

if (edad >= adulto) {
    console.log("Es un adulto");
} else {
    console.log("Es menor de edad");
}


//And ejemplo
a = 15;
let valMin = 0, valMax = 10;

if( a >= valMin && a <= valMax ){
    console.log("Dentro de rango");
}else{
    console.log("Fuera de rango");
}

//or ejemplo
a = 15;
valMin = 0, valMax = 10;

if( a >= valMin && a <= valMax ){
    console.log("Dentro de rango");
}else{
    console.log("Fuera de rango");
}

//Ejemplo OR (||), regresa true si cualquier operando es true
let vacaciones = false, diaDescanso = true;
if (vacaciones || diaDescanso) {
    console.log("Padre puede asistir al juego del hijo");
}else {
    console.log("El padre está ocupado");
}

// operadores ternarios
let resultado = (1>2) ? "verdadero" : "falso";
console.log(resultado);

let numero = 110;
resultado = ( numero % 2 == 0 ) ? "Número par" : "Número impar"; 
console.log(resultado);

//Convertir string a number
let miNumero = "18";
 //console.log(typeof miNumero);
 
edad = Number(miNumero);
 //console.log(typeof edad);
if( isNaN(edad)){
    console.log("No es un número");
}else{
    if(edad >= 18){
        console.log("Puede votar");
    }else{
        console.log("Muy joven para votar");
    }    
}
 
if( isNaN(edad)){
    console.log("No es un número");
}else{
    let resultado = (edad >= 18)? "Puede votar" : "Muy joven para votar";
    console.log( resultado ); 
}


//Precedencia de operadores
x = 5;
let y = 10;
z = ++x + y--;
console.log(x);
console.log(y);
console.log(z);

resultado = 4 + 5 * 6 / 3;// (4 + ((5*6)/3))
console.log(resultado);

resultado = (4 + 5) * 6 / 3;
console.log(resultado);