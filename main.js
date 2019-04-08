let canvas = document.getElementById('main');
let c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let foods = []

let colors = [
    "#27293f",
    "#295749",
    "#2cd918",
    "#a8ea08",
    "#cfff00"
];

function randomColor(){
    let index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

function init() {
    foods = [];
    for (var i = 0; i < foodNum; i++){
        let radius = 10;
        let x = Math.random()* canvas.width;
        let y = Math.random()* canvas.height;
        let food = new Food(x, y, 20, randomColor());
        foods.push(food);
    }
}



function update() {

    c.clearRect(0, 0, canvas.width, canvas.height);

    foods[0].draw(c);

    requestAnimationFrame(update);
}

window.addEventListener('load', function(event) {
    init();
});
