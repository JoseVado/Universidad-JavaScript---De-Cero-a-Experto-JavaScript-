//Clases

//No es posible crear objetos antes de declarar las clases
class Persona{
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

let persona1 = new Persona("Juan", "Perez");
console.log(persona1);

let persona2 = new Persona("Carlos", "Lara");
console.log(persona2);

//get y set
class Persona1 {
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
}

persona1 = new Persona1("Juan", "Perez");
persona1.nombre = "Juan Carlos";
console.log(persona1.nombre);

//Herencia
class PersonaH {
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get apellido() {
        return this._apellido;
    }
    set apellido(apellido) {
        this._apellido = apellido;
    }
    nombreCompleto() {
        return this._nombre + " " + this._apellido;
    }
    toString() {
        return this.nombreCompleto();
    }
}

class Empleado extends PersonaH{
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido);
        this._departamento = departamento;
    }
    get departamento() {
        return this._departamento;
    }
    set departamento(departamento) {
        this._departamento = departamento;
    }
    //Sobreescritura
    nombreCompleto() {
        return super.nombreCompleto() + ", " + this._departamento;
    }

}

persona1 = new PersonaH("Juan", "Perez");
console.log(persona1.nombreCompleto());

let empleado = new Empleado("Maria", "Perez", "Administración");
console.log(empleado.nombreCompleto());

console.log(empleado.toString());

