let color;

document.addEventListener('keydown', function (event) {
    switch(event.key) {
        case 'a':
        color = 'red';
        break;
        case 's':
        color = 'blue';
        break;
        case 'd':
        color = 'green';
        break;
        default:
        color = 'black';
        break;
    }

console.log('Color seleccionado: ' + color);
});

document.addEventListener('keydown', function (event) {
    const container = document.getElementById('cont1');
    container.style.backgroundColor = color;
});
