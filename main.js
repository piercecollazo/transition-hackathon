window.onload = init;

function init() {
    document.querySelectorAll('.shape')
        .forEach((shape) => shape.addEventListener('click', animate));
}

function animate(event) {
    const shape = event.target;
    shape.style.backgroundColor = 'blue';
    shape.style.borderRadius = "0%";
}