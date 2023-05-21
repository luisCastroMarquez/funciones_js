const ele = document.getElementById("ele1");

function pintar(elemento, color = "blue") {
    elemento.style.backgroundColor = color;
}

ele.addEventListener("click", (event) => {
    pintar(event.target, 'yellow');
});
