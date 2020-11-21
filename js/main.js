let btn1 = document.getElementById("btn1");

btn1.addEventListener("mouseover", function (event) {
    // on met l'accent sur la cible de mouseenter
    btn1.style.backgroundColor = "white";
    btn1.style.color = "white";
    btn1.innerHTML = "Coucou !";
    
}, false);

btn1.addEventListener("mouseout", function (event) {
    btn1.style.backgroundColor = "";
    btn1.style.color = "black";
    btn1.innerHTML = "Réparation Express";
});
