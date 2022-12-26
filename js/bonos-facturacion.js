/* TARJETAS EN BONOS BLOQUE FACTURACION  */ 
let cardDatosBonos = document.getElementById('card-datos-bonos');
let cardResultadosBonos = document.getElementById('card-resultados-bonos');
let datosBonos = document.getElementById('contenido-datosgenerales-bonos');
let resultadosBonos = document.getElementById('contenido-resultados-bonos');

cardResultadosBonos.addEventListener("click", function (e) {
    datosBonos.classList.add("d-none");
    resultadosBonos.classList.remove("d-none");
    cardDatosBonos.style.background = "#1072BB";
    cardResultadosBonos.style.background = "#37BBED";
    cardResultadosBonos.style.color = "#ffff";
    cardDatosBonos.style.color = "#dddddd";
});

cardDatosBonos.addEventListener("click", function (e) {
    datosBonos.classList.remove("d-none");
    resultadosBonos.classList.add("d-none");
    cardDatosBonos.style.background = "#37BBED";
    cardDatosBonos.style.color = "#ffff";
    cardResultadosBonos.style.background = "#1072BB";
    cardResultadosBonos.style.color = "#dddddd";
});


