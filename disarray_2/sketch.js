var siz = 50;
var seed = 160;


function setup() {

    createCanvas(windowWidth, windowHeight);

    background(0);

    //rectMode(CENTER);
    seed = random(1000);
    randomSeed(seed);
    strokeCap(ROUND)
}


function draw() {
    randomSeed(seed);
    background(0);

    noFill();
    stroke(255);
    strokeWeight(2)


    for (var i = 0; i < windowWidth ; i += siz) {
        for (var j = 0; j < windowHeight; j += siz) {
            push();

            var rotateAmount = random(-PI/2,PI/2)*(j/(windowHeight*7));

            translate(i+siz/2, j+siz/2);
            rotate(rotateAmount);
            line(0,0,0,-siz/2)
            line(0,0,0,siz/2)
            line(0,0,siz/2,0)
            line(0,0,-siz/2,0)
            pop();
        }
    }
}

function mouseReleased() {

    seed = random(1000);
    step = random(100) / 1000;
}


