var siz = 50;
var xprev
var yprev
var xtarget
var ytarget

function setup() {

    createCanvas(windowWidth, windowHeight);

    background(255);

    colorMode(HSB, 360, 100, 100, 100)

    xprev = width / 2
    yprev = height / 2
    xtarget = width / 2
    ytarget = height / 2

}


function draw() {

    noFill()
    strokeWeight(1)
    push()
    var angle = 0
    if (xtarget < 0 || xtarget > width || ytarget < 0 || ytarget > height) {
        while (xtarget < 0 || xtarget > width || ytarget < 0 || ytarget > height) {

            angle = TWO_PI / 6 * int(random(1, 7))
            xtarget = xprev + siz * cos(angle)
            ytarget = yprev + siz * sin(angle)

        }
    } else {

        angle = TWO_PI / 6 * int(random(1, 7))
        xtarget = xprev + siz * cos(angle)
        ytarget = yprev + siz * sin(angle)
    }
    stroke(int(map(angle, 0, TWO_PI, 10, 16)) * 15, 100, 80, 15)

    line(xprev, yprev, xtarget, ytarget)

    xprev = xtarget
    yprev = ytarget
    pop()
}

function mousePressed() {
    background(255);
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    // those are to prevent to stay locked in the while loop
    background(255)
    xprev = width / 2
    yprev = height / 2
    xtarget = width / 2
    ytarget = height / 2
}
