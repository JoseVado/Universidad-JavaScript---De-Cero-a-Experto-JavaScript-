class Empleado{
    constructor(nombre, sueldo) {
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    obtenerDetalles() {
        return `Empleado: nombre: ${this.nombre}, sueldo: ${this.sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento) {
        super(nombre, sueldo);
        this.departamento = departamento;
    }

    obtenerDetalles() { 
        return `Gerente: depto: ${this.departamento} ${super.obtenerDetalles()}`;
    }
}

function imprimir(tipo) {
    console.log(tipo.obtenerDetalles());
    if (tipo instanceof Gerente) {
        console.log("Es un objeto de tipo gerente");
        console.log(tipo.departamento);
    }
}

let gerente1 = new Gerente("carlos", 200, "Sistemas");
console.log(gerente1.obtenerDetalles());

let empleado1 = new Empleado("Juan", 1222);
console.log(empleado1);

imprimir(gerente1);
imprimir(empleado1);

