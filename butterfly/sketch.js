//http://paulbourke.net/geometry/butterfly/
var siz = 150;
var pg1


function setup() {

    createCanvas(windowWidth, windowHeight);
    colorMode(RGB);
    background(255);
    pixelDensity(1)
    seed = random(5000)
    //colorMode(HSB, 360, 100, 100)

    pg1 = createGraphics(siz, siz)
    pg1.background(0)
    pg1.translate(pg1.width / 2, pg1.height / 2)
    for (var i = 0; i <= 10000; i++) {
        var u = i * 24.0 * PI / 10000;
        var x = cos(u) * (exp(cos(u)) - 2 * cos(4 * u) - pow(sin(u / 12), 5.0)) * 30
        var y = sin(u) * (exp(cos(u)) - 2 * cos(4 * u) - pow(sin(u / 12), 5.0)) * 30
        pg1.stroke(255)
        pg1.ellipse(x, y , 5,5)
    }



    imageMode(CENTER, CENTER)

}


function draw() {
    randomSeed(seed)

    background(255);
    noStroke()
    var incr = 0
    for (var i = siz / 2; i <= width + siz / 2; i += siz) {
        for (var j = siz / 2; j <= height + siz / 2; j += siz) {
            push()

            translate(i, j)
            var angle = TWO_PI * (int(random(1, 5))) / 4

            if (incr%2 ==0) angle = -PI/2;
            else angle = PI/2
            rotate(angle)
            image(pg1, 0, 0)
            pop()
            incr++
        }

    }
}

function mouseReleased() {
    seed = random(50000)
    siz = int(random(100, 250))
    pg1 = createGraphics(siz, siz)
    pg1.background(0)
    pg1.translate(pg1.width / 2, pg1.height / 2)
    for (var i = 0; i <= 10000; i++) {
        var u = i * 24.0 * PI / 10000;
        var x = cos(u) * (exp(cos(u)) - 2 * cos(4 * u) - pow(sin(u / 12), 5.0)) * 30
        var y = sin(u) * (exp(cos(u)) - 2 * cos(4 * u) - pow(sin(u / 12), 5.0)) * 30
        pg1.stroke(255)
        pg1.ellipse(x, y , 5,5)
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
