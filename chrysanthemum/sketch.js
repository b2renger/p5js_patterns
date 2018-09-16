http://paulbourke.net/geometry/chrysanthemum/
var siz = 250;
var pg1
var rad = 75
var sphereSiz = 3


function setup() {

    createCanvas(windowWidth, windowHeight);
    colorMode(RGB);
    background(255);
    pixelDensity(1)
    seed = random(5000)
    //colorMode(HSB, 360, 100, 100)

    pg1 = createGraphics(siz, siz, WEBGL)



    imageMode(CENTER, CENTER)

}


function draw() {
    randomSeed(seed)

    pg1.background(0)
    pg1.push()

    pg1.translate(0, 0, -200)
    pg1.rotateZ(mouseX / (width / 2))
    pg1.rotateY(mouseY / (height / 2))
    pg1.directionalLight(255, 150, 160, 0.25, 0.25, 0);
    pg1.specularMaterial(250)
    for (var i = 0; i <= 10000; i++) {
        var u = i * 21.0 * PI / 10000;
        var sinp4 = sin(17 * u / 3)
        var r = rad * (1 + sin(11 * u / 5)) - 4 * pow(sin(17 * u / 3), 4) * pow(sin(2 * cos(3 * u) - 28 * u), 8)
        var x = r * cos(u)
        var y = r * sin(u)
        var z = (r / 20 + .2) * sin(r * TWO_PI / 7);
        pg1.push()
        pg1.translate(x, y, z)
        pg1.sphere(sphereSiz)
        pg1.pop()
    }
    pg1.pop()


    background(255);
    noStroke()
    for (var i = siz / 2; i <= width + siz / 2; i += siz) {
        for (var j = siz / 2; j <= height + siz / 2; j += siz) {
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
    pg1 = createGraphics(siz, siz,WEBGL)
    rad = random(35,85)
    sphereSiz = random(1,10)
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
