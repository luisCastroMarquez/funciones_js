const ele = document.getElementById("ele1");

function pintar(elemento) {
    elemento.style.backgroundColor = "yellow";
}

ele.addEventListener("click", (event) => {
    pintar(event.target);
});
