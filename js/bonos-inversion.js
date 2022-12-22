/* TARJETAS EN BONOS BLOQUE INVERSION  */ 
let cardComprobantesBonos = document.getElementById('card-comprobantes-bonos');
let cardProyectosBonos = document.getElementById('card-proyectos-bonos');
let comprobantesBonos = document.getElementById('contenido-comprobantes-bonos');
let proyectosBonos = document.getElementById('contenido-proyectos-bonos');

cardProyectosBonos.addEventListener("click", function (e) {
    comprobantesBonos.classList.add("d-none");
    proyectosBonos.classList.remove("d-none");
    cardComprobantesBonos.style.background = "#1072BB";
    cardProyectosBonos.style.background = "#37BBED";
    cardProyectosBonos.style.color = "#ffff";
    cardComprobantesBonos.style.color = "#dddddd";
});

cardComprobantesBonos.addEventListener("click", function (e) {
    comprobantesBonos.classList.remove("d-none");
    proyectosBonos.classList.add("d-none");
    cardComprobantesBonos.style.background = "#37BBED";
    cardComprobantesBonos.style.color = "#ffff";
    cardProyectosBonos.style.background = "#1072BB";
    cardProyectosBonos.style.color = "#dddddd";
});