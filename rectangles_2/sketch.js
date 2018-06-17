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
            var y = noise(seed , i / 123, j /431) * siz;
            var round = noise(seed/2, i/50 , j/100 )*(siz/4);
            rect(i, j, y, y, round);
        }
    }
}

function mouseReleased() {

    seed = random(1000);
    siz = int (random(25, 75))
    //round = random(siz / 4);
    step = random (100)/1000;
}

