let dropHamburg = document.getElementById("dropHamburg");
let menuHamburg = document.getElementById("menuHamburg");

dropHamburg.addEventListener("click", function (e) {
    let iconHamburg = document.querySelector(".fa-bars");
    let iconClose = document.querySelector(".fa-xmark");
    let layoutblack = document.getElementById("layoutblack");

    if( menuHamburg.className != "indexup"){
        menuHamburg.classList.add("indexup");
        layoutblack.classList.remove("d-none");
        iconHamburg.classList.add("d-none");
        iconClose.classList.remove("d-none");

    } else {
        menuHamburg.classList.remove("indexup");
        layoutblack.classList.add("d-none");
        iconHamburg.classList.remove("d-none");
        iconClose.classList.add("d-none");
    }
  });
