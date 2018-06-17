var siz = 50;
var seed = 160;


function setup() {

    createCanvas(windowWidth, windowHeight);

    background(0);

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


    for (var i = siz / 2; i < windowWidth - siz; i += siz) {
        for (var j = siz / 2; j < windowHeight - siz; j += siz) {
            push();
            var translateAmount = random(-1, 1) * (j / siz);

            translate(i + translateAmount + siz / 2, j + siz / 2);

            line(0, 0, 0, -siz / 2)
            line(0, 0, 0, siz / 2)
            line(0, 0, siz / 2, 0)
            line(0, 0, -siz / 2, 0)
            pop();
        }
    }
}

function mouseReleased() {

    seed = random(1000);
    step = random(100) / 1000;
}
