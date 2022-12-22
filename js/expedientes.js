/* DATOS GENERALES - RESULTADOS  */ 
let cardDatos = document.getElementById('card-datos');
let cardResultados = document.getElementById('card-resultados');
let datos = document.getElementById('contenido-datosgenerales');
let resultados = document.getElementById('contenido-resultados');


cardResultados.addEventListener("click", function (e) {
    datos.classList.add("d-none");
    resultados.classList.remove("d-none");
    cardDatos.style.background = "#1072BB";
    cardResultados.style.background = "#37BBED";
    cardResultados.style.color = "#ffff";
    cardDatos.style.color = "#dddddd";
});

cardDatos.addEventListener("click", function (e) {
    datos.classList.remove("d-none");
    resultados.classList.add("d-none");
    cardDatos.style.background = "#37BBED";
    cardDatos.style.color = "#ffff";
    cardResultados.style.background = "#1072BB";
    cardResultados.style.color = "#dddddd";
});