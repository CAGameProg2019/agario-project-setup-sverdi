let canvas = document.getElementById('main');
let c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// let pos = new Vector(60, 60);
// let vel = new Vector(.5, .2);
let pos = new Vector(5, 7);
let vel = new Vector(1, 1);
vel.scale(2);
vel.print(); // <2, 2>
pos.subVector(vel);
pos.print();  // <3, 5>

function init() {

    pos.print();

    update();
}

function update() {
    c.clearRect(0, 0, canvas.width, canvas.height);

    pos.addVector(vel);

    c.beginPath();
    c.arc(pos.x, pos.y, 50, 0, Math.PI*2, false);
    c.closePath();
    c.stroke();

    requestAnimationFrame(update);
}

window.addEventListener('load', function(event) {
    init();
});
