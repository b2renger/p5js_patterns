var siz = 50 ;
var seed = 160;

var step = 0.05;
var phase = 0;
var mod =2;

function setup() {

    createCanvas(windowWidth, windowHeight);

    background(0);

    rectMode(CORNER);
    seed = random(1000);
    round = random(siz / 2);

}


function draw() {

    background(0);
    seed += step;
    fill(255);
    phase =0

    for (var i = siz; i < windowHeight - siz; i += siz) {
        for (var j = siz; j < windowWidth - siz; j += siz) {

            phase += 1
            var y = 0

            if (phase % mod == 0) y = ((cos(seed) + 1) / 2) * siz;
            else y = ((sin(seed) + 1) / 2) * siz;

            rect(j, i, siz, y);
        }
    }
}

function mouseReleased() {

    seed = random(1000);

    step = random(100) / 1000;
    mod = int(random(2,20))
}
