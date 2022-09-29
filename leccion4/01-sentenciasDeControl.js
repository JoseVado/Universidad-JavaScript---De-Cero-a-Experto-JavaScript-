//Sentencia if else
let condicion = false;

if(condicion){
    console.log("Condición verdadera");
}else{
    console.log("Condición falsa");
}
console.log("fin del programa");


//Ejercicio if else
let numero = 4;

if (numero == 1) {
    console.log("Número uno");
}
else if (numero == 2) {
    console.log("Número dos");
}
else if (numero == 3) {
    console.log("Número tres");
}
else if (numero == 4) {
    console.log("Número cuatro");
}
else {
    console.log("Número desconocido");
}

//Ejercicios estaciones
let mes = 6;
let estacion;

if( mes == 1 || mes == 2 || mes == 12){
    estacion = "Invierno";
}
else if( mes == 3 || mes == 4 || mes == 5){
    estacion = "Primavera";
}
else if( mes == 6 || mes == 7 || mes == 8 ){
    estacion = "Verano";
}
else if( mes == 9 || mes == 10 || mes == 11 ){
    estacion = "Otoño";
}
else{
    estacion = "Valor incorrecto";
}

console.log(estacion);

//ejercicio calculo hora del dia

/*
6am-11am - Buenos dias
12pm-18pm - Buenas Tardes
19pm-24pm - Buenas noches
0am-6am - Durmiendo
*/

let hora = 12;
let respuesta;

if( hora >= 6 && hora <= 11 ){
    respuesta = "Buenos días";
}
else if( hora >= 12 && hora <= 18 ){
    respuesta = "Buenas tardes";
}
else if( hora >= 19 && hora <= 24){
    respuesta = "Buenas noches";
}
else if( hora >= 0 && hora < 6){
    respuesta = "Durmiendo";
}
else{
    respuesta = "Valor incorrecto";
}

console.log(respuesta);

//Ejemplo switch

numero = 2;

let numeroTexto = 'Valor desconocido';

switch( numero ){
    case 1: 
        numeroTexto = 'Número uno';
        break;
    case 2:
        numeroTexto = 'Número dos';
        break;
    case 3:
        numeroTexto = 'Número tres';
        break;
    case 4:
        numeroTexto = 'Número cuatro';
        break;
    default:
        numeroTexto = 'Caso no encontrado';                
}

//Ejemplo de estaciones
mes = 4;
estacion = 'Estación desconocida';

switch( mes ){
    case 1: case 2: case 12:
        estacion = 'Invierno';
        break;
    case 3: case 4: case 5:
        estacion = 'Primavera';
        break;
    case 6: case 7: case 8:
        estacion = 'Verano';
        break;
    case 9: case 10: case 11:
        estacion = 'Otoño';
        break;
    default:
        estacion = 'Valor incorrecto';                
}
console.log(estacion);

