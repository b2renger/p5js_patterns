var siz = 50;



function setup() {

    createCanvas(windowWidth, windowHeight);
    colorMode(RGB);
    background(255);
    pixelDensity(1)
    seed = random(5000)
    colorMode(HSB, 360, 100, 100)

    imageMode(CENTER, CENTER)

}


function draw() {
    randomSeed(seed)

    background(255);
    noStroke()



    for (var i = siz / 2; i <= width + siz / 2; i += siz) {
        for (var j = siz / 2; j <= height + siz / 2; j += siz) {
            push()
            translate(i, j)
            var mult = (int(random(1, 5)))
            var angle = TWO_PI * mult / 4
            rotate(angle)
            var c1 = color(0 + noise(frameCount / 35, i / width, j / height) * 360, 25, 100)
            var c2 = color(0 + noise(frameCount / 35, j / height, i / width) * 360, 25, 100)

            for (var k = -siz / 2; k <= siz / 2; k++) {
                var incr = map(k, -siz / 2, siz / 2, 0, 1)
                stroke(lerpColor(c1, c2, incr))
                line(-siz / 2, k, siz / 2, k)
            }
            pop()
        }

    }
}

function mouseReleased() {
    seed = random(50000)
    siz = int(random(20, 76))

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
