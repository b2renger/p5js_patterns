var siz = 50;
var seed = 160;


function setup() {

    createCanvas(windowWidth, windowHeight);

    background(0);

    rectMode(CENTER);
    seed = random(1000);
    randomSeed(seed);
}


function draw() {
    randomSeed(seed);
    background(0);

    noFill();
    stroke(255);


    for (var i = siz; i < windowWidth - siz; i += siz) {
        for (var j = siz; j < windowHeight - siz; j += siz) {
            push();
            var translateAmount = random(-1,1)*(j/siz);
            var rotateAmount = random(-PI, PI) * (j / (windowHeight * 7));
            translate(i+translateAmount, j);
            rotate(rotateAmount);
            rect(0, 0, siz, siz);
            pop();
        }
    }
}

function mouseReleased() {

    seed = random(1000);
    step = random(100) / 1000;
}


