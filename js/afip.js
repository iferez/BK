/* TARJETAS EN BONOS BLOQUE FACTURACION  */
let cardUno = document.getElementById("card-afip-uno");
let cardDos = document.getElementById("card-afip-dos");
let cardTres = document.getElementById("card-afip-tres");
/*Bloques de codigo interno*/
let bloqueUno = document.getElementById("contenido-afip-uno");
let bloqueDos = document.getElementById("contenido-afip-dos");
let bloqueTres = document.getElementById("contenido-afip-tres");

cardUno.addEventListener("click", function (e) {
  bloqueUno.classList.remove("d-none");
  cardUno.style.background = "#37BBED";
  cardUno.style.color = "#ffff";
  /*Desactivo otros*/
  bloqueDos.classList.add("d-none");
  bloqueTres.classList.add("d-none");
  cardDos.style.background = "#1072BB";
  cardDos.style.color = "#dddddd";
  cardTres.style.background = "#1072BB";
  cardTres.style.color = "#dddddd";
});

cardDos.addEventListener("click", function (e) {
  bloqueDos.classList.remove("d-none");
  cardDos.style.background = "#37BBED";
  cardDos.style.color = "#ffff";
  /*Desactivo otros*/
  bloqueUno.classList.add("d-none");
  bloqueTres.classList.add("d-none");
  cardUno.style.background = "#1072BB";
  cardUno.style.color = "#dddddd";
  cardTres.style.background = "#1072BB";
  cardTres.style.color = "#dddddd";
});

cardTres.addEventListener("click", function (e) {
  bloqueTres.classList.remove("d-none");
  cardTres.style.background = "#37BBED";
  cardTres.style.color = "#ffff";
  /*Desactivo otros*/
  bloqueUno.classList.add("d-none");
  bloqueDos.classList.add("d-none");
  cardUno.style.background = "#1072BB";
  cardUno.style.color = "#dddddd";
  cardDos.style.background = "#1072BB";
  cardDos.style.color = "#dddddd";
});
