var seed = 160;
var siz = 35;


function setup() {

    createCanvas(windowWidth, windowHeight);

    background(0);

    seed = random(1000);

}


function draw() {

    background(0);
    randomSeed(seed);

    stroke(255)

    for (var i = siz; i < windowWidth - siz; i += siz) {
        for (var j = siz; j < windowHeight - siz; j += siz) {

            push()
            var rd = random(100)
            if (rd < 40) {
                strokeWeight(2)
                line(i, j, i + siz, j + siz);
            } else if (rd > 40 && rd < 80) {
                strokeWeight(2)
                line(i, j + siz, i + siz, j);
            } else {
                strokeWeight(2)
                line(i, j, i + siz, j + siz);
                line(i, j + siz, i + siz, j);
            }
            pop()
        }
    }
}

function mouseReleased() {

    seed = random(1000);
    siz = int(random(10, 50))

}
