//declarar arreglos
//Forma antigua - poco recomendada
let auutosViejo = new Array('BMW', 'Mercedes Benz', 'Volvo');

//Forma moderna - const por que se aparte el espacio en memoria
const autos = ['BMW', 'Mercedes Benz', 'Volvo'];

console.log(autos);

//Recorrer los elementos de un arreglo
console.log(autos[0]);
console.log(autos[2]);

for (let i = 0; i< autos.length; i++) {
    console.log(i + " : " + autos[i]);
}

autos.forEach(element => {
    console.log(element);
});

//Modificar los elementos de un arreglo
autos[1] = "MercedesBenz";
console.log(autos[1]);

autos.push("Audi");
console.log(autos);

//Agregar elementos a un arreglo
console.log(autos.length);
autos[autos.length] = "Cadilac";

console.log(autos);

autos[6] = "Porche"
console.log(autos);

//Preguntar si es un Array
console.log(typeof autos);
console.log(Array.isArray(autos));
console.log(autos instanceof Array);


