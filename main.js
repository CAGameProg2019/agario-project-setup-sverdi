let canvas = document.getElementById('main');
let c = canvas.getContext('2d');

canvas.width = window.innerWidth-20;
canvas.height = window.innerHeight-20;

const FOOD_COUNT = 100;
let mpos;
let velVector = new Vector(0, 0);


let player;
let foods = [];

let colors = [
    "#44576f",
    "#ff9e15",
    "#c3d500",
    "#00b5e1",
    "#b3b1b1"
];

// function calcVel(){
//     velVector.x = (mpos.x - player.x)/10;
//     velVector.y = (mpos.y - player.y)/10;
// }

function generateFood(){
    let x = Math.random()* canvas.width;
    let y = Math.random()* canvas.height;
    let color = randomColor();
    let food = new Food(x, y, 10, color);
    foods.push(food);
}


function randomColor() {
    let index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

function init() {
    var nameQuestion = prompt;
    prompt("What's your name?");
    console.log(nameQuestion);
    mpos = new Vector(canvas.width/2, canvas.height/2);

    player = new Player(canvas.width/2, canvas.height/2, 25, randomColor());

    for (let i = 0; i < 100; i++) {
        generateFood();
    }
    update();
}



function update() {

    c.clearRect(0, 0, canvas.width, canvas.height);

    player.x = mpos.x;
    player.y = mpos.y;

    for(let i = 0; i < foods.length; i++) {
        let eaten = player.intersects(foods[i]);
        if(!eaten){
            foods[i].draw(c);
        } else {
            player.addMass(foods[i].mass);
            foods.splice(i, 1);
            i--;
        }
    }

    while(foods.length < FOOD_COUNT){
        generateFood();
    }
    // calcVel();
    player.addVector(velVector);
    player.draw(c);

    requestAnimationFrame(update);
}

window.addEventListener('load', function() {
    init();

    window.addEventListener('mousemove', function(event) {
        mpos.x = event.clientX - canvas.offsetLeft;
        mpos.y = event.clientY - canvas.offsetTop;
    });
});
