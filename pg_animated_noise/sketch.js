var siz = 250;
var pg
var noiseX
var noiseY
var seed


function setup() {

    createCanvas(windowWidth, windowHeight);

    background(0);
    pixelDensity(1)
    seed = random(5000)


    noiseX = random(10000);
    noiseY = random(10000);


    pg = createGraphics(siz, siz)

    pg.strokeCap(ROUND)


    imageMode(CENTER, CENTER)
    background(0);
    pg.background(0);

}


function draw() {
    randomSeed(seed)
    // background(0);
    noStroke();
    noFill();

    for (var i = 0; i <= width; i += siz) {
        for (var j = 0; j <= height; j += siz) {
            push()
            imageMode(CORNER)
            translate(i, j)

            image(pg, 0, 0)

            pop()
        }

    }
    pg.background(0, 5)

    for (var x = 0; x < pg.width; x += 1) {
        var nf

        if (x < pg.width / 2) nf = map(x, 0, pg.width / 2, 0, 1)
        else nf = map(x, pg.width / 2, pg.width, 1, 0)

        var y = (noise(nf, frameCount / 500, 14) - 1) * siz / 2 + pg.height / 2

        pg.stroke(255, 0, 0)

        for (var i = -siz; i < siz; i += siz / 15) {
            pg.point(x, y + i);
        }


    }



}

function mouseReleased() {
    seed = random(50000)
    siz = random(150, 750)
    pg = createGraphics(siz, siz)
    background(0);
    pg.background(0);
    pg.strokeCap(ROUND)

}

function windowResized() {

    resizeCanvas(windowWidth, windowHeight);

}
