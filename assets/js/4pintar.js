const container = document.querySelector(".container");
const cont1 = document.querySelector("#cont1");
const cont2 = document.querySelector("#cont2");
const cont3 = document.querySelector("#cont3");
const cont4 = document.querySelector("#cont4");

let color;

document.addEventListener("keydown", function (event) {
    if (event.key === "a") {
        color = 'blue';
    }  else if (event.key === "s") {
        color = 'green';
    } else if (event.key === "d") {
        color = 'black';
    }
});

cont1.addEventListener("click", (event) => {
    event.target.style.backgroundColor = color;
});

cont2.addEventListener("click", (event) => {
    event.target.style.backgroundColor = color;
});

cont3.addEventListener("click", (event) => {
    event.target.style.backgroundColor = color;
});

cont4.addEventListener("click", (event) => {
    event.target.style.backgroundColor = color;
});




