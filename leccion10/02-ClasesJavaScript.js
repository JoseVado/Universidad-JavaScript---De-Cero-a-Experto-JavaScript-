//Static
class PersonaH {

    static contadorObjetos = 0;

    email = "Valor default email";

    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
        PersonaH.contadorObjetos++;
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
    static saludar() {
        console.log("Saludo desde static");
    }
    static saludar2(persona) {
        console.log(persona.nombre);
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

PersonaH.saludar();
PersonaH.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado);

console.log(PersonaH.contadorObjetos);

console.log(Empleado.contadorObjetos);

console.log(persona1.email);

