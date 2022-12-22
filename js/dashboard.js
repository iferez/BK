let dropdownMenuPagos = document.getElementById("dropdownMenuPagos");
dropdownMenuPagos.addEventListener("click", function (e) {
    let cardPagos = document.getElementById("cardPagos");
    let layoutblack = document.getElementById("layoutblack");
    let flecha = document.getElementById("flechaPagos");

    if( cardPagos.className != "card mb-3 indexup"){
        cardPagos.classList.add("indexup");
        layoutblack.classList.remove("d-none");
        flecha.style.transition = "0.5s ease-in-out";
        flecha.style.webkitTransform = "rotate(180deg)";
    } else {
        cardPagos.classList.remove("indexup");
        layoutblack.classList.add("d-none");
        flecha.style.transition = "0.5s ease-in-out";
        flecha.style.webkitTransform = "rotate(0deg)";
    }
  });

  let dropdownMenuBonos = document.getElementById("dropdownMenuBonos");
  dropdownMenuBonos.addEventListener("click", function (e) {
    let cardBonos = document.getElementById("cardBonos");
    let layoutblack = document.getElementById("layoutblack");
    let flecha = document.getElementById("flechaBonos");

    if( cardBonos.className != "card mb-3 indexup"){
        cardBonos.classList.add("indexup");
        layoutblack.classList.remove("d-none");
        flecha.style.transition = "0.5s ease-in-out";
        flecha.style.webkitTransform = "rotate(180deg)";
    } else {
        cardBonos.classList.remove("indexup");
        layoutblack.classList.add("d-none");
        flecha.style.transition = "0.5s ease-in-out";
        flecha.style.webkitTransform = "rotate(0deg)";
    }
  });

  let dropdownMenuConfig = document.getElementById("dropdownMenuConfig");
  dropdownMenuConfig.addEventListener("click", function (e) {
    let cardConfig = document.getElementById("cardConfig");
    let layoutblack = document.getElementById("layoutblack");
    let flecha = document.getElementById("flechaConfig");

    if( cardConfig.className != "card mb-3 indexup"){
        cardConfig.classList.add("indexup");
        layoutblack.classList.remove("d-none");
        flecha.style.transition = "0.5s ease-in-out";
        flecha.style.webkitTransform = "rotate(180deg)";
    } else {
        cardConfig.classList.remove("indexup");
        layoutblack.classList.add("d-none");
        flecha.style.transition = "0.5s ease-in-out";
        flecha.style.webkitTransform = "rotate(0deg)";
    }
  });