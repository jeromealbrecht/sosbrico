let btn2 = document.getElementById("btn2");

btn2.addEventListener("mouseover", function (event) {
    // on met l'accent sur la cible de mouseenter
    btn2.style.backgroundColor = "white";
    btn2.style.color = "white";
    btn2.innerHTML = "Au meilleur prix !";
    
});

btn2.addEventListener("mouseout", function (event) {
    btn2.style.backgroundColor = "";
    btn2.style.color = "black";
    btn2.innerHTML = "Garantie 1 an";
});
