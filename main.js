window.onload = init;

function init() {
    document.querySelectorAll('.sector')
        .forEach((shape) => shape.addEventListener('click', animate));
}

function animate(event) {
    const shape = event.target;
    shape.style.backgroundColor = 'red';
    shape.style.borderRadius = "0%";
}