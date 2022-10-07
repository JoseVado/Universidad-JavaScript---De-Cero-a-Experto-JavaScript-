const personas = [
    new Persona("Juan", "Perez"),
    new Persona("Jose", "Robles"),
    new Persona("Maria","Dominguez")
]

function mostrarPersonas() {
    console.log("mostrar personas");
    let texto = "";
    for (let persona of personas) {
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById("personas").innerHTML = texto;
}

function agregarPersona() {
    const forma = document.getElementById("forma");
    const nombre = forma["nombre"].value;
    const apellido = forma["apellido"].value;

    if (nombre != "" && apellido.value != "") {
        personas.push(new Persona(nombre, apellido));
        mostrarPersonas();
    } else {
        alert("No hay información que agregar");
    }

    
}