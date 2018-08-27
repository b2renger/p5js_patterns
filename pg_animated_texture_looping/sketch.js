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


    //    imageMode(CENTER, CENTER)

}


function draw() {
    randomSeed(seed)
    background(0);
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
    pg.background(0)
    pg.strokeWeight(2)

    for (var x = 0; x < pg.width; x += 1) {
        for (var y = 0; y < pg.height; y += 1) {
            var xpos = map(x, 0, pg.width, 0, TWO_PI)
            var ypos = map(y, 0, pg.height, 0, TWO_PI)
            var n = noise((cos(xpos) + 1) * 0.5 + noiseX, (sin(ypos) + 1) * 0.5 + noiseY, frameCount * 0.0004);
            if (int(n * 200) % 11 == 0) {
                pg.stroke(255, 0, 0)
                pg.point(x, y);
            }
        }
    }



}

function mouseReleased() {
    seed = random(50000)
    siz = random(100, 300)
    noiseX = random(10000);
    noiseY = random(10000);
    pg = createGraphics(siz, siz)
    pg.strokeCap(ROUND)

}

function windowResized() {

    resizeCanvas(windowWidth, windowHeight);

}
