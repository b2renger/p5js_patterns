
// http://paulbourke.net/geometry/chladni/
var m = 10;
var n = 2;
var epsilon = 0.05;

var pg



function setup() {

    createCanvas(windowWidth, windowHeight);
    pg = createGraphics(320, 240)
    pg.background(0);
    pg.pixelDensity(1)

    pixelDensity(1)

}


function draw() {

    m = map(mouseX, 0, width, 1, 20);
    n = map(mouseY, 0, height, 1, 20);

    pg.strokeWeight(1.5)
    pg.background(0);
    pg.noFill()
    //pg.fill(255)
    pg.stroke(255, 15);

    for (var y = 0; y < pg.height; y++) {
        for (var x = 0; x < pg.width; x++) {
            var chladni = cos(n * PI * x / pg.width) * cos(m * PI * y / pg.width) - cos(m * PI * x / pg.width) * cos(n * PI * y / pg.width);
            if (abs(chladni) <= epsilon) {
                pg.ellipse(x, y, 20,20);
            }
        }
    }

    for (var i = 0; i < windowWidth / pg.width; i++) {
        for (var j = 0; j < windowWidth / pg.width; j++) {

            image(pg, i*pg.width, j*pg.height)
        }
    }


    /*
    var params = "m=" + int(m) + "; n=" + int(n) + "; epsilon=" + epsilon;
    fill(0, 205, 255);
    textSize(20)
    text(params, 5, 15);*/


}






function windowResized() {

    resizeCanvas(windowWidth, windowHeight);

}
