var siz = 50;
var seed = 160;

var step = 0.05;

function setup() {

    createCanvas(windowWidth, windowHeight);

    background(0);

    rectMode(CORNER);
    seed = random(1000);
    round = random(siz / 2);

}


function draw() {

    background(0);
    seed +=step;
    fill(255);
    for (var i = siz; i < windowWidth - siz; i += siz) {
        for (var j = siz; j < windowHeight - siz; j += siz) {
            var y = ((sin(seed + PI/(i*j) )+1)/2) * siz;
            rect(i, j, siz, y);
        }
    }
}

function mouseReleased() {

    seed = random(1000);
    step = random (100)/1000;
}

