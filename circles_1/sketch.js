var siz = 50;

function setup() {

    createCanvas(windowWidth, windowHeight);

    background(0);
    pixelDensity(1)

}


function draw() {

    background(0);
    stroke(255);
    //fill(0);
    noFill();

    for (var i = 0; i <= width; i += 100) {
        for (var j = 0; j <= height; j += 100) {
            for (var k = 0; k <= int(map(mouseX, 0, width, 1, 20)); k += 1) {
                var diam = map(mouseY, 0, height, 1, 20);
                ellipse(i, j, k * diam, k * diam);
            }
        }

    }
}
