var siz = 250
var xnum
var ynum
var xoffset
var yoffset

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    pixelDensity(1)
    xnum = int((width / siz))
    ynum = int((height / siz))
    xoffset = (width - xnum * siz) / 2
    yoffset = (height - ynum * siz) / 2
}


function draw() {
    // background(0);
    background(0);
    noFill();
    stroke(255);
    curveTightness(map(mouseX, 0, width, -50, 50));
    var res = int(map(mouseY, 0, height, 6, 180) / 3);

    for (var i = 0; i < xnum; i += 1) {
        for (var j = 0; j < ynum; j += 1) {
            create_shape(xoffset + siz / 2 + i * siz, yoffset + siz / 2 + j * siz, siz / 3, siz , PI / res);
        }
    }

}

function mousePressed() {

    siz = random(100, 300)
    xnum = int((width / siz))
    ynum = int((height / siz))
    xoffset = (width - xnum * siz) / 2
    yoffset = (height - ynum * siz) / 2
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
     xnum = int((width / siz))
    ynum = int((height / siz))
    xoffset = (width - xnum * siz) / 2
    yoffset = (height - ynum * siz) / 2
}




function create_shape(center_x, center_y,
    inner_radius, outter_radius,
    resolution) {

    beginShape();
    var iteration = 0;

    for (var i = 0; i <= TWO_PI + 3 * resolution; i += resolution) {

        var xpos, ypos;
        if (iteration % 2 == 0) {
            xpos = center_x + inner_radius * cos(i);
            ypos = center_y + inner_radius * sin(i);
        } else {
            xpos = center_x + outter_radius * cos(i);
            ypos = center_y + outter_radius * sin(i);
        }
        curveVertex(xpos, ypos);
        iteration++;
    }
    endShape();
}
