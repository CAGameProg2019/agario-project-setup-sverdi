let canvas = document.getElementById('main');
let c = canvas.getContext('2d');

canvas.width = window.innerWidth-20;
canvas.height = window.innerHeight-20;

const FOOD_COUNT = 100;
let mpos;
let velVector = new Vector(0, 0);


let player;
let foods = [];
let viruses = [];

let colors = [
    "#44576f",
    "#ff9e15",
    "#c3d500",
    "#00b5e1",
    "#b3b1b1"
];

let strokeColors = [
    "#33576b",
    "#fcbe3a",
    "#c2d400",
    "#22a5d1",
    "#a2a1b1"
];
// function calcVel(){
//     velVector.x = (mpos.x - player.x)/10;
//     velVector.y = (mpos.y - player.y)/10;
// }

function generateFood(){
    let x = Math.random()* canvas.width;
    let y = Math.random()* canvas.height;
    let color = randomColor();
    let food = new Food(x, y, 8, color);
    foods.push(food);
}

function generateVirus(){
    let x = Math.random()* canvas.width;
    let y = Math.random()* canvas.height;
    let virus = new Virus(x, y, "light green");
    viruses.push(virus);
}


function randomColor() {
    let index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

function init() {
    mpos = new Vector(canvas.width/2, canvas.height/2);

    let name = prompt("Enter your name: ");

    let color = randomColor();
    let stroke = strokeColors[colors.indexOf(color)];
    player = new Player(canvas.width/2, canvas.height/2, 25, color, stroke, name, 7);

    for (let i = 0; i < 100; i++) {
        generateFood();
    }

    generateVirus();

    update();
}



function update() {

    c.clearRect(0, 0, canvas.width, canvas.height);

    player.update(mpos);

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

    for (let i = 0; i < viruses.length; i++) {
        let collision = player.intersects(viruses[i]);

        viruses[i].draw(c);

        if (collision)
            player.subtractMass(50);
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
