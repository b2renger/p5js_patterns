var siz = 250;
var pg1
var c1
var c2


function setup() {

    createCanvas(windowWidth, windowHeight);
    colorMode(RGB);
    background(255);
    pixelDensity(1)
    seed = random(5000)
    //colorMode(HSB, 360, 100, 100)
    c1 = color("#5D1789")
    c2 = color("#178980")
    pg1 = createGraphics(siz, siz)
    for (var i = 0; i <= pg1.height; i++) {
        var incr = map(i, 0, pg1.height, 0, 1)
        pg1.stroke(lerpColor(c1, c2, incr))
        pg1.line(0, i, width, i)
    }

    imageMode(CENTER, CENTER)

}


function draw() {
    randomSeed(seed)

    background(255);
    noStroke()
    for (var i = siz/2; i <= width + siz / 2; i += siz) {
        for (var j = siz/2; j <= height + siz / 2; j += siz) {
            push()

            translate(i, j)
            var angle = TWO_PI * (int(random(1, 5))) / 4
            rotate(angle)
            image(pg1, 0, 0)
            pop()
        }

    }
}

function mouseReleased() {
    seed = random(50000)
    siz = int(random(150, 250))
    pg1 = createGraphics(siz, siz)
    for (var i = 0; i <= pg1.height; i++) {
        var incr = map(i, 0, pg1.height, 0, 1)
        pg1.stroke(lerpColor(c1, c2, incr))
        pg1.line(0, i, width, i)
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
