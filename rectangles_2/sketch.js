var siz = 25;
var seed = 160;
var round = 1;
var step = 0.05;

function setup() {

    createCanvas(windowWidth, windowHeight);

    background(0);

    rectMode(CENTER);
    seed = random(1000);
    round = random(siz / 2);

}


function draw() {

    background(0);
    seed +=step;
    fill(255);
    for (var i = siz; i < windowWidth - siz; i += siz) {
        for (var j = siz; j < windowHeight - siz; j += siz) {
            var y = noise(seed , i / siz * 4, j * siz / 4) * siz;
            rect(i, j, siz, y, round);
        }
    }
}

function mouseReleased() {

    seed = random(1000);
    round = random(siz / 4);
    step = random (100)/1000;
}

