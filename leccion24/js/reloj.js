const mostrarReloj = () => {
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let sec = formatoHora(fecha.getSeconds());

    document.getElementById("hora").innerHTML = `${hr}:${min}:${sec}`;

    const meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    const nombreDias = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
    
    let dia = fecha.getDay();
    let diaSemana = nombreDias[dia];
    let mes = meses[fecha.getMonth()];
    let año = fecha.getFullYear();

    let fechaTexto = `${diaSemana} ${dia} de ${mes} del ${año}`;
    document.getElementById("fecha").innerHTML = fechaTexto;

    document.getElementById("contenedor").classList.toggle("animar");
} 

const formatoHora = (hora) => {
    return (hora < 10) ? "0" + hora: hora;
}

setInterval(mostrarReloj,1000);